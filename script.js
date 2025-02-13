// Get elements
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const envelopeScreen = document.getElementById('envelopeScreen');
const letterScreen = document.getElementById('letterScreen');
const valentineScreen = document.getElementById('valentineScreen');
const openButton = document.getElementById('openButton');
const continueButton = document.getElementById('continueButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const playPauseButton = document.getElementById('playPauseButton');
const volumeSlider = document.getElementById('volumeSlider');
const backgroundMusic = document.getElementById('backgroundMusic');

// Start button functionality
startButton.addEventListener('click', () => {
  startScreen.style.display = 'none'; // Hide start screen
  envelopeScreen.style.display = 'flex'; // Show envelope screen
  backgroundMusic.volume = 0.6; // Set volume to 60%
  backgroundMusic.play(); // Start playing music
  playPauseButton.textContent = '⏸️'; // Update button to pause icon
});

// Open the letter
openButton.addEventListener('click', () => {
  envelopeScreen.style.display = 'none';
  letterScreen.style.display = 'flex';
});

// Continue to Valentine question
continueButton.addEventListener('click', () => {
  letterScreen.style.display = 'none';
  valentineScreen.style.display = 'flex';
});

// Move the "No!" button randomly within the valentine-content box
noButton.addEventListener('mouseover', () => {
  const valentineContent = document.querySelector('.valentine-content');
  const contentRect = valentineContent.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = contentRect.width - buttonRect.width;
  const maxY = contentRect.height - buttonRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Handle "Yes!" button click
yesButton.addEventListener('click', () => {
  logAnswer('Ja!');
  alert("Yay! Du hast mich zum glücklichsten Menschen der Welt gemacht! ❤️");
});

// Handle "No!" button click
noButton.addEventListener('click', () => {
  logAnswer('Nö!');
  alert("Oh nein! Bitte überdenke es nochmal! 🥺");
});

// Log answer to answers.txt
function logAnswer(answer) {
  const timestamp = new Date().toLocaleString();
  const logEntry = `${timestamp}: ${answer}\n`;

  // Simulate logging to a file (for demonstration purposes)
  console.log(logEntry); // Log to console
  // In a real server environment, you'd use a backend script to write to a file.
}

// Music Player Controls
playPauseButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playPauseButton.textContent = '⏸️';
  } else {
    backgroundMusic.pause();
    playPauseButton.textContent = '⏯️';
  }
});

volumeSlider.addEventListener('input', () => {
  backgroundMusic.volume = volumeSlider.value;
});