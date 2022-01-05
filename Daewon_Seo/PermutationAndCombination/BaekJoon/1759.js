const solution = (s) => {
    const input = s.toString().trim().split('\n');
    const [pickNum, len] = input[0].split(' ').map((el) => +el);
    const alphs = input[1].split(' ').sort((a, b) => a.localeCompare(b));

    console.log(alphs);

    const results = [];

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const dfs = (idx, path, pick, used) => {
        if (idx === pick) {
            const vowelsNum = [...path].filter((el) =>
                vowels.includes(el)
            ).length;

            if (vowelsNum && path.length - vowelsNum >= 2)
                results.push([...path].join(''));
            return;
        }

        for (let i = idx; i < alphs.length; i++) {
            if (used[i]) continue;
            if (path.length) {
                if (path.slice(-1)[0].charCodeAt(0) > alphs[i].charCodeAt(0))
                    continue;
            }
            path.push(alphs[i]);

            used[i] = true;
            dfs(idx + 1, path, pick, used);
            path.pop();
            used[i] = false;
        }
    };

    dfs(0, [], pickNum, Array(len).fill(false));
    console.log(results.join('\n'));
    return results.join('\n');
};

solution(`4 6
a t c i s w`);

// test('TC1', () => {
//     expect(
//         solution(`4 6
// a t c i s w`)
//     ).toStrictEqual(`acis
// acit
// aciw
// acst
// acsw
// actw
// aist
// aisw
// aitw
// astw
// cist
// cisw
// citw
// istw`);
// });
