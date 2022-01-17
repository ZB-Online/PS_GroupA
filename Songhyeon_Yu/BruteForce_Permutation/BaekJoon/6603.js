const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((x) => +x));
input.pop();

let answer = "";
for (let x = 0; x < input.length; x++) {
  const range = input[x].shift();
  const solution = (sum, start, cnt) => {
    if (cnt === 6) {
      answer += `${sum.join(" ")}\n`;
      return;
    }
    for (let i = start; i < range; i++) {
      solution([...sum, input[x][i]], i + 1, cnt + 1);
    }
  };

  solution([], 0, 0);
  answer += `\n`;
}
console.log(answer);
