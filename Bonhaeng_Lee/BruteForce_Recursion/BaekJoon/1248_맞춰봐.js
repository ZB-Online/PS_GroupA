// sol1. Backtracking
const solution = function (i) {
  const [N, signs] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input));
  const matrix = [...Array(N)].map(() => [...Array(N)].fill(0));
  const result = [...Array(N)];

  const isPromising = idx => {
    // 0행부터 찾으려는 idx까지
    for (let i = 0; i <= idx; i++) {
      let sum = 0;
      // i행에 따라 각 열의 합을 구한다.
      for (let j = i; j <= idx; j++) {
        sum += result[j];
        // 부호가 다르면 유효하지 않음
        if (matrix[i][j] !== (sum === 0 ? '0' : sum > 0 ? '+' : '-'))
          return false;
      }
    }
    return true;
  };

  const backtracking = idx => {
    if (idx === N) {
      console.log(result.join(' '));
      // BOJ 제출 : backtacking의 남은 콜스택을 무시하고 원하는 값만 출력한 뒤 solution() 탈출
      process.exit();
    }
    for (let i = -10; i <= 10; i++) {
      result[idx] = i; // result 배열에 i 입력
      if (isPromising(idx)) backtracking(idx + 1);
    }
  };

  // 부호 배열로 행렬 초기화
  let pos = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) matrix[i][j] = signs[pos++];
  }

  backtracking(0);
};

test('TC1', () => {
  expect(
    solution(`4
-+0++++--+`)
  ).toStrictEqual(`-2 5 -3 1`);
});
