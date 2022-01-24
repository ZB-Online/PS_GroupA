function sol(s) {
  const input = s.toString().trim().split('\n');
  const target = +input[0];
  const N = +input[1];

  let handicap;
  let min1 = Math.abs(target - 100);
  let min2 = Number.MAX_SAFE_INTEGER;

  if (N > 0) handicap = input[2].split(' ').map(Number);

  for (let i = 0; i <= 999999; i++) {
    if (check(i, handicap)) {
      let newMin = i.toString().length + Math.abs(target - i);
      if (newMin < min2) min2 = newMin;
      if (newMin > min2) break;
    }
  }

  return Math.min(min1, min2);
}

function check(n, arr) {
  while (true) {
    if (n === 0) return true;
    if (arr.includes(n % 10)) return false;
    else n = ~~(n / 10);
  }
}

describe('백준 1107 리모컨 문제', () => {
  it('TC1', () => {
    expect(
      sol(`5457
3
6 7 8`)
    ).toStrictEqual(6);
  });
  it('TC2', () => {
    expect(
      sol(`100
5
0 1 2 3 4`)
    ).toStrictEqual(0);
  });
  it('TC3', () => {
    expect(
      sol(`500000
8
0 2 3 4 6 7 8 9`)
    ).toStrictEqual(11117);
  });
  it('TC4', () => {
    expect(
      sol(`100
3
1 0 5`)
    ).toStrictEqual(0);
  });
  it('TC5', () => {
    expect(
      sol(`14124
0`)
    ).toStrictEqual(5);
  });
  it('TC6', () => {
    expect(
      sol(`1
9
1 2 3 4 5 6 7 8 9`)
    ).toStrictEqual(2);
  });
  it('TC7', () => {
    expect(
      sol(`80000
2
8 9`)
    ).toStrictEqual(2228);
  });
});
