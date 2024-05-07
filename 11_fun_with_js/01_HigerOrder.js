
// Note: The function that we pass as an argument to another function is called a callback function. 
function sayHello() {
  return "Hello, ";
}

function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}

// Pass `sayHello` as an argument to `greeting` function.
// sayHello() is a callback function.
// greeting(sayHello, "JavaScript!");
// Hello, JavaScript!


// A function that returns a function or takes other functions as arguments is called a higher-order function.

function sayHello() {
  return () => {
    console.log("Hello!");
  }
}

const temp = sayHello();
temp();
