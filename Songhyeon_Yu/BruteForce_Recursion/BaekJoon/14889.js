const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
let arr = input.map((v) => v.split(" ").map(Number));

let answer = Infinity;
const solution = (startTeam, cnt, start) => {
  if (cnt === N / 2) {
    let linkTeam = [];
    for (let i = 0; i < arr[0].length; i++) {
      if (!startTeam.includes(i)) linkTeam.push(i);
    }
    let start = 0;
    let link = 0;
    for (let i = 0; i < startTeam.length; i++) {
      for (let j = 0; j < startTeam.length; j++) {
        start += arr[startTeam[i]][startTeam[j]];
        link += arr[linkTeam[i]][linkTeam[j]];
      }
    }
    if (answer > Math.abs(start - link)) answer = Math.abs(start - link);
    return;
  }
  for (let i = start; i < N; i++) {
    if (!startTeam.includes(i)) {
      startTeam.push(i);
      solution(startTeam, cnt + 1, i + 1);
      startTeam.splice(startTeam.indexOf(i), 1);
    }
  }
};

solution([], 0, 0);
console.log(answer);
