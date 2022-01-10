const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
let arr = input.map((v) => v.split(" ").map(Number));

let result = [];
const solution = (day, sum) => {
  if (day === N) {
    result.push(sum);
    return;
  }

  if (day + arr[day][0] <= N) {
    solution(day + arr[day][0], sum + arr[day][1]);
    solution(day + 1, sum);
  } else solution(day + 1, sum);
};

solution(0, 0);
console.log(Math.max(...result));
