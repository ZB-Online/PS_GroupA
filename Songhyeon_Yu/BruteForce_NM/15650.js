const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

// 1 2  !== 2 1 같은 경우의 수로 판단해 선택 x
// 조합

const target = +input[1];

const solution = (sum, cnt, start) => {
  if (cnt === target) {
    console.log(...sum.split(""));
    return;
  }
  for (let i = start; i <= +input[0]; i++) {
    solution(sum + `${i}`, cnt + 1, i + 1);
  }
};

solution("", 0, 1);
