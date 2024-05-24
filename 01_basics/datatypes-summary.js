
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "sahil",
  age: 22,
}

const myFunction = function () {
  console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) , Heap(Non - primitive)


//primitive data type here a new copy assign.
let myYoutubename = "sahildotcom";
let anothername = myYoutubename;
anothername = "sahilcoder";

console.log(myYoutubename);
console.log(anothername);


//Non primitive data type(point to the original value);

let userOne = {
  email: "user@google.com",
  upi: "user@apl"
}

let userTwo = userOne;

userTwo.email = "sahil@google.com";
console.log(userOne.email);
console.log(userTwo.email);

