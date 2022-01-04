const solution = function (i) {
  const [input1, input2] = i.toString().trim().split('\n');
  const [L, C] = input1.split(' ').map(Number);
  const arr = input2.split(' ');
  console.log(L, C, arr);
  const visited = new Array(L).fill(false);
  // const alpabet = 'abcdefghijklmnopqrstuvwxyz';

  const validateCode = str => {
    // 알파벳 "모음"이 2개 이상인지 검사하는 regex
    const m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  };

  const combination = (L, temp) => {
    if (validateCode(temp)) return;
    for (let i = L; i < C; i++) {
      visited[i] = true;
      combination(i + 1, (temp += arr[i]));
      visited[i] = false;
    }
  };
  combination(0, '');
};

test('TC1', () => {
  expect(
    solution(`4 6
a t c i s w`)
  ).toStrictEqual(`acis
acit
aciw
acst
acsw
actw
aist
aisw
aitw
astw
cist
cisw
citw
istw`);
});
