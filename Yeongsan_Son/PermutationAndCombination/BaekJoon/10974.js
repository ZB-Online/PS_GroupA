// 모든 순열
// const fs = require('fs');
// const input = +fs.readFileSync('./Yeongsan_Son/PermutationAndCombination/10974.txt').toString();

function sol(n) {
  let answer = [];
  let arr = Array.from({ length: n }, (v, index) => index + 1);
  let check = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: n }, () => 0);

  function DFS(level) {
    if (level === n) answer.push(temp.slice());
    else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[level] = arr[i];
          DFS(level + 1);
          check[i] = 0;
        }
      }
    }
  }
  DFS(0);
  console.log(answer);
  return answer;
  // return answer
  //   .map((el) => el.join(' '))
  //   .reduce((acc, curr) => {
  //     acc = acc + curr + '\n';
  //     return acc;
  //   }, '');
}

// console.log(sol(input));
test('TC1', () => {
  expect(sol(3)).toStrictEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});
