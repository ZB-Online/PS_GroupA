const solution = function (i) {
  const N = i.toString().trim() * 1;
  const DP = Array(N + 1).fill(0);
  DP[1] = 1;

  for (let i = 2; i <= N; i++) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let j = 1; j <= Math.floor(i / 2); j++) {
      if (j * j === i) {
        min = 1;
        break;
      } else min = Math.min(min, DP[j] + DP[i - j]);
    }

    DP[i] = min;
  }
  console.log(DP[N]);
  return DP[N];
};

describe('제곱수의합', () => {
  it('TC1', () => {
    expect(solution(`7`)).toStrictEqual(4);
  });
  it('TC2', () => {
    expect(solution(`1`)).toStrictEqual(1);
  });
  it('TC3', () => {
    expect(solution(`4`)).toStrictEqual(1);
  });
  it('TC4', () => {
    expect(solution(`11`)).toStrictEqual(3);
  });
  it('TC5', () => {
    expect(solution(`13`)).toStrictEqual(2);
  });
});
