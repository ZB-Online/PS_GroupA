const solution = function (i) {
  const [N, ...divisor] = i.toString().trim().split(/\s/).map(Number);
  const max = Math.max(...divisor);
  const min = Math.min(...divisor);
  console.log(max * min);
  return max * min;
};

describe('약수', () => {
  it('TC1', () => {
    expect(
      solution(`2
4 2`)
    ).toStrictEqual(8);
  });
  it('TC2', () => {
    expect(
      solution(`1
2`)
    ).toStrictEqual(4);
  });
  it('TC3', () => {
    expect(
      solution(`6
3 4 2 12 6 8`)
    ).toStrictEqual(24);
  });
  it('TC4', () => {
    expect(
      solution(`14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`)
    ).toStrictEqual(185192);
  });
});
