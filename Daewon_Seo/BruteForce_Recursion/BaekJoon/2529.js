const solution = (s) => {
    let [N, ...m] = s.toString().trim().split('\n');
    const [inequalities] = m.map((el) => el.split(' '));

    N = Number(N);

    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const checked = Array(10).fill(false);

    const compareValues = (val1, val2, inequality) =>
        inequality === '>' ? val1 > val2 : val1 < val2;

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    const dfs = (count, str) => {
        if (count === N) {
            max = +max > +str ? max : str;
            min = +min < +str ? min : str;
            return;
        }
        for (let j = 0; j < 10; j++) {
            if (checked[j]) continue;
            const curInequality = inequalities[count];

            if (
                compareValues(str[str.length - 1], nums[j] + '', curInequality)
            ) {
                checked[j] = true;
                dfs(count + 1, str + `${j}`);
                checked[j] = false;
            }
        }
    };

    for (let i = 0; i < nums.length; i++) {
        checked[i] = true;
        dfs(0, `${i}`);
        checked[i] = false;
    }

    console.log(max, min);
    return `${max}
${min}`;
};

// solution(`9
// > < < < > > > < <`);

test('TC1', () => {
    expect(
        solution(`2
< >`)
    ).toStrictEqual(`897
021`);
});

test('TC2', () => {
    expect(
        solution(`9
> < < < > > > < <`)
    ).toStrictEqual(`9567843012
1023765489`);
});
