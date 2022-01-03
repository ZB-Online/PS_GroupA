// 2309
const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const target = input.reduce((acc, cur) => acc + cur) - 100;

let result;

for (let i = 0; i < input.length; i++) {
  let forBreak = false;
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === target) {
      result = input
        .filter((item) => item !== input[i] && item !== input[j])
        .sort((a, b) => a - b);
      forBreak = true;
      break;
    }
  }
  if (forBreak) break;
}

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
