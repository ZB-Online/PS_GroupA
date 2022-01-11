function sol(s) {
  let [N, ...arr] = s.toString().trim().split('\n');
  N = +N;
  arr = arr.map(el => el.split(' ').map(Number));

  const check = Array.from({ length: N }, () => 0);
  const HALF = N / 2;
  let min = Number.MAX_SAFE_INTEGER;

  function dfs(L, K) {
    if (L === HALF) {
      // 두 가지를 선택한 경우
      const START = [];
      const LINK = [];
      let startTeamSum = (linkTeamSum = 0);
      for (let i = 0; i < N; i++) {
        // 체크 배열을 통해서 check 배열의 요소가 1이면 스타팀에 해당 인덱스 추가
        if (check[i]) START.push(i);
        else LINK.push(i);
      }
      console.log(START, LINK);
      for (let i = 0; i < HALF; i++) {
        for (let j = i + 1; j < HALF; j++) {
          // 스타트팀과 링크팀의 능력치의 합
          startTeamSum = startTeamSum + arr[START[i]][START[j]] + arr[START[j]][START[i]]; // 기존 스타트팀의 능력치 합과 새로 추가된 인원의 합
          linkTeamSum = linkTeamSum + arr[LINK[i]][LINK[j]] + arr[LINK[j]][LINK[i]]; // 기존 링크팀의 능력치 합과 새로 추가된 인원의 합
        }
      }
      console.log(startTeamSum, linkTeamSum);
      // console.log('최소값 전', min);
      min = Math.min(min, Math.abs(startTeamSum - linkTeamSum));
      // console.log('최소값 후', min);
      return;
    }
    for (let i = K; i < N; i++) {
      check[i] = 1;
      dfs(L + 1, i + 1);
      check[i] = 0;
    }
  }
  dfs(0, 0);
  return min;
}

test('TC1', () => {
  expect(
    sol(`4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`)
  ).toStrictEqual(0);
});

test('TC2', () => {
  expect(
    sol(`6
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
    sol(`8
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
