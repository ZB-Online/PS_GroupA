const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, M, K] = input[0];
const visited = Array(N).fill(Array(M).fill(false));

let arr = input.splice(1);
let result = 0;
const dirX = [0, 0, 1, -1];
const dirY = [1, -1, 0, 0];

const solution = (sum, cnt, x, y, test) => {
  if (cnt === K) {
    result = Math.max(result, sum);
    console.log(test);
    return;
  }

  for (let i = x; i < N; i++) {
    let c2 = 0;
    if (i == x) c2 = y;
    for (let j = c2; j < M; j++) {
      if (visited[i][j]) continue;
      let check = true;
      for (let q = 0; q < 4; q++) {
        let nx = i + dirX[q];
        let ny = j + dirY[q];
        if (0 <= nx && nx < N && 0 <= ny && ny < M && visited[nx][ny]) {
          check = false;
        }
      }

      if (check) {
        visited[i][j] = true;
        solution(sum + arr[i][j], cnt + 1, i, j, [...test, arr[i][j]]);
        visited[i][j] = false;
      }
    }
  }
};

solution(0, 0, 0, 0, []);
