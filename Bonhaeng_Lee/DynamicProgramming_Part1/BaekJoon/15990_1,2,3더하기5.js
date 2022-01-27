const solution = function (i) {
  const [T, ...tcArr] = i.toString().trim().split('\n').map(Number);
  let result = '';
  // 시간 초과 방지
  const max = Math.max(...tcArr);

  const DP = Array.from({ length: max + 1 }, () =>
    Array.from({ length: 4 }, () => 0)
  );
  DP[1][1] = 1;
  DP[2][2] = 1;
  DP[3][1] = 1;
  DP[3][2] = 1;
  DP[3][3] = 1;
  for (let i = 4; i <= max; i++) {
    DP[i][1] = (DP[i - 1][2] + DP[i - 1][3]) % 1000000009;
    DP[i][2] = (DP[i - 2][1] + DP[i - 2][3]) % 1000000009;
    DP[i][3] = (DP[i - 3][1] + DP[i - 3][2]) % 1000000009;
  }

  for (const tc of tcArr) {
    result += ((DP[tc][1] + DP[tc][2] + DP[tc][3]) % 1000000009) + '\n';
  }

  console.log(result.substring(0, result.length - 1));
  return result.substring(0, result.length - 1);
};

describe('1,2,3 더하기 5', () => {
  it('TC1', () => {
    expect(
      solution(`3
4
7
10`)
    ).toStrictEqual(`3
9
27`);
  });
});
