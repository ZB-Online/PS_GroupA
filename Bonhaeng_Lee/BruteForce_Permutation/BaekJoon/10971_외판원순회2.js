const solution = function (i) {
  const [N, ...Weight] = i
    .toString()
    .trim()
    .split('\n')
    .map((v, i) => (i === 0 ? +v : v.split(' ').map(Number)));
  const visit = [...Array(N)].fill(false);

  let min = Number.MAX_SAFE_INTEGER;
  const backtracking = (cost, start, current, depth) => {
    if (depth === N && Weight[current][start] !== 0) {
      // 현재 기준 최솟값과 순회 완료되었을 때의 최솟값을 비교한다.
      min = Math.min(min, cost + Weight[current][start]);
      return;
    }
    // 0번째 고정이므로 i : 1 ~ N-1
    for (let i = 1; i < N; i++) {
      if (!visit[i] && Weight[current][i] !== 0) {
        // 순회 중에 최소값을 넘어가면 순회를 멈춘다.
        if (cost + Weight[current][i] < min) {
          visit[i] = true;
          backtracking(cost + Weight[current][i], start, i, depth + 1);
          visit[i] = false;
        }
      }
    }
  };
  // 0번째는 방문처리 후 고정해둠 - 방문처리 안해도 비용 계산에는 영향을 주지 않는다.
  visit[0] = true;
  backtracking(0, 0, 0, 1);
  console.log(min);
  return min;
};

describe('외판원순회2', () => {
  it('TC1', () => {
    expect(
      solution(`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`)
    ).toStrictEqual(35);
  });
  it('TC2', () => {
    expect(
      solution(`4
0 1 0 0
0 0 1 0
0 0 0 1
1 0 0 0`)
    ).toStrictEqual(4);
  });
  it('TC3', () => {
    expect(
      solution(`4
0 5 1 99
99 0 5 1
1 99 0 5
5 1 99 0`)
    ).toStrictEqual(20);
  });
});
