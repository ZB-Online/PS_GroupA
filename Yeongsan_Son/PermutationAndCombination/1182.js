const fs = require('fs');
const input = fs.readFileSync('./Yeongsan_Son/PermutationAndCombination/1182.txt').toString().trim().split('\n');
const s = +input[0].split(' ')[1];
const arr = input[1].split(' ').map(Number);

// arr의 원소를 가지고 만들 수 있는 모든 부분집합에서
// 부분집합의 합이 s와 같은 경우

function sol(arr, s) {
  const equaled = [];
  const temp = [];

  function DFS(level) {
    let sum;
    if (level === arr.length) {
      sum = temp.reduce((acc, curr) => acc + curr, 0);
      if (sum === s) equaled.push(temp.slice());
      return;
    }
    temp.push(arr[level]);
    DFS(level + 1); // 원소를 사용하는 경우
    temp.pop();
    DFS(level + 1); // 원소를 사용하지 않는 경우
  }

  DFS(0);
  // 공집합 제외
  return equaled.filter(el => el.length !== 0).length;
}

console.log(sol(arr, s));
// sol(arr, s);
