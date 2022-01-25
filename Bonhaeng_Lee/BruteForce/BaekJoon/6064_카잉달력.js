const solution = function (i) {
  const TC = i
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
  TC.shift();

  let result = '';
  for (const [M, N, x, y] of TC) {
    let X = x;
    let year = -1;
    while (X <= M * N) {
      if ((X - y) % N === 0) {
        year = X;
        break;
      }
      X += M;
    }
    result += year + '\n';
  }
  console.log(result.substring(0, result.length - 1));
  return result.substring(0, result.length - 1);
};

describe('카잉달력', () => {
  it('TC1', () => {
    expect(
      solution(`3
10 12 3 9
10 12 7 2
13 11 5 6`)
    ).toStrictEqual(`33
-1
83`);
  });
});
