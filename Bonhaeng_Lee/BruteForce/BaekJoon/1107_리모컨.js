function solution(i) {
  const [N, M, Button] = i.toString().trim().split('\n');
  let Btns = Button;
  let btn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // & : 고장난 버튼이 0개일 때 btn 배열을 새로 만듦
  if (Button !== undefined && M !== 0) {
    Btns = Button.split(' ').map(v => +v);

    btn = btn.filter(v => {
      for (const btn of Btns) {
        if (btn === v) return false;
      }
      return true;
    });
  }

  // & : 들어온 숫자가 버튼으로 이동 가능한 숫자인지 검사
  function check(num) {
    const btnNum = num
      .toString()
      .split('')
      .map(v => +v);

    for (const n of btnNum) {
      if (!btn.includes(n)) return false;
    }
    return true;
  }

  // & : 제외된 버튼이 존재하면 0~1,000,000까지 검사해서 최솟값을 찾음
  // & : 모든 버튼이 가능하다면 기존 result와 버튼으로 바로 이동하는 횟수를 비교해서 최솟값 할당
  let result = Math.abs(N - 100);
  if (btn.length < 10) {
    for (let i = 0; i < 1000001; i++) {
      if (check(i)) {
        result = Math.min(result, i.toString().length + Math.abs(i - N));
      }
    }
  } else {
    result = Math.min(result, N.length);
  }

  console.log(result);
  return result.toString();
}

describe('리모컨', () => {
  it('TC1', () => {
    expect(
      solution(`14124
0`)
    ).toStrictEqual(5);
  });
  it('TC2', () => {
    expect(
      solution(`5457
3
6 7 8`)
    ).toStrictEqual(6);
  });
  it('TC3', () => {
    expect(
      solution(`100
5
0 1 2 3 4`)
    ).toStrictEqual(0);
  });
  it('TC4', () => {
    expect(
      solution(`500000
8
0 2 3 4 6 7 8 9`)
    ).toStrictEqual(11117);
  });
  it('TC5', () => {
    expect(
      solution(`100
3
1 0 5`)
    ).toStrictEqual(0);
  });
  it('TC5', () => {
    expect(
      solution(`80000
2
8 9`)
    ).toStrictEqual(2228);
  });
  it('TC6', () => {
    expect(
      solution(`1
9
1 2 3 4 5 6 7 8 9`)
    ).toStrictEqual(2);
  });
});
