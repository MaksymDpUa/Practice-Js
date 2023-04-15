const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const [daysEl, hoursEl, minutesEl, secondsEl] =
  document.querySelectorAll(".numbers");

let intervalId = null;
let startTime = null;

function updateTime() {
  const currentTime = Date.now();
  const timeDifference = currentTime - startTime;

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((seconds / 60) % 60);
  const hours = Math.floor((minutes / 60) % 60);
    const days = Math.floor(hours / 24);
    
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  daysEl.textContent = days < 10 ? `0${days}` : days;
}

function onStart() {
  startTime = Date.now();
  intervalId = setInterval(updateTime, 1000);
}

function onStop() {
  clearInterval(intervalId);
}

startEl.addEventListener("click", onStart);
stopEl.addEventListener("click", onStop);
