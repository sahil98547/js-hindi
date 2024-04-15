const accountId = 1233;
let accountEmail = "sahil@google.com";
var accountPassword = "1233";
accountCity = "New Delhi";

// accountId = 1234;  // not allowed
//var is not good because of scope problem

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.log(accountId);
accountEmail = "sahil@abc.com";
accountPassword = "123";
accountCity = "Delhi";

let accountState;

console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

