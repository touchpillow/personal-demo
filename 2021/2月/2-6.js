// var numComponents = function (head, G) {
//   let l = 0;
//   let c = 0;
//   while (head) {
//     if (G.includes(head.val)) {
//       if (!l) {
//         c++;
//       }
//       l++;
//     } else {
//       l = 0;
//     }
//     head = head.next;
//   }
//   return c;
// };
// var minimumLengthEncoding = function (words) {
//   const map = {};

//   words.forEach((item) => {
//     const l = item.length;
//     let cur = map;
//     for (let i = l - 1; i >= 0; i--) {
//       if (!cur[item[i]]) {
//         cur[item[i]] = {};
//       }
//       cur = cur[item[i]];
//     }
//   });
//   let c = 0;
//   const dfs = (map, pre = 0) => {
//     const keys = Object.keys(map);
//     if (keys.length === 0) {
//       c += pre + 1;
//     } else {
//       keys.forEach((item) => {
//         dfs(map[item], pre + 1);
//       });
//     }
//   };
//   dfs(map, 0);
//   return c;
// };
// const words = ["time", "me", "bell"];
// console.log(minimumLengthEncoding(words));
var minimumLengthEncoding = function (words) {
  words.sort((a, b) => b - a);
  const set = new Set(words);
  for (const item of set) {
    const l = item.length;
    for (let i = 1; i < l; i++) {
      const v = item.slice(i);
      if (set.has(v)) {
        set.delete(v);
      }
    }
  }
  let c = 0;
  for (const item of set) {
    c += item.length + 1;
  }
  return c;
};
