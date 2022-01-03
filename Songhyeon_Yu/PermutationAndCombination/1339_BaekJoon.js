// 1339
const [n, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);
const hash = {};
let sum = 0;
let alph = 9;
for (let i = 0; i < arr.length; i++) {
  for (let j = arr[i].length - 1; j >= 0; j--) {
    if (hash[arr[i][j]]) hash[arr[i][j]] += Math.pow(10, arr[i].length - 1 - j);
    else hash[arr[i][j]] = Math.pow(10, arr[i].length - 1 - j);
  }
}

const alphArr = Object.entries(hash).sort((a, b) => b[1] - a[1]);

for (let i = 0; i < alphArr.length; i++) {
  sum += alphArr[i][1] * alph;
  alph--;
}
console.log(sum);
