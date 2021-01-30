// var customSortString = function (S, T) {
//   const map = new Map();
//   const l = S.length;
//   for (let i = 0; i < l; i++) {
//     map.set(S[i], i);
//   }
//   T = [...T];
//   return T.sort((a, b) => {
//     return (map.get(a) ?? -1) - (map.get(b) ?? -1);
//   }).join("");
// };
var numMatchingSubseq = function (S, words) {
  const map = new Map();
  let c = 0;

  const add = (words) => {
    words.forEach((item) => {
      if (item === "") {
        c++;
      } else {
        if (!map.has(item[0])) {
          map.set(item[0], []);
        }
        map.get(item[0]).push(item.slice(1));
      }
    });
  };
  add(words);
  for (const s of S) {
    if (!map.size) return c;
    if (map.has(s) && map.get(s).length) {
      const list = map.get(s);
      map.delete(s);
      add(list);
    }
  }
  return c;
};
