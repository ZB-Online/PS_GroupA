/* 
첫째줄에 주어지는 배열의 길이 
  - 각 상담에 소요되는 시간은 배열의 길이보다 작아야한다 
최대수익

*/

function sol(s) {
  let [N, ...arr] = s.toString().trim().split('\n');
  N = +N;
  arr = arr.map(el => el.split(' ').map(Number));
  const temp = Array.from({ length: N }, () => 0);

  for (let i = 0; i < N; i++) {
    const [period, profit] = arr[i];
    if (i + period > N) continue;
    temp[i] = temp[i] + profit;

    for (let j = i + period; j < N; j++) {
      temp[j] = Math.max(temp[j], temp[i]);
    }
  }
  return Math.max(...temp);
}

test('TC1', () => {
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
test('TC2', () => {
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
test('TC3', () => {
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
test('TC4', () => {
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
