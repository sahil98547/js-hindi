const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is completed");
    //it is important to write this method resolve() so that Promise consumed may be write.
    resolve();
  }, 1000)
})

promiseOne.then(function () {
  console.log("promise consumed");
})


// Second promise, without using variable, can direct return promise.
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000)
}).then(() => {
  console.log("Async task 2 resolved");
})


// Third promise (passing data)
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "sahil", email: "aba@example.com" });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data);
})


//4 promise ( how reject use)
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Sahil", mail: "abcd@expample.com" });
    }
    else {
      reject('Error:something went wrong');
    }
  }, 1000)
})


//4 promise (how finally use)
promiseFour.then((data) => {
  console.log(data);
  return data.mail;
}).then((temp) => {
  console.log(temp);
}).catch(function (error) {
  console.log(error);
}).finally(() => {
  console.log("The promise is either resolved or rejected");
})


//5 promise.
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    }
    else {
      reject('Error:JS went wrong');
    }
  }, 1000);
});


async function consumePromiseGive() {
  try {
    const response = await promiseFive;
    console.log(response);
  }
  catch(error) {
    console.log(error);
  }
}

consumePromiseGive();


//fetching date from async function.

// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

//Doing same thing my promise.

const GetAllUserPromise = fetch('https://jsonplaceholder.typicode.com/users');

GetAllUserPromise.then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})