const solution = function (i) {
  const [[N, M], ...matrix] = i
    .toString()
    .trim()
    .split('\n')
    .map((v, i) =>
      i === 0 ? v.split(' ').map(Number) : v.split(' ').map(v => +v)
    );

  // 회전
  function rotate(degree, shape) {
    const _shape = shape;
    const shapeSize = _shape.length;

    switch (degree) {
      case 0:
        break;
      case 90:
        for (let shpIdx = 0; shpIdx < shapeSize; shpIdx++)
          _shape[shpIdx] = [
            0 * _shape[shpIdx][0] + -1 * _shape[shpIdx][1],
            1 * _shape[shpIdx][0] + 0 * _shape[shpIdx][1],
          ];
        break;
      case 180:
        for (let shpIdx = 0; shpIdx < shapeSize; shpIdx++)
          _shape[shpIdx] = [
            -1 * _shape[shpIdx][0] + 0 * _shape[shpIdx][1],
            0 * _shape[shpIdx][0] + -1 * _shape[shpIdx][1],
          ];
        break;
      case 270:
        for (let shpIdx = 0; shpIdx < shapeSize; shpIdx++)
          _shape[shpIdx] = [
            0 * _shape[shpIdx][0] + 1 * _shape[shpIdx][1],
            -1 * _shape[shpIdx][0] + 0 * _shape[shpIdx][1],
          ];
        break;
      default:
        console.log('error');
        break;
    }

    return _shape;
  }

  // 뒤집기
  function flip(shape) {
    const _shape = shape;
    const shapeSize = _shape.length;

    for (let shpIdx = 0; shpIdx < shapeSize; shpIdx++)
      _shape[shpIdx] = [-_shape[shpIdx][0], _shape[shpIdx][1]];

    return _shape;
  }

  // 합
  let answer = -1;
  function shapeSum(shape, row, col) {
    let sum = matrix[row][col];
    const shapeSize = shape.length;

    for (let shpIdx = 0; shpIdx < shapeSize; shpIdx++) {
      const nowRow = row + shape[shpIdx][0];
      const nowCol = col + shape[shpIdx][1];

      if (nowRow < 0 || nowRow > N - 1) return;
      if (nowCol < 0 || nowCol > M - 1) return;
      sum += matrix[nowRow][nowCol];
    }

    if (sum > answer) answer = sum;
  }

  const shapeVec = [
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 1],
      [0, 2],
      [1, 1],
    ],
  ];

  for (let rowIdx = 0; rowIdx < N; rowIdx++) {
    for (let colIdx = 0; colIdx < M; colIdx++) {
      const shapeVecSize = shapeVec.length;
      for (let shpIdx = 0; shpIdx < shapeVecSize; shpIdx++) {
        for (let chgIdx = 0; chgIdx < 4; chgIdx++) {
          const _shape = rotate(chgIdx * 90, shapeVec[shpIdx]);
          shapeSum(_shape, rowIdx, colIdx);
        }
        for (let chgIdx = 0; chgIdx < 4; chgIdx++) {
          let _shape = flip(shapeVec[shpIdx]);
          _shape = rotate(chgIdx * 90, _shape);
          shapeSum(_shape, rowIdx, colIdx);
        }
      }
    }
  }

  console.log(answer);
  return answer;
};

describe('테트로미노', () => {
  it('TC1', () => {
    expect(
      solution(`5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1`)
    ).toStrictEqual(19);
  });
  it('TC2', () => {
    expect(
      solution(`4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`)
    ).toStrictEqual(20);
  });
  it('TC3', () => {
    expect(
      solution(`4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`)
    ).toStrictEqual(7);
  });
});
