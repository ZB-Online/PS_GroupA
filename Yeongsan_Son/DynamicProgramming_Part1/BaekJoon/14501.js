function sol(s) {
  const input = s.toString().trim().split('\n');
  const N = Number(input[0]);
  const counseling = input.slice(1).map(v => v.split(' ').map(v => Number(v)));

  const dp = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    const [cost, profit] = counseling[i];
    if (i + cost > N) continue;
    dp[i] = dp[i] + profit;
    for (let j = i + cost; j < N; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }
  return Math.max(...dp);
}

describe('백준이 얻을 수 있는 최대 이익은?', () => {
  it('7일 상담 일정', () => {
    expect(
      sol(`7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`)
    ).toStrictEqual(45);
  });
  it('10일 상담 일정', () => {
    expect(
      sol(`10
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10`)
    ).toStrictEqual(55);
  });
  it('10일 상담 일정', () => {
    expect(
      sol(`10
5 10
5 9
5 8
5 7
5 6
5 10
5 9
5 8
5 7
5 6`)
    ).toStrictEqual(20);
  });
  it('10일 상담 일정', () => {
    expect(
      sol(`10
5 50
4 40
3 30
2 20
1 10
1 10
2 20
3 30
4 40
5 50`)
    ).toStrictEqual(90);
  });
});
