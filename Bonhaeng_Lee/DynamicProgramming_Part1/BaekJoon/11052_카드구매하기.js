const solution = function (i) {
  const [N, ...graph] = i
    .toString()
    .trim()
    .split(/\s/)
    .map((v, i) => (i === 0 ? +v : v.split('')));
};

describe('카드구매하기', () => {
  it('TC1', () => {
    expect(
      solution(`3
CCP
CCP
PPC`)
    ).toStrictEqual(3);
  });
  it('TC2', () => {
    expect(
      solution(`4
PPPP
CYZY
CCPY
PPCC`)
    ).toStrictEqual(4);
  });
  it('TC3', () => {
    expect(
      solution(`5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`)
    ).toStrictEqual(4);
  });
});
