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

  let min = givenPerm[pivot + 1];
  let minIdx = pivot + 1;
  for (let i = pivot + 2; minIdx < N - 1, i < N; i++) {
    const cur = givenPerm[i];
    if (givenPerm[pivot] < cur && cur < min) {
      min = cur;
      minIdx = i;
    }
  }

  // no Optimization. O(n^2)

  // Optimization1. Worst O(nlogn), sort() - 120ms
  [givenPerm[pivot], givenPerm[minIdx]] = [givenPerm[minIdx], givenPerm[pivot]];
  const answer = [
    ...givenPerm.slice(0, pivot + 1),
    ...givenPerm.slice(pivot + 1, N).sort((a, b) => a - b),
  ].join(' ');
  console.log(answer);
  return answer;

  // Optimization2. O(n), in-place - 152ms
  // let K = N - 1;
  // let idx = pivot + 1;
  // [givenPerm[pivot], givenPerm[minIdx]] = [givenPerm[minIdx], givenPerm[pivot]];
  // while (idx < K) {
  //   [givenPerm[idx], givenPerm[K]] = [givenPerm[K], givenPerm[idx]];
  //   ++idx;
  //   --K;
  // }

  // console.log(givenPerm.join(' '));
  // return givenPerm.join(' ');
};
describe('다음순열', () => {
  //   it('TC1', () => {
  //     expect(
  //       solution(`4
  // 1 2 3 4`)
  //     ).toStrictEqual(`1 2 4 3`);
  //   });
  //   it('TC2', () => {
  //     expect(
  //       solution(`5
  // 5 4 3 2 1`)
  //     ).toStrictEqual(-1);
  //   });
  //   it('TC3', () => {
  //     expect(
  //       solution(`3
  // 2 3 1`)
  //     ).toStrictEqual('3 1 2');
  //   });
  it('TC4', () => {
    expect(
      solution(`6
5 1 5 3 2 2`)
    ).toStrictEqual('5 2 1 2 3 5');
  });
});
