const solution = function (i) {
  const [N, givenPerm] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));

  let pivot = -1;

  // 맨 뒤에서부터 시작해서 오름차순이 끊기는 부분을 찾는다.
  for (let i = givenPerm.length - 1; i > 0; i--) {
    if (givenPerm[i - 1] < givenPerm[i]) {
      pivot = i - 1;
      break;
    }
  }
  // 오름차순이 끊기지 않았으면 다음 순열이 없다.
  if (pivot === -1) {
    console.log(-1);
    return -1;
  }

  // pivot 보다 더 큰 값을 가진 swapB 찾기
  let min = givenPerm[pivot + 1];
  let swapB = pivot + 1;
  if (swapB + 1 < N) {
    for (let i = pivot + 2; i < givenPerm.length; i++) {
      if (givenPerm[i] < min && givenPerm[i] > givenPerm[pivot]) {
        min = givenPerm[i];
        swapB = i;
      }
    }
  }

  // no Optimization. O(n^2)

  // Optimization1. Worst O(nlogn), sort() - 120ms
  // pivot과 이보다 더 큰 값을 가진 swapB를 교환한다.
  [givenPerm[pivot], givenPerm[swapB]] = [givenPerm[swapB], givenPerm[pivot]];
  console.log('37', pivot + 1, givenPerm.slice(pivot + 1, N));
  const answer = [
    ...givenPerm.slice(0, pivot + 1),
    // 최적화 sort 대신 in-place?
    ...givenPerm.slice(pivot + 1, N).sort((a, b) => a - b),
  ].join(' ');
  console.log(answer);
  return answer;

  // Optimization2. O(n), in-place - 152ms
  // let K = N - 1;
  // let idx = pivot + 1;
  // [givenPerm[pivot], givenPerm[swapB]] = [givenPerm[swapB], givenPerm[pivot]];
  // while (idx < K) {
  //   [givenPerm[idx], givenPerm[K]] = [givenPerm[K], givenPerm[idx]];
  //   ++idx;
  //   --K;
  // }

  // console.log(givenPerm.join(' '));
  // return givenPerm.join(' ');
};

// test('TC1', () => {
//   expect(
//     solution(`4
// 1 2 3 4`)
//   ).toStrictEqual(`1 2 4 3`);
// });
// test('TC2', () => {
//   expect(
//     solution(`5
// 5 4 3 2 1`)
//   ).toStrictEqual(-1);
// });
test('TC3', () => {
  expect(
    solution(`3
2 3 1`)
  ).toStrictEqual('3 1 2');
});
