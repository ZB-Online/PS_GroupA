const solution = function (i) {
  const [A, B] = i.toString().trim().split(' ').map(Number);
  // 유클리드 호제법을 이용하여 최대공약수를 구한다.
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const div = gcd(A, B);
  // 최대공약수를 이용하여 최소공배수를 구한다.
  function lcm(a, b, div) {
    return (a * b) / div;
  }
  const l = lcm(A, B, div);

  const answer = div + '\n' + l;
  console.log(answer);
};

describe('최대공약수와최소공배수', () => {
  it('TC1', () => {
    expect(solution(`24 18`)).toStrictEqual(`6
72`);
  });
});
