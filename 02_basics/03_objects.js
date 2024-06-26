// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sahil",
  "full name": "Sahil Aggarwal",   //this will not work by dot(.) operator.
  [mySym]: "mykey1",  //how to define symbol in the form of key value.
  age: 18,
  location: "Delhi",
  email: "sahil@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser);

JsUser.greeting = function () {
  // console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
  // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());