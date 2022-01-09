// sol1. DFS
const solution = function (i) {
  const [N, ...consultations] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));
  let max = 0;

  const planningConsultation = (idx, sum) => {
    if (idx === N) {
      max = Math.max(max, sum);
      return;
    }

    // 매일마다(매 idx마다) 2가지 경우가 있음
    const [time, cost] = consultations[idx];
    if (idx + time <= N) {
      // 1. 상담 기간의 합이 N보다 작거나 같기 때문에 해당 상담을 진행하는 경우
      planningConsultation(idx + time, sum + cost);
    }
    // 2. 해당 상담은 진행하지 않는 경우
    planningConsultation(idx + 1, sum);
  };

  planningConsultation(0, 0);
  console.log(max);
  return max;
};

test('TC1', () => {
  expect(
    solution(`7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`)
  ).toStrictEqual(45);
});
test('TC2', () => {
  expect(
    solution(`10
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
test('TC3', () => {
  expect(
    solution(`10
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
test('TC4', () => {
  expect(
    solution(`10
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
