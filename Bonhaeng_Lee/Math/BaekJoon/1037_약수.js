const solution = function (i) {
  const [A, B, C] = i.toString().trim().split(' ').map(Number);
  const A_C = A % C;
  const B_C = B % C;
  console.log((A + B) % C);
  console.log((A_C + B_C) % C);
  console.log((A * B) % C);
  console.log((A_C * B_C) % C);
};

describe('약수', () => {
  it('TC1', () => {
    expect(solution(`5 8 4`)).toStrictEqual(`1
1
0
0`);
  });
});
