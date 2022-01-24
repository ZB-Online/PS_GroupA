const solution = function (i) {
  const inputs = i.toString().trim().split('\n').map(Number);
  let res = '';

  for (const input of inputs) {
    let multiples = '1';
    // modular 연산으로 자릿수를 줄이면서 연산한다면 자릿수 누적 변수가 필요하다.
    let size = 1;
    while (true) {
      if (multiples % input === 0) {
        res += `${size}\n`;
        break;
      }
      size++;
      multiples += '1';
      multiples = (multiples % input) + '';
    }
  }

  console.log(res.substring(0, res.length - 1));
  return res.substring(0, res.length - 1);
};

describe('1', () => {
  it('TC1', () => {
    expect(
      solution(`3
7
9901`)
    ).toStrictEqual(`3
6
12`);
  });
});
