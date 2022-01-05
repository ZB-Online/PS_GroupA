// 6개 중에서 4개를 선택할 수 있는 경우 → 6C4
// 사전식 정렬
// const fs = require('fs');
// let [len, ...str] = fs
//   .readFileSync('./Yeongsan_Son/PermutationAndCombination/BaekJoon/1759.txt')
//   .toString()
//   .trim()
//   .split('\n');
// len = len.split(' ');
// str = str.join('').split(' ');

function sol(arr, L) {
  arr.sort();
  const answer = [];
  const check = Array.from({ length: arr.length }, () => 0);
  let temp = [];

  function DFS(level, picked) {
    if (level > arr.length) return;
    if (picked === L) {
      answer.push(temp.join(''));
      return;
    }

    temp.push(arr[level]);
    check[level] = 1;
    DFS(level + 1, picked + 1);
    temp.pop();
    check[level] = 0;
    DFS(level + 1, picked);
  }
  DFS(0, 0);
  return answer.filter(el => el.includes('a') || el.includes('i'));
}

// console.log(sol(str, +len[0]));

// test('TC1', () => {
//   // [a, c, i, s, t, w]
//   expect(sol(['a', 't', 'c', 'i', 's', 'w'], 4)).toStrictEqual([
//     'acis',
//     'acit',
//     'aciw',
//     'acst',
//     'acsw',
//     'actw',
//     'aist',
//     'aisw',
//     'aitw',
//     'astw',
//     'cist',
//     'cisw',
//     'citw',
//     'istw',
//   ]);
// });
