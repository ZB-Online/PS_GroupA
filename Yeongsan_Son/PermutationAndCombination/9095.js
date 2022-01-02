const fs = require('fs');
const input = fs.readFileSync('./Yeongsan_Son/PermutationAndCombination/9095.txt').toString().split('\n').map(Number);
// let [range, ...numbers] = input;
const numbers = input.slice(1);

function sol(numbers) {
  let count = 0;
  // number 배열의 각 요소에 대한 경우의수
  function DFS(sum, n) {
    if (sum > n) return;
    if (sum === n) {
      count++;
      return;
    }
    let op = 1;
    while (op < 4) {
      DFS(sum + op, n);
      op++;
    }
  }

  const answer = [];
  numbers.forEach(num => {
    count = 0;
    DFS(0, num);
    answer.push(count);
  });

  answer.forEach(el => console.log(el));
}

sol(numbers);
