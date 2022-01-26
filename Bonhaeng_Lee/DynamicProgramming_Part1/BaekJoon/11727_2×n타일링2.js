const solution = function (i) {
  const [E, S, M] = i.toString().trim().split(' ').map(Number);
};

describe('2xn 타일링 2', () => {
  it('TC1', () => {
    expect(solution(`1 16 16`)).toStrictEqual(16);
  });
  it('TC2', () => {
    expect(solution(`1 1 1`)).toStrictEqual(1);
  });
  it('TC3', () => {
    expect(solution(`1 2 3`)).toStrictEqual(5266);
  });
  it('TC4', () => {
    expect(solution(`15 28 19`)).toStrictEqual(7980);
  });
});
