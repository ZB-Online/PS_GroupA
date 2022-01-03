// 1463
const fs = require("fs");
let N = +fs.readFileSync("./dev/stdin").toString().trim();
const arr = new Array(N + 1);
arr[1] = 0;
arr[2] = 1;
arr[3] = 1;

for (let i = 4; i <= N; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    arr[i] = arr[i - 1] + 1;
  } else if (i % 2 === 0 && i % 3 === 0) {
    arr[i] = Math.min(arr[i - 1] + 1, arr[i / 2] + 1, arr[i / 3] + 1);
  } else if (i % 2 === 0) {
    arr[i] = Math.min(arr[i - 1] + 1, arr[i / 2] + 1);
  } else if (i % 3 === 0) {
    arr[i] = Math.min(arr[i - 1] + 1, arr[i / 3] + 1);
  }
}

console.log(arr[N]);
