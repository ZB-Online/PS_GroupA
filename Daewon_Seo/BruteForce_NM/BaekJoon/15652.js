const solution = function (i) {
  const [N, M] = i
    .toString()
    .trim()
    .split(" ")
    .map((el) => +el);

  const nums = Array.from({ length: N }, (_, i) => i + 1);

  let result = "";

  const getComb = (arr, pick, prefix = []) => {
    if (pick === 0) {
      result += `${prefix.join(" ")}\n`;
      return [prefix];
    }

    return arr.flatMap((v, i) =>
      getComb(arr.slice(i), pick - 1, [...prefix, v])
    );
  };

  getComb(nums, M);
  console.log(result.trim());
};

solution(`3 3`);
