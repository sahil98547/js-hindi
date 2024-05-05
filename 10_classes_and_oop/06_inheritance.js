class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
};


class Teacher extends User {
  constructor(username, email, password) {
    //super will directly do all the things behind the scene.
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`a new course was added by ${this.username}`);
  }
};

const chai = new Teacher("chai", "chai2345@gmail.com", "1234");
// console.log(chai);
// chai.addCourse();
chai.logMe();


const masalaChai = new User("masalaChai");
masalaChai.logMe();

// console.log(chai === Teacher);
console.log(chai instanceof User);