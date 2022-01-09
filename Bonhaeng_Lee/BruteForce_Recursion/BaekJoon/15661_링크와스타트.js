// sol1. 조합 + 조합
const solution = function (i) {
  const [N, ...S] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));
  const visited = Array(N).fill(false);
  let min = Number.MAX_SAFE_INTEGER;

  const calculateMinScore = () => {
    let startTeamScore = 0;
    let linkTeamScore = 0;
    for (let i = 0; i < N - 1; i++) {
      for (let j = i + 1; j < N; j++) {
        // 조합에 쓰인 사람을 visited 배열로 판단해 startTeam 능력치에 합산.
        // 쓰이지 않았다면 linkTeam 능력치에 합산한다.
        if (visited[i] && visited[j]) startTeamScore += S[i][j] + S[j][i];
        if (!visited[i] && !visited[j]) linkTeamScore += S[i][j] + S[j][i];
      }
    }
    min = Math.min(Math.abs(startTeamScore - linkTeamScore), min);
  };

  const combination = (idx, cnt) => {
    // 각 팀의 스코어의 차이 계산 후 min 업데이트
    if (cnt >= 1) calculateMinScore();
    // 사람들의 조합을 모두 검사
    for (let i = idx; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        combination(i + 1, cnt + 1);
        visited[i] = false;
      }
    }
  };

  combination(0, 0);
  console.log(min);
  return min;
};

test('TC1', () => {
  expect(
    solution(`4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`)
  ).toStrictEqual(0);
});
test('TC2', () => {
  expect(
    solution(`6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`)
  ).toStrictEqual(2);
});
test('TC3', () => {
  expect(
    solution(`8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`)
  ).toStrictEqual(1);
});
test('TC4', () => {
  expect(
    solution(`5
0 3 1 1 1
3 0 1 1 1
1 1 0 1 1
1 1 1 0 1
1 1 1 1 0`)
  ).toStrictEqual(0);
});
