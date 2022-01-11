const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ");

const answer = [];

const check = (str, cnt) => {
  if (cnt === N) {
    answer.push(str);
    return;
  }

  const target = str[cnt];

  if (arr[cnt] == ">") {
    for (let i = 0; i < 10; i++) {
      if (!str.includes(`${i}`) && target > i) check(str + `${i}`, cnt + 1);
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (!str.includes(`${i}`) && target < i) check(str + `${i}`, cnt + 1);
    }
  }
};

for (let i = 0; i < 10; i++) {
  check(`${i}`, 0);
}
console.log(answer[answer.length - 1]);
console.log(answer[0]);
