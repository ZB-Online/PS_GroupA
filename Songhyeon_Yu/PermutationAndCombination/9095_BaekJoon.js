// 9095
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const arr = input.map((el) => +el);
const pick = [1, 2, 3];

for (let x = 1; x < arr.length; x++) {
  let cnt = 0;
  const test = (s) => {
    if (s == arr[x]) {
      cnt++;
      return;
    }

    for (let i = 0; i < pick.length; i++) {
      if (s + pick[i] <= arr[x]) test(s + pick[i]);
    }
  };
  test(0);
  console.log(cnt);
}
