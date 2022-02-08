const solution = (input) => {
    let [N, M, broken] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) =>
            i === 0 || i === 1 ? +el : el.split(' ').map((num) => +num)
        );
};
solution(`1
9
1 2 3 4 5 6 7 8 9`);
