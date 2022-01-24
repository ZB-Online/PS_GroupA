const solution = (input) => {
    let [size, ...points] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => el.split(' ').map((num) => +num));

    const [N, M] = size;

    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    let max = Number.MIN_SAFE_INTEGER;

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const dfs = (row, col, sum, len) => {
        if (len === 4) {
            max = Math.max(sum, max);
            return;
        }

        for (let i = 0; i < 4; i++) {
            const nx = row + dx[i];
            const ny = col + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;

                    dfs(nx, ny, sum + points[nx][ny], len + 1);

                    visited[nx][ny] = false;
                }
            }
        }
    };

    const tx = [
        [1, 2, 1],
        [0, 0, 1],
        [0, 0, -1],
        [-1, 0, 1],
    ];
    const ty = [
        [0, 0, 1],
        [1, 2, 1],
        [1, 2, 1],
        [1, 1, 1],
    ];

    const checkTshapeTetro = (row, col) => {
        for (let i = 0; i < 4; i++) {
            let sum = points[row][col];
            for (let j = 0; j < 3; j++) {
                let nRow = row + tx[i][j];
                let nCol = col + ty[i][j];

                if (nRow >= 0 && nRow < N && nCol >= 0 && nCol < M) {
                    sum += points[nRow][nCol];
                }
            }
            max = Math.max(max, sum);
        }
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            visited[i][j] = true;

            dfs(i, j, points[i][j], 1);

            visited[i][j] = false;

            checkTshapeTetro(i, j);
        }
    }

    console.log(max);
};
solution(`4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`);
