const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
let arr = input.map((v) => v.split(" ").map(Number));
const visited = Array(N).fill(false);

let result = Infinity;
const solution = (start, cnt) => {
  if (cnt > 0) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (visited[i] && visited[j]) team1 += arr[i][j];
        if (!visited[i] && !visited[j]) team2 += arr[i][j];
      }
    }

    if (Math.abs(team1 - team2) < result) result = Math.abs(team1 - team2);
  }

  for (let i = start; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      solution(i + 1, cnt + 1);
      visited[i] = false;
    }
  }
};

solution(0, 0);
console.log(result);
