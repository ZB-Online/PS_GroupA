const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N] = input[0];
const arr = input.slice(1);
const visited = new Array(N).fill(false);

let result = Infinity;
const solution = (start, next, sum, cnt) => {
  if (cnt === N - 1) {
    if (arr[next][start] !== 0) {
      result = Math.min(result, sum + arr[next][start]);
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (arr[next][i] !== 0 && i !== start && !visited[i]) {
      visited[i] = true;
      solution(start, i, sum + arr[next][i], cnt + 1);
      visited[i] = false;
    }
  }
};
for (let i = 0; i < N; i++) {
  solution(i, i, 0, 0);
}

console.log(result);
