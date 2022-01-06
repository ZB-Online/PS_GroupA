const solution = function (s) {
  const graph = s
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(''));
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const visited = [...Array(25)].fill(false);
  // 이다솜파(S)가 4명 이상 있는지 확인
  function moreThanFour() {
    let cnt = 0;

    for (let i = 0; i < 25; i++) {
      if (visited[i]) {
        const x = Math.floor(i / 5);
        const y = i % 5;

        if (graph[x][y] === 'S') cnt++;
      }
    }

    return cnt >= 4;
  }
  // 7명이 인접한지 확인
  function adjacency() {
    const queue = [];
    const checkSelect = [...Array(5)].map(() => [...Array(5)].fill(false));
    const queueSelect = [...Array(5)].map(() => [...Array(5)].fill(false));
    let checkAnswer = false;

    let temp = 0;
    for (let i = 0; i < 25; i++) {
      if (visited[i]) {
        const x = Math.floor(i / 5);
        const y = i % 5;
        checkSelect[x][y] = true;

        // 처음에는 queue에 넣어주기 위한 temp 변수
        if (temp === 0) {
          queue.push([x, y]);
          queueSelect[x][y] = true;
          temp++;
        }
      }
    }

    let cnt = 1;
    while (queue.length) {
      const size = queue.length;

      if (cnt === 7) {
        checkAnswer = true;
        break;
      }

      for (let k = 0; k < size; k++) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
            if (checkSelect[nx][ny] && !queueSelect[nx][ny]) {
              queueSelect[nx][ny] = true;
              queue.push([nx, ny]);
              cnt++;
            }
          }
        }
      }
    }

    return checkAnswer;
  }

  let ans = 0;
  function DFS(Idx, cnt) {
    if (cnt === 7 && moreThanFour() && adjacency()) {
      ans++;
      return;
    }

    for (let i = Idx; i < 25; i++) {
      if (!visited[i]) {
        visited[i] = true;
        DFS(i, cnt + 1);
        visited[i] = false;
      }
    }
  }

  DFS(0, 0);
  console.log(ans);
  return ans + '';
};

test('TC1', () => {
  expect(
    solution(`YYYYY
SYSYS
YYYYY
YSYYS
YYYYY`)
  ).toStrictEqual('2');
});
