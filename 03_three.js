// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(arr[num - 1]);
}

// const number = [1, 2, 3, 4];

// function helper(num) {
//   return num * num;
// }

// const doubleNumber = number.map(helper);

// console.log(doubleNumber);   


const greetings = "Hello world!"
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}


const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('UK', "United Kingdom");


// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}


const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}
// TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }