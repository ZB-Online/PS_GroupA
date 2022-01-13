const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, M, K] = input[0];
const visited = Array.from({ length: N }, () => Array(M).fill(false));

let arr = input.splice(1);
let result = Number.MIN_SAFE_INTEGER;
const dirX = [1, 0, -1, 0];
const dirY = [0, 1, 0, -1];

const solution = (sum, cnt, x, y) => {
  if (cnt === K) {
    result = Math.max(result, sum);
    return;
  }

  for (let i = x; i < N; i++) {
    for (let j = y; j < M; j++) {
      if (visited[i][j]) continue;
      // check
      let check = true;
      for (let q = 0; q < 4; q++) {
        let nx = i + dirX[q];
        let ny = j + dirY[q];
        if (0 <= nx && nx < N && 0 <= ny && ny < M && visited[nx][ny]) {
          check = false;
          break;
        }
      }
      // -----
      if (check) {
        visited[i][j] = true;
        solution(sum + arr[i][j], cnt + 1, x, y);
        visited[i][j] = false;
      }
    }
  }
};

solution(0, 0, 0, 0);
console.log(result);
