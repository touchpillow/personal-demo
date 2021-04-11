var fullJustify = function (words, maxWidth) {
  const res = [];
  const l = words.length;
  let pre = 0;
  for (let i = 0; i < l; i++) {
    if (pre + words[i].length + 1 > maxWidth || !pre) {
      pre = words[i].length;
      res.push([i]);
    } else {
      pre += words[i].length + 1;
      res[res.length - 1].push(i);
    }
  }
  const lr = res.length;
  return res.map((item, index) => {
    if (index === lr - 1) {
      const res = item.map((i) => words[i]).join(" ");
      return `${res}${" ".repeat(maxWidth - res.length)}`;
    }
    const count = item.length;
    const v = item.reduce((a, b) => a + words[b].length, 0);
    let res = words[item[0]];
    let len = maxWidth - v;
    for (let i = 1; i < count; i++) {
      const c = Math.ceil(len / (count - i));
      res += `${" ".repeat(c)}${words[item[i]]}`;
      len -= c;
    }
    return `${res}${" ".repeat(len)}`;
  });
};
const words = ["What", "must", "be", "acknowledgment", "shall", "be"],
  maxWidth = 16;
console.log(fullJustify(words, maxWidth));
