// 1182
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);
const target = +input[1];
const arr = input.slice(2).map(Number);
let cnt = 0;

const recursion = (sum, pick) => {
  if (pick === arr.length) {
    if (sum === target) cnt += 1;
    return;
  }

  recursion(sum + arr[pick], pick + 1);
  recursion(sum, pick + 1);
};
recursion(0, 0);
if (target === 0) cnt--;
console.log(cnt);
