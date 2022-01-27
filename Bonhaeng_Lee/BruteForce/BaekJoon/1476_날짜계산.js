const solution = function (i) {
  const [E, S, M] = i.toString().trim().split(' ').map(Number);

  let year = 0;
  while (++year) {
    // year를 1로 만들지 않고 비교하기 위해 E, S, M 범위를 0 ~ N으로 변경, E : 0 ~ 15, S : 0 ~ 28, M : 0 ~ 19
    if (
      (year - E) % 15 === 0 &&
      (year - S) % 28 === 0 &&
      (year - M) % 19 === 0
    ) {
      break;
    }
  }
  console.log(year);
  return year;
};

describe('날짜계산', () => {
  it('TC1', () => {
    expect(solution(`1 16 16`)).toStrictEqual(16);
  });
  it('TC2', () => {
    expect(solution(`1 1 1`)).toStrictEqual(1);
  });
  it('TC3', () => {
    expect(solution(`1 2 3`)).toStrictEqual(5266);
  });
  it('TC4', () => {
    expect(solution(`15 28 19`)).toStrictEqual(7980);
  });
});
