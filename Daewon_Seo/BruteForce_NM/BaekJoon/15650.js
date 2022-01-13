const solution = function (i) {
  const [N, M] = i
    .toString()
    .trim()
    .split(" ")
    .map((el) => +el);

  const nums = Array.from({ length: N }, (_, i) => i + 1);

  const getComb = (arr, pick, prefix = []) => {
    if (pick === 0) {
      console.log(prefix.join(" "));
      return [prefix];
    }

    return arr.flatMap((v, i) =>
      getComb(arr.slice(i + 1), pick - 1, [...prefix, v])
    );
  };

  getComb(nums, M);
};

solution(`3 1`);
