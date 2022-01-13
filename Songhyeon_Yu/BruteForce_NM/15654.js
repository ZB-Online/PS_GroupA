const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);
const target = +input[1];
const arr = input
  .slice(2)
  .map(Number)
  .sort((a, b) => a - b);

const solution = (sum, cnt) => {
  if (cnt === target) {
    console.log(...sum);
    return;
  }
  for (let i = 0; i < +input[0]; i++) {
    if (!sum.includes(arr[i])) {
      solution([...sum, arr[i]], cnt + 1);
    }
  }
};

solution([], 0);
