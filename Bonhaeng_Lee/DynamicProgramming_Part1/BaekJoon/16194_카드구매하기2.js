const solution = function (i) {
  const TC = i
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
  TC.shift();
};

describe('카드 구매하기 2', () => {
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
