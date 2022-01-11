// sol1. DFS
const solution = function (i) {
  const [K, inequalitySigns] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input.split(' ')));
  const result = [];
  const visited = new Array(10).fill(false);

  const compare = (sign, a, b) => (sign === '<' ? a < b : b > a);

  const permutation = (num, L) => {
    if (L === K + 1) {
      result.push(num);
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (
        (L === 0 || compare(inequalitySigns[L - 1], num[num.length - 1], i)) &&
        !visited[i]
      ) {
        visited[i] = true;
        permutation(num + i, L + 1);
        visited[i] = false;
      }
    }
  };

  permutation('', 0);
  const answer = `${result[result.length - 1]}\n${result[0]}`;
  console.log(answer);
  return answer;
};

test('TC1', () => {
  expect(
    solution(`2
< >`)
  ).toStrictEqual(`897
021`);
});
test('TC2', () => {
  expect(
    solution(`9
> < < < > > > < <`)
  ).toStrictEqual(`9567843012
1023765489`);
});
