const solution = (s) => {
    const input = s.toString().trim().split('\n');
    const [pickNum, len] = input[0].split(' ').map((el) => +el);
    const alphs = input[1].split(' ').sort((a, b) => a.localeCompare(b));

    let res = '';

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const getComb = (arr, pick, prefix = []) => {
        if (pick === 0) {
            const vowelArr = prefix.filter((alph) => vowels.includes(alph));
            if (vowelArr.length >= 1 && prefix.length - vowelArr.length >= 2)
                res += `${prefix.join('')}\n`;
            return;
        }
        return arr.flatMap((v, i) =>
            getComb(arr.slice(i + 1), pick - 1, [...prefix, v])
        );
    };

    getComb(alphs, pickNum);

    res = res.slice(0, -1);

    console.log(res);
    return res;
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
