// const fs = require('fs');
// const input = fs.readFileSync('./Yeongsan_Son/PermutationAndCombination/2309.txt').toString().split('\n').map(Number);

// 9명의 난쟁이들의 키의 합에서
// 9명 중 2명을 선택해 가짜 난쟁이의 키를 뺀 값이 100인 경우
// 가짜 난쟁이의 키를 뺀 배열을 반환

function sol(arr) {
  arr.sort((a, b) => a - b);
  let len = arr.length;
  let sum = arr.reduce((acc, curr) => acc + curr, 0); // 9명의 난장이 키 합140

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        // 9명의 난장이 키의 합에서 가짜 난쟁이 2명의 키의 합의 차가 100이면 가짜 난장이 소거
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return arr;
  // .reduce((acc, curr) => {
  //   acc = acc + curr + '\n';
  //   return acc;
  // }, '');
}

test('TC1', () => {
  expect(sol([20, 7, 23, 19, 10, 15, 25, 8, 13])).toStrictEqual([7, 8, 10, 13, 19, 20, 23]);
});
