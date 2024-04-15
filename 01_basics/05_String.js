const name = "Sahil"
const repoCount = 36;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// const gameName = new String('sahil-coder-com');
const gameName = new String("Sahil Aggarwal");

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-11, 4)
// console.log(anotherString);

const newStringOne = "   sahil    "
// console.log(newStringOne); 


//trim will remove the whitespaces
// console.log(newStringOne.trim());

const url = "https://sahil.com/hitesh%20aggarwal"

// console.log(url.replace('%20', '-'))

//will present or not
// console.log(url.includes('sahil'))


//it will split the string according to the passing paramter.
console.log(gameName.split('-'));