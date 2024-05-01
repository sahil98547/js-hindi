//generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeBg = function(){
  document.querySelector('body').style.backgroundColor = randomColor();
}

let IntervalId;

const startChangingColor = function () {
  IntervalId = setInterval(changeBg, 1000);
}

const stopChangingColor = function(){
  clearInterval(IntervalId)
  IntervalId = null;
}

document.querySelector("#start").addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
