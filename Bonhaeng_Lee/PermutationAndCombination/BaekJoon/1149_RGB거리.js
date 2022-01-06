const solution = function (i) {
  const [N, ...input2] = i.toString().trim().split('\n');
  const arr = input2.map(v => v.split(' ').map(Number));

  for (let i = 1; i < N; i++) {
    arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2]);
    arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2]);
    arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1]);
  }

  console.log(Math.min(...arr[N - 1]));
  return Math.min(...arr[N - 1]) + '';
};

test('TC1', () => {
  expect(
    solution(`3
26 40 83
49 60 57
13 89 99`)
  ).toStrictEqual(`96`);
});
// test('TC2', () => {
//   expect(
//     solution(`3
// 1 100 100
// 100 1 100
// 100 100 1`)
//   ).toStrictEqual(`3`);
// });
// test('TC3', () => {
//   expect(
//     solution(`3
// 1 100 100
// 100 100 100
// 1 100 100`)
//   ).toStrictEqual(`102`);
// });
// test('TC4', () => {
//   expect(
//     solution(`6
// 30 19 5
// 64 77 64
// 15 19 97
// 4 71 57
// 90 86 84
// 93 32 91`)
//   ).toStrictEqual(`208`);
// });
// test('TC5', () => {
//   expect(
//     solution(`8
// 71 39 44
// 32 83 55
// 51 37 63
// 89 29 100
// 83 58 11
// 65 13 15
// 47 25 29
// 60 66 19`)
//   ).toStrictEqual(`253`);
// });
