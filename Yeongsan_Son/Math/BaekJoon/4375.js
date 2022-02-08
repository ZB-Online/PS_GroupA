/*
1. (i * n) * 10 + 1
*/

function sol(input) {
  const nums = input.toString().trim().split('\n').map(Number);
  console.log(nums);
  const temp = [];
  let i = 1;

  for (let num of nums) {
    let count = 1;
    let flag = true;
    while (flag) {
      if (i % num === 0) {
        temp.push(count);
        flag = false;
      }
      i = (i % num) * 10 + 1;
      count++;
    }
  }

  return temp.reduce((acc, curr) => {
    acc += curr + '\n';
    return acc;
  }, '');
}

test('TC1', () => {
  expect(
    sol(`3
7
9901`)
  ).toStrictEqual(`3
6
12`);
});
