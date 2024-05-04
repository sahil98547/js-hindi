// Generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;

const startChangingColor = function () {
  // Check if interval is already running
  if (intervalId) {
    return; // Exit early if interval is already running
  }

  const changeBg = function () {
    document.querySelector('body').style.backgroundColor = randomColor();
  }

  intervalId = setInterval(changeBg, 1000);
  document.querySelector('#start').disabled = true;
}

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId when stopped
  document.querySelector('#start').disabled = false;
}

document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
