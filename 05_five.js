const numbers = [1, 2, 3, 4, 5];

//Higer order function
// numbers.forEach(function (num) {
//   console.log(num);
// })

numbers.forEach((num) => {
  // console.log(num);
})


function printMe(item) {
  // console.log(item);
}

// numbers.forEach(printMe);

numbers.forEach((item, index, arr) => {
  // console.log(item, index, arr);
})


const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "Cpp",
    languageFileName: "c++"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
]


myCoding.forEach((num) => {
  // console.log(num.languageName);
})
