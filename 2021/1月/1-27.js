// var numRabbits = function (answers) {
//   const map = new Map();
//   let c = 0;
//   for (const n of answers) {
//     const v = map.get(n) || 0;
//     if (!v) {
//       c += n + 1;
//     }

//     map.set(n, v === n ? 0 : v + 1);
//   }
//   return c;
// };
// const a = [0, 0, 1, 1, 1];
// console.log(numRabbits(a));

var letterCasePermutation = function (S) {
  const res = [];
  const l = S.length;

  const findIndex = (pre) => {
    let index = l;
    for (let i = pre + 1; i < l; i++) {
      if (S[i].charCodeAt() > 60) {
        index = i;
        break;
      }
    }
    return index;
  };
  const index = findIndex(-1);
  if (index === l) return [S];
  const stack = [
    {
      index,
      left: S.slice(0, index),
    },
  ];
  while (stack.length) {
    const item = stack.shift();
    const index = findIndex(item.index);
    const v1 = `${item.left}${S[item.index].toLowerCase()}${S.slice(
      item.index + 1,
      index
    )}`;
    const v2 = `${item.left}${S[item.index].toUpperCase()}${S.slice(
      item.index + 1,
      index
    )}`;
    if (index === l) {
      res.push(v1, v2);
    } else {
      stack.push({ index, left: v1 }, { index, left: v2 });
    }
  }
  return res;
};
