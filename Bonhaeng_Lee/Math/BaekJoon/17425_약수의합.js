const solution = function (i) {
  const [N, ...inputs] = i.toString().trim().split(/\s/).map(Number);
  const fy = Array(1000001).fill(1);
  const gx = Array(1000001).fill(0);

  for (let i = 2; i < fy.length; i++) {
    for (let j = 1; i * j < fy.length; j++) {
      // ex) i = 2, j = 1 ~ (2 * x), i * j < 1000000
      // 2(i)의 배수인 것들은 2(i)가 약수이므로 해당 숫자에 2(i)를 더해준다.
      fy[i * j] += i;
    }
  }
  for (let i = 1; i < gx.length; i++) {
    gx[i] = gx[i - 1] + fy[i];
  }

  let res = '';
  for (const i of inputs) {
    res += gx[i] + '\n';
  }
  console.log(res.substring(0, res.length - 1));
  return res.substring(0, res.length - 1);
};

describe('약수의합', () => {
  it('TC1', () => {
    expect(
      solution(`5
1
2
10
70
10000`)
    ).toStrictEqual(`1
4
87
4065
82256014`);
  });
});
