const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
[N, ...arr] = input;
arr = arr.map((el) => el.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  arr[i][0] = Math.min(arr[i - 1][1], arr[i - 1][2]) + arr[i][0];
  arr[i][1] = Math.min(arr[i - 1][0], arr[i - 1][2]) + arr[i][1];
  arr[i][2] = Math.min(arr[i - 1][0], arr[i - 1][1]) + arr[i][2];
}
console.log(Math.min(...arr[N - 1]));
