let currentHour = 23;
let currentMinute = 44;

const openHour = 7;
const openMinute = 0;
const closeHour = 23;
const closeMinute = 30;

function currentTime() {
  const now = new Date();
  now.setHours(currentHour);
  now.setMinutes(currentMinute);
  now.setSeconds(0);

  const open = new Date();
  open.setHours(openHour);
  open.setMinutes(openMinute);
  open.setSeconds(0);

  const close = new Date();
  close.setHours(closeHour);
  close.setMinutes(closeMinute);
  close.setSeconds(0);

  const statusText = document.getElementById("status-text");
  const countdownTime = document.getElementById("countdown-time");

  if (now < open) {
    statusText.textContent = "금일 오픈까지 남은 시간";
    const diff = open - now;
    countdownTime.textContent = formatTime(diff);
  } else if (now >= open && now <= close) {
    statusText.textContent = "금일 마감까지 남은 시간";
    const diff = close - now;
    countdownTime.textContent = formatTime(diff);
  } else {
    statusText.textContent = "금일 마감";
    countdownTime.textContent = "";
  }
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

setInterval(currentTime, 1000);
currentTime();
