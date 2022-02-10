const solution = function (i) {
  const [N, ...tcArr] = i.toString().trim().split(/\s/).map(Number);
  const MAX = Math.max(...tcArr);
  const DP = Array(MAX + 1).fill(0);

  DP[1] = 1;
  DP[2] = 2;
  DP[3] = 4;
  const DIV = 1_000_000_009;
  for (let i = 4; i <= MAX; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2] + DP[i - 3]) % DIV;
  }
  let res = '';
  for (const tc of tcArr) {
    res += DP[tc] + '\n';
  }
  console.log(res.substring(0, res.length - 1));
  return res.substring(0, res.length - 1);
};

describe('1,2,3 더하기 3', () => {
  it('TC1', () => {
    expect(
      solution(`3
4
7
10`)
    ).toStrictEqual(`7
44
274`);
  });
});
