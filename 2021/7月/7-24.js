var maxRepOpt1 = function (text) {
  const list = new Array(26).fill("").map(() => []);
  const l = text.length;
  for (let i = 0; i < l; i++) {
    list[text[i].charCodeAt() - 97].push(i);
  }
  let max = 0;
  for (let i = 0; i < 26; i++) {
    const indexList = list[i];
    const l = indexList.length;
    if (l < 2) {
      max = Math.max(l, max);
      continue;
    }
    let left = 0,
      right = 0;
    let c = 0;
    while (left < l) {
      right = Math.max(left, right);
      while (
        right < l - 1 &&
        c + indexList[right + 1] - indexList[right] - 1 < 2
      ) {
        c += indexList[right + 1] - indexList[right] - 1;
        right++;
      }

      if (right < l - 1 || left > 0) {
        max = Math.max(max, indexList[right] - indexList[left] + 1 + 1 - c);
      } else {
        max = Math.max(max, indexList[right] - indexList[left] + 1 - c);
      }
      c -= indexList[left + 1] - indexList[left] - 1;
      if (c < 0) c = 0;
      left++;
    }
  }
  return max;
};
const text = "aaabbaaa";
// console.log(maxRepOpt1(text));
let a = 1;
setTimeout(() => {
  console.log(a);
});
a++;
