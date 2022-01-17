const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);
const visit = [...Array(N)].fill(false);

let result = 0;

const solution = (sum, cnt) => {
  if (cnt === N) {
    let check = 0;
    for (let i = 0; i < N - 1; i++) {
      check += Math.abs(sum[i] - sum[i + 1]);
    }
    result = check > result ? check : result;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visit[i]) {
      visit[i] = true;
      solution([...sum, arr[i]], cnt + 1);
      visit[i] = false;
    }
  }
};

solution([], 0);

console.log(result);
