const solution = function (i) {
  const [[N, M], ...matrix] = i
    .toString()
    .trim()
    .split('\n')
    .map((v, i) =>
      i === 0 ? v.split(' ').map(Number) : v.split(' ').map(v => +v)
    );
};

describe('1,2,3 더하기 5', () => {
  it('TC1', () => {
    expect(
      solution(`5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1`)
    ).toStrictEqual(19);
  });
  it('TC2', () => {
    expect(
      solution(`4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`)
    ).toStrictEqual(20);
  });
  it('TC3', () => {
    expect(
      solution(`4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`)
    ).toStrictEqual(7);
  });
});
