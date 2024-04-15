// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "12abs";
tinderUser.name = "sawan";
tinderUser.loggedIn = false;

// console.log(tinderUser);

//nexted looping.
const regularUser = {
  userName: {
    firstname: "sahil",
    lastName: "aggarwal",
  }
}

// console.log(regularUser.userName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };    //like array
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);


const users = [
  {
    id: 1,
    email: "abc@gmail.com"
  },
  {
    id: 1,
    email: "abc@gmail.com"
  },
  {
    id: 1,
    email: "abc@gmail.com"
  }
]

// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('loggedIn'));


const course = {
  coursename: "js in hindi",
  price: "199",
  courseInstructor: "hitesh"
}

const { courseInstructor: instructor } = course;

console.log(instructor);

// {
//   "name": "hitesh",
//     "courseName": "js in hindi",
//       "price": "free"
// }