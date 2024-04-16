//map and filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let newNums = myNums.map((num) => { return num + 10 });

newNums = myNums.map((num) => { return num * 10 }).map((num) => { return num + 1 }).filter((nums) => {
  { return nums > 50 }
})

console.log(newNums);