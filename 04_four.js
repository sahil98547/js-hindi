const myOjbect = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

//iterate through an array.
for (const key in myOjbect) {
  // console.log(`${key} shortcut is for ${myOjbect[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
  // console.log(programming[key]);
}


const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('UK', "United Kingdom");

for (const key in map) {
  // console.log(key);
}