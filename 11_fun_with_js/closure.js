// a closure gives you access to an outer function's scope from an inner function.
// real life example in closure.html

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); 