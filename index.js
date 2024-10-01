// index.js

let timerInterval;
let timeElapsed = 0; // Time in seconds

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Format time as HH:MM:SS
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return (
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(secs).padStart(2, '0')
  );
}

// Update timer display
function updateTimerDisplay() {
  timerElement.textContent = formatTime(timeElapsed);
}

// Start timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeElapsed++;
    updateTimerDisplay();
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

// Stop timer
function stopTimer() {
  clearInterval(timerInterval);

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Reset timer
function resetTimer() {
  clearInterval(timerInterval);
  timeElapsed = 0;
  updateTimerDisplay();

  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display
updateTimerDisplay();
