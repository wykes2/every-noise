let genres = [];
let currentRound = 0;
let score = 0;
let currentGenre = null;
let options = [];
const totalRounds = 10;

const elements = {
  audio: document.getElementById('audio'),
  playBtn: document.getElementById('play-btn'),
  audioHint: document.getElementById('audio-hint'),
  optionsContainer: document.getElementById('options'),
  scoreDisplay: document.getElementById('score'),
  roundDisplay: document.getElementById('round'),
  feedback: document.getElementById('feedback'),
  nextBtn: document.getElementById('next-btn'),
  gameOver: document.getElementById('game-over'),
  finalScore: document.getElementById('final-score'),
  restartBtn: document.getElementById('restart-btn')
};

async function loadGenres() {
  try {
    const response = await fetch('/genres.json');
    if (!response.ok) {
      console.log('Full genres.json not found, using sample data');
      const sampleResponse = await fetch('/genres-sample.json');
      genres = await sampleResponse.json();
    } else {
      genres = await response.json();
    }
    
    genres = genres.filter(g => g.spotifyTrackId || g.audioUrl);
    
    if (genres.length === 0) {
      alert('No genres with audio found. Please run the scraper first: npm run scrape');
      return;
    }
    
    console.log(`Loaded ${genres.length} genres with audio`);
    startNewRound();
  } catch (error) {
    console.error('Error loading genres:', error);
    alert('Failed to load genre data. Please check the console.');
  }
}

function getRandomGenres(count, excludeGenre = null) {
  const availableGenres = excludeGenre 
    ? genres.filter(g => g.name !== excludeGenre.name)
    : [...genres];
  
  const shuffled = availableGenres.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function startNewRound(retryCount = 0, skipIncrement = false) {
  if (currentRound >= totalRounds) {
    endGame();
    return;
  }
  
  if (retryCount === 0) {
    // Only increment if not skipping (for retry scenarios)
    if (!skipIncrement) {
      currentRound++;
      elements.roundDisplay.textContent = `${currentRound}/${totalRounds}`;
      console.log(`📍 Round incremented to: ${currentRound}/${totalRounds}`);
    } else {
      console.log(`⏭️ Skipping increment, staying at: ${currentRound}/${totalRounds}`);
    }
    
    // Always pause audio and reset to initial play button state
    elements.audio.pause();
    elements.audio.currentTime = 0;
    elements.playBtn.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
    elements.playBtn.disabled = true;
  }
  
  if (retryCount > 0 && retryCount <= 20) {
    elements.audioHint.textContent = `Finding track with preview... (${retryCount}/20)`;
  } else if (retryCount === 0) {
    elements.audioHint.textContent = 'Click play to hear the sample';
  }
  
  currentGenre = genres[Math.floor(Math.random() * genres.length)];
  
  const wrongOptions = getRandomGenres(3, currentGenre);
  options = [...wrongOptions, currentGenre].sort(() => 0.5 - Math.random());
  
  let audioLoaded = false;
  
  if (currentGenre.spotifyTrackId) {
    try {
      const response = await fetch(`/api/preview?trackId=${currentGenre.spotifyTrackId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`⚠️ No preview available for "${currentGenre.name}", trying another...`);
        }
      } else {
        const data = await response.json();
        
        if (data.preview_url) {
          elements.audio.src = data.preview_url;
          elements.audio.load();
          audioLoaded = true;
          console.log(`✅ Audio loaded: ${currentGenre.name}`);
        }
      }
    } catch (error) {
      console.warn(`Failed to fetch preview for "${currentGenre.name}":`, error.message);
    }
  } else if (currentGenre.audioUrl) {
    elements.audio.src = currentGenre.audioUrl;
    elements.audio.load();
    audioLoaded = true;
  }
  
  if (!audioLoaded && retryCount < 20) {
    return startNewRound(retryCount + 1);
  }
  
  if (!audioLoaded) {
    console.error('❌ Could not find a track with preview after 20 attempts');
    
    // Reset UI state
    elements.playBtn.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
    elements.playBtn.disabled = false;
    elements.audioHint.textContent = 'Click play to hear the sample';
    
    // Try again automatically after showing error (pass retryCount to avoid re-incrementing)
    setTimeout(() => {
      startNewRound(0, true);
    }, 1000);
    return;
  }
  
  elements.audioHint.textContent = 'Click play to hear the sample';
  renderOptions();
  resetFeedback();
  
  elements.playBtn.disabled = false;
}

function renderOptions() {
  elements.optionsContainer.innerHTML = '';
  
  options.forEach((genre, index) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.textContent = genre.name;
    button.addEventListener('click', () => selectOption(genre, button));
    elements.optionsContainer.appendChild(button);
  });
}

function selectOption(selectedGenre, button) {
  const allButtons = elements.optionsContainer.querySelectorAll('.option-button');
  allButtons.forEach(btn => btn.disabled = true);
  
  const isCorrect = selectedGenre.name === currentGenre.name;
  
  if (isCorrect) {
    button.classList.add('correct');
    score++;
    elements.scoreDisplay.textContent = score;
    showFeedback(true, `Correct! It's ${currentGenre.name}`);
  } else {
    button.classList.add('wrong');
    allButtons.forEach(btn => {
      if (btn.textContent === currentGenre.name) {
        btn.classList.add('correct');
      }
    });
    showFeedback(false, `Wrong! It was ${currentGenre.name}`);
  }
  
  elements.nextBtn.classList.remove('hidden');
}

function showFeedback(isCorrect, message) {
  elements.feedback.textContent = message;
  elements.feedback.className = isCorrect ? 'feedback success' : 'feedback error';
}

function resetFeedback() {
  elements.feedback.className = 'feedback hidden';
  elements.nextBtn.classList.add('hidden');
}

function endGame() {
  elements.optionsContainer.innerHTML = '';
  elements.finalScore.textContent = score;
  elements.gameOver.classList.remove('hidden');
  document.getElementById('question').style.display = 'none';
  document.getElementById('audio-section').style.display = 'none';
}

function restartGame() {
  currentRound = 0;
  score = 0;
  elements.scoreDisplay.textContent = '0';
  elements.gameOver.classList.add('hidden');
  document.getElementById('question').style.display = 'block';
  document.getElementById('audio-section').style.display = 'block';
  
  // Reset button to initial play state
  elements.audio.pause();
  elements.audio.currentTime = 0;
  elements.playBtn.innerHTML = `
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  `;
  
  startNewRound();
}

elements.playBtn.addEventListener('click', () => {
  if (elements.audio.paused) {
    elements.audio.play();
    elements.playBtn.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    `;
  } else {
    elements.audio.pause();
    elements.playBtn.innerHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
  }
});

elements.audio.addEventListener('ended', () => {
  elements.playBtn.innerHTML = `
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  `;
});

elements.nextBtn.addEventListener('click', startNewRound);
elements.restartBtn.addEventListener('click', restartGame);

loadGenres();
