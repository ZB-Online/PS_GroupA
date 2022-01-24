const solution = (input) => {
    let [T, ...data] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => el.split(' ').map((num) => +num));

    const GCD = (a, b) => (b ? GCD(b, a % b) : a);
    const LCM = (a, b) => (a * b) / GCD(a, b);

    let res = '';

    for (let i = 0; i < T; i++) {
        const [M, N, x, y] = data[i];

        let year = x;
        let yNum = 0;

        const maxYear = LCM(M, N);

        while (true) {
            yNum = year % N === 0 ? N : year % N;

            if (yNum === y) break;
            if (year > maxYear) break;
            year += M;
        }

        year > maxYear ? (res += `${-1}\n`) : (res += `${year}\n`);
    }
    console.log(res);
};
solution(`3
10 12 3 9
10 12 7 2
13 11 5 6`);
