const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const arr = input.map(Number);

let result = "";
for (let N = 0; N < arr.length; N++) {
  let target = 0;
  let index = 1;
  while (true) {
    target = (target * 10 + 1) % arr[N];
    if (target === 0) {
      console.log(index);
      break;
    }
    index++;
  }
}
