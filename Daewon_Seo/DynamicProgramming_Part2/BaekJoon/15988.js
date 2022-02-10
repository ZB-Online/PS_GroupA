const solution = (input) => {
    const [n, nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));
};

solution(``);
