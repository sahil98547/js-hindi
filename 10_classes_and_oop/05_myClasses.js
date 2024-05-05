//ES6 

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  ChangeUsername() {
    return this.username.toUpperCase();
  }
}

const chai = new User("Sahil", "sa98547@gmail.com", "123");
console.log(chai.encryptPassword());
console.log(chai.ChangeUsername());


// Behind the scene without using the class.
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function(){
  return this.password;
}

User1.prototype.ChangeUsername = function(){
  return this.username.toUpperCase();
}

const tea = new User1("tea", "teaex98547@gmail.com", "123");
console.log(tea.encryptPassword());
console.log(tea.ChangeUsername());