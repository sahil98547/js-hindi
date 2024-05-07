///Making these function seperatly

/*
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};


const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }

  return output;
}

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }

  return output;
}

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

*/

//-------------------------------------------------------------------------------
//Making the same function but using the concept of higher order function.

//A function which take another function as input to itself or return a function from itself is known as higher order function.


//Function which pass into higher order function is known as the callback function.

const radius = [3, 1, 2, 4];

const Area = function (radius) {
  return Math.PI * radius * radius;
}

const Circumference = function (radius) {
  return 2 * Math.PI * radius;
}

const Diameter = function (radius) {
  return 2 * radius;
}

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
}

// console.log(radius.map(Area));  //map also do the same things.

// console.log(calculate(radius, Area));
// console.log(calculate(radius, Circumference));
// console.log(calculate(radius, Diameter));


//map, reduce and filter

//1) Map: The map() method creates a new array by applying a function to each element of the original array. It doesn't modify the original array; instead, it returns a new array with the modified elements.
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(num => num%2===0);
console.log(double);


//2) Filter: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//--> while you technically can use map() for filtering, it's not the intended or efficient way to achieve the desired result. filter() is specifically designed for filtering arrays based on conditions, making the code more readable and efficient.
const numbers1 = [1, 2, 3, 4, 5];
const evens = numbers1.filter(num => num % 2 === 0);
// console.log(evens);


//3) Reduce: The reduce() method executes a reducer function on each element of the array, resulting in a single output value. It iterates through the array, accumulating a single value based on the logic defined in the callback function.
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log(sum);



