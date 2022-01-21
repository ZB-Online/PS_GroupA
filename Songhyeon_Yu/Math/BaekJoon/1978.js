const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const N = input.shift();
const arr = input;
let result = 0;

for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 1; j <= arr[i]; j++) {
    if (arr[i] % j === 0) cnt++;
  }
  if (cnt === 2) result++;
}
console.log(result);
