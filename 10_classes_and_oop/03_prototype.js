// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
};


//if we give power to object then array, function and string can also do the same thing because they are lower than object.
Object.prototype.sahil = function(){
    console.log(`Sahil is present in all objects`);
};


//if we give power to lower then it will not go to object only array can use this 
Array.prototype.heySahil = function(){
    console.log(`Sahil says hello`);
};

// heroPower.sahil();
// myHeros.sahil()
// myHeros.heySahil();

//This will not execute.
// heroPower.heySahil();



// inheritance
const User = {
  name: "chai",
  email: "chai@google.com"
};

const Teacher = {
  makeVideo: true
};

const TeachingSupport = {
  isAvailable: false
};

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
};

Teacher.__proto__ = User;

// Initially, you set Teacher as the prototype of TeachingSupport. This means that TeachingSupport inherits properties from Teacher.

// modern syntax( means TeachingSupport can also excess the property of Teacher now)
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"sahil".trueLength();
"iceTea".trueLength();
