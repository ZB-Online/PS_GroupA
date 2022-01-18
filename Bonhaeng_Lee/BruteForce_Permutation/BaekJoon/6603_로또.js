const solution = function (i) {
  const TC = i.toString().trim().split('\n');
  TC.pop(); // 마지막에 들어온 0 제거

  const result = [];
  for (const tc of TC) {
    const [K, ...S] = tc.split(' ').map(Number);

    const DFS = (comb, idx, depth) => {
      if (depth === 6) {
        result.push(comb.join(' '));
        return;
      }
      for (let i = idx; i < K; i++) {
        comb[depth] = S[i];
        DFS(comb, i + 1, depth + 1);
      }
    };

    DFS([], 0, 0);
    result.push('');
  }

  result.pop(); // 맨 뒤에 붙은 빈 문자열은 제거
  console.log(result.join('\n'));
  return result.join('\n');
};

describe('로또(조합)', () => {
  it('TC1', () => {
    expect(
      solution(`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`)
    ).toStrictEqual(`1 2 3 4 5 6
1 2 3 4 5 7
1 2 3 4 6 7
1 2 3 5 6 7
1 2 4 5 6 7
1 3 4 5 6 7
2 3 4 5 6 7

1 2 3 5 8 13
1 2 3 5 8 21
1 2 3 5 8 34
1 2 3 5 13 21
1 2 3 5 13 34
1 2 3 5 21 34
1 2 3 8 13 21
1 2 3 8 13 34
1 2 3 8 21 34
1 2 3 13 21 34
1 2 5 8 13 21
1 2 5 8 13 34
1 2 5 8 21 34
1 2 5 13 21 34
1 2 8 13 21 34
1 3 5 8 13 21
1 3 5 8 13 34
1 3 5 8 21 34
1 3 5 13 21 34
1 3 8 13 21 34
1 5 8 13 21 34
2 3 5 8 13 21
2 3 5 8 13 34
2 3 5 8 21 34
2 3 5 13 21 34
2 3 8 13 21 34
2 5 8 13 21 34
3 5 8 13 21 34`);
  });
});
