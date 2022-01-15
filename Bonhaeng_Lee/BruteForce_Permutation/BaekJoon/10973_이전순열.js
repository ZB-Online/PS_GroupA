const solution = function (i) {
  const [N, givenPerm] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));

  const previousPermutation = function (n, arr) {
    const tmp = [];
    let pivot = -1;
    let min = 10001;
    for (let i = n - 1; i >= 0; i--) {
      if (min < arr[i]) {
        pivot = i;
        break;
      }
      tmp.push(arr[i]);
      min = arr[i];
    }
    if (pivot === -1) return -1;

    for (let i = 0; i < tmp.length; i++) {
      if (arr[pivot] > tmp[i]) {
        [arr[pivot], tmp[i]] = [tmp[i], arr[pivot]];
        break;
      }
    }
    return arr.slice(0, pivot + 1).join(' ') + ' ' + tmp.join(' ');
  };
  const answer = previousPermutation(N, givenPerm);
  console.log(answer);
  return answer;
};
describe('이전순열', () => {
  it('TC1', () => {
    expect(
      solution(`4
1 2 3 4`)
    ).toStrictEqual(-1);
  });
  it('TC2', () => {
    expect(
      solution(`5
5 4 3 2 1`)
    ).toStrictEqual('5 4 3 1 2');
  });
  it('TC3', () => {
    expect(
      solution(`3
2 3 1`)
    ).toStrictEqual('2 1 3');
  });
  it('TC4', () => {
    expect(
      solution(`6
5 1 5 3 2 2`)
    ).toStrictEqual('5 1 5 2 3 2');
  });
});
