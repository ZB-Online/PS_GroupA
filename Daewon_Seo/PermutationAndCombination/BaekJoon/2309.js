// const fs = require('fs');
// const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

const solution = (s) => {
    const input = s.toString().trim().split('\n');
    const nums = input.map((el) => +el);

    const result = [];
    const dfs = (idx, origin, pickNum, target, path) => {
        if (target < 0) return;

        if (path.length === pickNum) {
            if (target === 0) {
                result.push([...path]);
                return;
            }
        }

        for (let i = idx; i < origin.length; i++) {
            path.push(origin[i]);
            dfs(i + 1, origin, pickNum, target - origin[i], path);
            path.pop();
        }
    };

    dfs(0, nums, 7, 100, []);

    result[0]
        .sort((a, b) => a - b)
        .forEach((el, i) => {
            if (i !== results[0].length - 1) answer += el + '\n';
            else answer += el;
        });
};

test('TC1', () => {
    expect(
        solution(`20
7
23
19
10
15
25
8
13`)
    ).toStrictEqual(`7
8
10
13
19
20
23`);
});
