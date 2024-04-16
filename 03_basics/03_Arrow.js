const user = {
  username: "Sahil",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  }
}

// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "sahil"
//   console.log(this.username);
// }

// chai();

// const chai = () => {
//   let username = "sahil"
//   console.log(this.username);
// }

// chai();




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Sahil" })


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()