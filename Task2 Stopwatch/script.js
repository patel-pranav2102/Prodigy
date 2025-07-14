let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function timeToString(time) {
  let hrs = Math.floor(time / 3600000);
  let mins = Math.floor((time % 3600000) / 60000);
  let secs = Math.floor((time % 60000) / 1000);

  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
  display.textContent = timeToString(elapsedTime);
}

startBtn.onclick = () => {
  if (running) return;
  running = true;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 1000);
};

pauseBtn.onclick = () => {
  running = false;
  clearInterval(timerInterval);
};

resetBtn.onclick = () => {
  running = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  laps.innerHTML = '';
};

lapBtn.onclick = () => {
  if (!running) return;
  const lapItem = document.createElement("li");
  lapItem.textContent = timeToString(elapsedTime);
  laps.appendChild(lapItem);
};
