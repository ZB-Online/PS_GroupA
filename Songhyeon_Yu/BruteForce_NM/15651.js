const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const target = +input[1];

// 1 2  !== 2 1 다른 경우의 수로 판단해 선택 o
// 같은 수 여러개 가능
// 순열

let result = "";
// console로 인해
const solution = (sum, cnt) => {
  if (cnt === target) {
    result += `${sum.join(" ")}\n`;
    return;
  }
  for (let i = 1; i <= +input[0]; i++) {
    solution([...sum, i], cnt + 1);
  }
};

solution([], 0);

console.log(result.trim());
