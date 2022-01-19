const solution = (input) => {
    const [num1, num2] = input
        .toString()
        .trim()
        .split(' ')
        .map((num) => +num);

    const GCD = (a, b) => (b ? GCD(b, a % b) : a);
    const LCM = (a, b) => (a * b) / GCD(a, b);

    console.log(`${GCD(num1, num2)}
${LCM(num1, num2)}`);
};
solution(`24 18`);
