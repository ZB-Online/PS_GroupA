const solution = (s) => {
    const [[N], ...m] = s.toString().trim().split('\n');
    const grid = m.map((el) => el.split(' ').map((el) => +el));

    const teamNum = N / 2;

    const team = Array.from({ length: N }, (_, i) => i);
    const checked = Array.from({ length: N }, () => false);

    const START_TEAM = [];
    let LINK_TEAM = [];

    let min = Number.MAX_SAFE_INTEGER;

    const calTeamPoint = (grid, pickTeam) => {
        let totalPoint = 0;
        for (let i = 0; i < pickTeam.length; i++) {
            for (let j = 0; j < pickTeam.length; j++) {
                if (i === j) continue;
                totalPoint += grid[pickTeam[i]][pickTeam[j]];
            }
        }

        return totalPoint;
    };

    const dfs = (count, idx) => {
        if (count === teamNum) {
            LINK_TEAM = team.filter((el) => !START_TEAM.includes(el));

            const startTeamPoint = calTeamPoint(grid, START_TEAM);
            const linkTeamPoint = calTeamPoint(grid, LINK_TEAM);

            const diff = Math.abs(startTeamPoint - linkTeamPoint);

            min = min > diff ? diff : min;
            return;
        }

        for (let i = idx; i < N; i++) {
            if (checked[i]) continue;
            START_TEAM.push(team[i]);
            checked[i] = true;
            dfs(count + 1, idx);
            START_TEAM.pop();
            checked[i] = false;
        }
    };

    dfs(0, 0);

    console.log(min);

    return min + '';
};

// solution(`8
//   0 5 4 5 4 5 4 5
//   4 0 5 1 2 3 4 5
//   9 8 0 1 2 3 1 2
//   9 9 9 0 9 9 9 9
//   1 1 1 1 0 1 1 1
//   8 7 6 5 4 0 3 2
//   9 1 9 1 9 1 0 9
//   6 5 4 3 2 1 9 0`);

test('TC1', () => {
    expect(
        solution(`4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`)
    ).toStrictEqual(`0`);
});

test('TC2', () => {
    expect(
        solution(`6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`)
    ).toStrictEqual(`2`);
});

test('TC3', () => {
    expect(
        solution(`8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`)
    ).toStrictEqual(`1`);
});
