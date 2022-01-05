// i (2<= i <= N-1)번 집의 색은 i-1번, i+1번 집의 색과 다르다
// 첫째줄 N → 집의 수
// 둘째줄부터의 수의 집합 → 각 집의 RGB 도색 비용

// 첫번째 집의 최소 비용 선택
// 두번재 집의 최소 비용 선택 → 첫번째 집이 R을 선택, G와 B 중 최소 비용 선택
// 세번째 집의 최소 비용 선택 → 두번째 집에 B를 선택, R과 G 중 최소 비용 선택

function sol(s) {
  const input = s.toString().trim().split('\n');
  let [len, ...costs] = input;
  len = +len;
  costs = costs.map(el => el.split(' ').map(Number));
  // 인덱스를 1부터 시작하는 이유 → 2번 집의 선택을 기준으로 1번집과 3번집의 비용 선택
  for (let i = 1; i < len; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]); // i번 집이 R을 선택한 경우 → i-1번 집이 선택할 수 있는 컬러는 G와 B
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]); // i번 집이 G를 선택한 경우 → i-1번 집이 선택할 수 있는 컬러는 R과 B
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]); // i번 집이 B를 선택한 경우 → i-1번 집이 선택할 수 있는 컬러는 R과 G
  }
  // for loop 전체를 순회하면 각각 집의 도색 비용을 costs 배열의 마지막 요소에서 확인 가능하므로 마지막 요소에서 최소값을 반환
  return Math.min(...costs[len - 1]);
}

test('TC1에서의 3개 집의 최소 비용은 96입니다', () => {
  expect(
    sol(`3
26 40 83
49 60 57
13 89 99
`)
  ).toStrictEqual(96);
});
test('TC2에서의 3개 집의 최소 비용은 3입니다', () => {
  expect(
    sol(`3
1 100 100
100 1 100
100 100 1
`)
  ).toStrictEqual(3);
});
test('TC3에서의 3개 집의 최소 비용은 102입니다', () => {
  expect(
    sol(`3
1 100 100
100 100 100
1 100 100
`)
  ).toStrictEqual(102);
});
test('TC4에서의 6개 집의 최소비용은 208입니다', () => {
  expect(
    sol(`6
30 19 5
64 77 64
15 19 97
4 71 57
90 86 84
93 32 91
`)
  ).toStrictEqual(208);
});
test('TC5에서의 8개 집의 최소 비용은 253입니다', () => {
  expect(
    sol(`8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19
`)
  ).toStrictEqual(253);
});
