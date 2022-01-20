const solution = function (i) {
  const N = +i.toString().trim();
  let res = 0;
  for (let i = 1; i <= N; i++) {
    res += i * Math.floor(N / i);
  }
  console.log(res);
  return res;
};

describe('약수의합2', () => {
  // it('TC1', () => {
  //   expect(solution(`1`)).toStrictEqual(1);
  // });
  // it('TC2', () => {
  //   expect(solution(`2`)).toStrictEqual(4);
  // });
  it('TC3', () => {
    expect(solution(`10`)).toStrictEqual(87);
  });
  // it('TC4', () => {
  //   expect(solution(`70`)).toStrictEqual(4065);
  // });
  // it('TC5', () => {
  //   expect(solution(`10000`)).toStrictEqual(82256014);
  // });
});
