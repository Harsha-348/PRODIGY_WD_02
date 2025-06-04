let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function formatTime(ms) {
  let hours = Math.floor(ms / 3600000);
  let minutes = Math.floor((ms % 3600000) / 60000);
  let seconds = Math.floor((ms % 60000) / 1000);

  return (
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

function startTimer() {
  if (!running) {
    startTime = Date.now() - (difference || 0);
    timerInterval = setInterval(() => {
      updatedTime = Date.now() - startTime;
      display.textContent = formatTime(updatedTime);
    }, 1000);
    running = true;
  }
}

function pauseTimer() {
  if (running) {
    clearInterval(timerInterval);
    difference = Date.now() - startTime;
    running = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  difference = 0;
  running = false;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
