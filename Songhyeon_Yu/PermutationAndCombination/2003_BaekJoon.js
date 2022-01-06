const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);
const target = +input[1];
const lastIndex = +input[0];
const arr = input.slice(2).map(Number);

let cnt = 0;
const recursion = (sum, index) => {
  if (sum === target) {
    cnt++;
    return;
  }
  if (sum > target) return;
  if (index >= lastIndex - 1) return;
  recursion(sum + arr[index + 1], index + 1);
};
for (let i = 0; i < arr.length; i++) {
  recursion(arr[i], i);
}
console.log(cnt);
