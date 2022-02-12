const solution = (input) => {
    const [[N, M, R], ...inputArr] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => el.split(' ').map((num) => +num));

    const [calArr] = inputArr.splice(-1);

    const upsideDown = (arr) => {
        const newRow = arr.length === N ? N : M;
        const newCol = newRow === N ? M : N;

        const newArr = Array.from({ length: newRow }, () => Array(newCol));
        for (let i = newRow - 1; i >= 0; i -= 1) {
            for (let j = 0; j < newCol; j += 1) {
                newArr[newRow - i - 1][j] = arr[i][j];
            }
        }

        return newArr;
    };

    const symmetry = (arr) => {
        const newRow = arr.length === N ? N : M;
        const newCol = newRow === N ? M : N;

        const newArr = Array.from({ length: newRow }, () => Array(newCol));

        for (let i = 0; i < newRow; i += 1) {
            for (let j = newCol - 1; j >= 0; j -= 1) {
                newArr[i][newCol - j - 1] = arr[i][j];
            }
        }

        return newArr;
    };

    const rightRotation = (arr) => {
        const newRow = arr.length === N ? N : M;
        const newCol = newRow === N ? M : N;

        const newArr = Array.from({ length: newCol }, () => Array(newRow));

        for (let i = 0; i < newCol; i += 1) {
            for (let j = 0; j < newRow; j += 1) {
                newArr[i][j] = arr[newRow - j - 1][i];
            }
        }

        return newArr;
    };

    const leftRotation = (arr) => {
        const newRow = arr.length === N ? N : M;
        const newCol = newRow === N ? M : N;

        const newArr = Array.from({ length: newCol }, () => Array(newRow));

        for (let i = 0; i < newCol; i += 1) {
            for (let j = 0; j < newRow; j += 1) {
                newArr[i][j] = arr[j][newCol - i - 1];
            }
        }
        return newArr;
    };

    const splitRotate1 = (arr) => {
        const newRow = arr.length === N ? N : M;
        const newCol = newRow === N ? M : N;

        const split1 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );
        const split2 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );
        const split3 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );
        const split4 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );

        for (let i = 0; i < newRow / 2; i += 1) {
            for (let j = 0; j < newCol / 2; j += 1) {
                split1[i][j] = arr[i][j];
            }
        }

        for (let i = newRow / 2; i < newRow; i += 1) {
            for (let j = 0; j < newCol / 2; j += 1) {
                split4[i - newRow / 2][j] = arr[i][j];
            }
        }

        for (let i = 0; i < newRow / 2; i += 1) {
            for (let j = newCol / 2; j < newCol; j += 1) {
                split2[i][j - newCol / 2] = arr[i][j];
            }
        }

        for (let i = newRow / 2; i < newRow; i += 1) {
            for (let j = newCol / 2; j < newCol; j += 1) {
                split3[i - newRow / 2][j - newCol / 2] = arr[i][j];
            }
        }

        const merge1 = split4.concat(split3);
        const merge2 = split1.concat(split2);

        let newArr = [];

        for (let i = 0; i < newRow; i += 1) {
            newArr[i] = [...merge1[i], ...merge2[i]];
        }

        return newArr;
    };

    const splitRotate2 = (arr) => {
        const newRow = arr.length === N ? N : M;
        const newCol = newRow === N ? M : N;

        const split1 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );
        const split2 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );
        const split3 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );
        const split4 = Array.from({ length: newRow / 2 }, () =>
            Array(newCol / 2)
        );

        for (let i = 0; i < newRow / 2; i += 1) {
            for (let j = 0; j < newCol / 2; j += 1) {
                split1[i][j] = arr[i][j];
            }
        }

        for (let i = newRow / 2; i < newRow; i += 1) {
            for (let j = 0; j < newCol / 2; j += 1) {
                split4[i - newRow / 2][j] = arr[i][j];
            }
        }

        for (let i = 0; i < newRow / 2; i += 1) {
            for (let j = newCol / 2; j < newCol; j += 1) {
                split2[i][j - newCol / 2] = arr[i][j];
            }
        }

        for (let i = newRow / 2; i < newRow; i += 1) {
            for (let j = newCol / 2; j < newCol; j += 1) {
                split3[i - newRow / 2][j - newCol / 2] = arr[i][j];
            }
        }

        const merge1 = split2.concat(split1);
        const merge2 = split3.concat(split4);

        let newArr = [];

        for (let i = 0; i < newRow; i += 1) {
            newArr[i] = [...merge1[i], ...merge2[i]];
        }

        return newArr;
    };

    splitRotate2(inputArr);

    let target = [...inputArr];

    calArr.forEach((cal) => {
        if (cal === 1) {
            target = upsideDown(target);
        } else if (cal === 2) {
            target = symmetry(target);
        } else if (cal === 3) {
            target = rightRotation(target);
        } else if (cal === 4) {
            target = leftRotation(target);
        } else if (cal === 5) {
            target = splitRotate1(target);
        } else if (cal === 6) {
            target = splitRotate2(target);
        }
    });

    let ans = '';

    for (let i = 0; i < target.length; i += 1) {
        ans += `${target[i].join(' ')}\n`;
    }

    console.log(ans);
};

solution(`6 8 6
3 2 6 3 1 2 9 7
9 7 8 2 1 4 5 3
5 9 2 1 9 6 1 8
2 1 3 8 6 3 9 2
1 3 2 8 7 9 2 1
4 5 1 9 8 2 1 3
1 2 3 4 5 6`);
