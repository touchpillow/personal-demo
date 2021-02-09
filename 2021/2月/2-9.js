// var maskPII = function (S) {
//   if (S.includes("@")) {
//     const [name1, name2] = S.split("@");
//     const l1 = name1.length;
//     return `${name1[0].toLowerCase()}*****${name1[
//       l1 - 1
//     ].toLowerCase()}@${name2.toLowerCase()}`;
//   } else {
//     S = S.replace(/\D+/g, "");
//     const l = S.length;
//     const local = `***-***-${S.slice(l - 4)}`;
//     if (l <= 10) return local;
//     return `${l > 10 ? `+${S.slice(0, l - 10)}-` : ""}${local}`;
//   }
// };
var findReplaceString = function (S, indexes, sources, targets) {
  const l = indexes.length;
  const res = [];
  for (let i = 0; i < l; i++) {
    const target = sources[i];
    if (S.slice(indexes[i], indexes[i] + target.length) === target) {
      res.push(i);
    }
  }
  res.sort((a, b) => indexes[a] - indexes[b]);
  let v = "";
  let pre = 0;
  for (const i of res) {
    v += S.slice(pre, indexes[i]);
    v += targets[i];
    pre = indexes[i] + sources[i].length;
  }
  const sl = S.length;
  v += S.slice(pre, sl);
  return v;
};
const S = "abcd",
  indexes = [0, 2],
  sources = ["a", "cd"],
  targets = ["eee", "ffff"];
console.log(findReplaceString(S, indexes, sources, targets));
