function sol(s) {
  const n = +s.toString().trim();

  const fibo = [0, 1, 3, ...Array.from({ length: n - 1 }, () => 0)];

  for (let i = 3; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + 2 * fibo[i - 2]) % 10007;
  }

  return fibo[n];
}

describe('2*n 크기의 직사각형을 1*2, 2*1 타일로 채우는 방법의 수', () => {
  it('2*2 크기의 직사각형', () => {
    expect(sol('2')).toStrictEqual(3);
  });
  it('2*8 크기의 직사각형', () => {
    expect(sol('8')).toStrictEqual(171);
  });
  it('2*12 크기의 직사각형', () => {
    expect(sol('12')).toStrictEqual(2731);
  });
});
