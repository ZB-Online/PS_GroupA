const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);
const target = +input[1];
const arr = input
  .slice(2)
  .map(Number)
  .sort((a, b) => a - b);

let result = "";
const solution = (sum, cnt, start) => {
  if (cnt === target) {
    result += `${sum.join(" ")}\n`;
    return;
  }
  for (let i = 0; i < +input[0]; i++) {
    solution([...sum, arr[i]], cnt + 1);
  }
};

solution([], 0, 0);
console.log(result.trim());
