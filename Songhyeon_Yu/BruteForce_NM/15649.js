const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

// 1 2  !== 2 1 다른 경우의 수로 판단해 선택 o
// 순열

const target = +input[1];

const solution = (sum, cnt) => {
  if (cnt === target) {
    console.log(...sum.split(""));
    return;
  }
  for (let i = 1; i <= +input[0]; i++) {
    if (!sum.includes(`${i}`)) {
      solution(sum + `${i}`, cnt + 1);
    }
  }
};

solution("", 0);
