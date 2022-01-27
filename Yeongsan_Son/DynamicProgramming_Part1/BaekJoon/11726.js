function sol(s) {
  const n = +s.toString().trim();

  const fibo = [0, 1, 2, ...Array.from({ length: n - 1 }, () => 0)];

  for (let i = 3; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

describe('2*n 크기의 직사각형을 1*2, 2*1 타일로 채우는 방법의 수', () => {
  it('2*2 크기의 직사각형', () => {
    expect(sol('2')).toStrictEqual(2);
  });
  it('2*9 크기의 직사각형', () => {
    expect(sol('9')).toStrictEqual(55);
  });
  it('2*10 크기의 직사각형', () => {
    expect(sol('10')).toStrictEqual(89);
  });
  it('2*15 크기의 직사각형', () => {
    expect(sol('15')).toStrictEqual(987);
  });
});
