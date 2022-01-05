const solution = (s) => {
    const input = s.toString().trim().split('\n');
    const [len, goal] = input[0].split(' ');
    const nums = input[1].split(' ').map((el) => +el);

    let count = 0;
    let sum = 0;

    let start = 0,
        end = 0;

    while (start <= end && end <= len) {
        if (sum === +goal) {
            count++;
            sum -= nums[start];
            start++;
        } else if (sum > +goal && start <= end) {
            sum -= nums[start];
            start++;
        } else {
            sum += nums[end];
            end++;
        }
    }
    console.log(count);

    return count + '';
};

test('TC1', () => {
    expect(
        solution(`4 2
1 1 1 1`)
    ).toStrictEqual(`3`);
});

test('TC2', () => {
    expect(
        solution(`10 5
1 2 3 4 2 5 3 1 1 2`)
    ).toStrictEqual(`3`);
});
