const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
const body = document.body;

const TIME_DELAY = 1000;

let timerId = null;

startEl.addEventListener('click', onStartElClick);
stopEl.addEventListener('click', onStopElClick);

function onStartElClick() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, TIME_DELAY);

  if (onStartElClick) {
    startEl.disabled = true;
  }
}

function onStopElClick() {
  clearInterval(timerId);

  if (onStopElClick) {
    startEl.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
