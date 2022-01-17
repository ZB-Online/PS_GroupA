const solution = (input) => {
    const [N, ...grid] = input
        .toString()
        .trim()
        .split('\n')
        .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));

    const cities = Array.from({ length: N }, (_, i) => i);
    const visited = Array.from({ length: N }, () => false);

    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    const res = [];

    const dfs = (cnt) => {
        if (cnt === N) {
            min = Math.min(min, sum + grid[res[N - 1]][res[0]]);
            return;
        }

        for (let i = 0; i < N; i++) {
            let [from, to] = !res.length
                ? [0, cities[i]]
                : [res.length - 1, cities[i]];

            if (!visited[i]) {
                sum += grid[from][to];
                res.push(cities[i]);
                visited[i] = true;
                dfs(cnt + 1);
                res.pop();
                sum -= grid[from][to];
                visited[i] = false;
            }
        }
    };

    dfs(0);
    console.log(min);
};

solution(`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`);
