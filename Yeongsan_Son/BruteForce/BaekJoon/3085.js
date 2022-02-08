// 사탕게임

function sol(s) {
  const input = s.toString().trim().split('\n');
  const N = +input[0];
  const candy = input.slice(1).map(i => i.split(''));

  function swap(i, j, k) {
    const coord = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const here = candy[i][j];

    if (
      candy[i + coord[k][0]] &&
      candy[i + coord[k][0]][j + coord[k][1]] &&
      here !== candy[i + coord[k][0]][j + coord[k][1]]
    ) {
      candy[i][j] = candy[i + coord[k][0]][j + coord[k][1]];
      candy[i + coord[k][0]][j + coord[k][1]] = here;
      return true;
    } else return false;
  }

  function search() {
    for (let l = 0; l < 2; l++) {
      for (let x = 0; x < N; x++) {
        let count = 0;
        let color = curCandy(x, 0, l);
        for (let y = 0; y < N; y++) {
          if (curCandy(x, y, l) === color) {
            count++;
            if (count > maxCount) {
              maxCount = count;
            }
          } else {
            color = curCandy(x, y, l);
            count = 1;
          }
        }
      }
    }
  }

  function curCandy(x, y, l) {
    // 현재 사탕의 위치
    if (l === 0) return candy[x][y];
    else return candy[y][x];
  }

  let maxCount = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < 4; k++) {
        if (swap(i, j, k)) {
          search();
          swap(i, j, k); // true를 false로 변경
        }
      }
    }
  }

  return maxCount;
}

test('TC1', () => {
  expect(
    sol(`3
CCP
CCP
PPC`)
  ).toStrictEqual(3);
});
test('TC2', () => {
  expect(
    sol(`4
PPPP
CYZY
CCPY
PPCC`)
  ).toStrictEqual(4);
});
test('TC3', () => {
  expect(
    sol(`5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`)
  ).toStrictEqual(4);
});
