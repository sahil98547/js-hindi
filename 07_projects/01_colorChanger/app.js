/*
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  const temp = button.getAttribute('id');

  button.addEventListener('click', () => {
    if (temp === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    else if (temp === 'white') {
      body.style.backgroundColor = 'white';
    }
    else if (temp === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    else {
      body.style.backgroundColor = 'yellow';
    }
  })
})
*/



//2 method by code with chai.
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


