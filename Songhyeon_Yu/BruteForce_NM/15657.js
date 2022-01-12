const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);
const target = +input[1];
const arr = input
  .slice(2)
  .map(Number)
  .sort((a, b) => a - b);

const solution = (sum, cnt, start) => {
  if (cnt === target) {
    console.log(...sum);
    return;
  }
  for (let i = start; i < +input[0]; i++) {
    solution([...sum, arr[i]], cnt + 1, i);
  }
};

solution([], 0, 0);
