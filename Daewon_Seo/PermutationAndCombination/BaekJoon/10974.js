// const fs = require('fs');
// let input = fs.readFileSync('stdin.txt').toString().split(' ');

const solution = (input) => {
    let num = Number(input);
    const nums = Array.from({ length: num }, (_, i) => i + 1);
    return permute(nums);
};

const permute = (arr) => {
    let answer = '';
    const results = [];

    const dfs = (origin, path, used) => {
        if (path.length == origin.length) {
            results.push([...path]);
            return;
        }
        for (let i = 0; i < origin.length; i++) {
            if (used[i]) continue;

            path.push(origin[i]);

            used[i] = true;

            dfs(origin, path, used);

            path.pop();

            used[i] = false;
        }
    };

    dfs(arr, [], Array(arr.length).fill(false));

    for (let i = 0; i < results.length; i++) {
        if (i !== results.length - 1) answer += results[i].join(' ') + '\n';
        else answer += results[i].join(' ');
    }

    return answer;
};

test('TC1', () => {
    expect(solution('3')).toStrictEqual(`1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1`);
});
