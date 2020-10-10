// var getDecimalValue = function (head) {
//   let s = "";
//   while (head) {
//     s += head.val;
//     head = head.next;
//   }
//   return Number.parseInt(s, 2);
// };
// var getDecimalValue = function (head) {
//   let res = 0;
//   while (head) {
//     res = res * 2 + head.val;
//     head = head.next;
//   }
//   return res;
// };
// var findNumbers = function (nums) {
//   return nums.filter((i) => !(`${i}`.length % 2)).length;
// };
// var maxProduct = function (words) {
//   const l = words.length;
//   if (l < 2) return 0;
//   let count = 0;
//   words.sort((a, b) => b.length - a.length);
//   const set = words.map((i) => new Set(i).size);
//   for (let i = 0; i < l - 1; i++) {
//     for (let j = i + 1; j < l; j++) {
//       if (words[i].length * words[j].length <= count) break;
//       if (new Set(`${words[i]}${words[j]}`).size == set[i] + set[j]) {
//         count = Math.max(words[i].length * words[j].length, count);
//         break;
//       }
//     }
//   }
//   return count;
// };
const fn = (s) => {
  return [...new Set(s)].sort().join("");
};
var maxProduct = function (words) {
  const l = words.length;
  if (l < 2) return 0;
  const map = new Map();
  let count = 0;
  words.sort((a, b) => b.length - a.length);
  const list = words.map(fn);
  for (let i = 0; i < l; i++) {
    if (list[i].length > (map.get(list[i]) || "").length) {
      map.set(list[i], i);
    }
  }
  for (let i = 0; i < l - 1; i++) {
    if (i !== map.get(list[i])) continue;
    for (let j = i + 1; j < l; j++) {
      if (j !== map.get(list[j])) continue;
      if (words[i].length * words[j].length <= count) break;
      if (
        new Set(`${list[i]}${list[j]}`).size ==
        list[i].length + list[j].length
      ) {
        count = words[i].length * words[j].length;
        console.log(words[i].length, words[j].length, i, j);
        break;
      }
    }
  }
  return count;
};
const s = [
  "fdbb",
  "effbbbd",
  "bfbdf",
  "bfdbcdb",
  "eeee",
  "cdbeefeeabf",
  "aaecbf",
  "abaa",
  "defdafacf",
  "dbebef",
  "cccdefacbc",
  "fcaadcaa",
  "bed",
  "fadceefdbf",
  "cd",
  "eadddacd",
  "fbccaf",
  "df",
  "ffdee",
  "bacdcaeadb",
  "accbdabcbcb",
  "beccccbbaa",
  "eddf",
  "cfdbdaedfc",
  "abadecfbdb",
  "be",
  "acedeacde",
  "caccbf",
  "bbd",
  "facedfc",
  "de",
  "fdeefa",
  "deab",
  "dfcbfaad",
  "ffbbabbbc",
  "edca",
  "debdd",
  "acfdbbaefb",
  "edeedbbc",
  "dafdfe",
  "cbfdbdfdc",
  "ad",
  "ad",
  "acfcabd",
  "ce",
  "ffaecf",
  "fbe",
  "ccafccbcfbb",
  "cbadc",
  "dea",
  "fb",
  "ef",
  "facbffbafe",
  "ddddfee",
  "dbebacf",
  "fadedd",
  "fdafaccc",
  "afdcefbbdab",
  "eeaddbafd",
  "cc",
  "edbfbab",
  "bcccfebedf",
  "fdacdeacff",
  "edfccfac",
  "ffdbbcc",
  "fbcadeccdab",
  "aebebbffad",
  "badd",
  "cf",
  "ede",
  "dcecf",
  "ddaf",
  "fd",
  "cfeec",
  "adfcd",
  "aeecadfdba",
  "dbf",
  "dedfcdab",
  "cecdcfefbad",
  "bdcefcec",
  "caebb",
  "dbdecaa",
  "dcccdf",
  "adeefea",
  "cfcb",
  "ddd",
  "efca",
  "acadfed",
  "efbacdc",
  "fbebbafceb",
  "dfabaacaf",
  "ebbecfacdd",
  "fccf",
  "ecdab",
  "aefdaca",
  "eadafbaea",
  "beafdb",
  "ebaf",
  "dcbbeddeef",
  "faadc",
  "dbbce",
  "daaafd",
  "fedbcabfd",
  "ffecb",
  "fafbeefdd",
  "dffddbfad",
  "ecdceecbc",
  "ffbbccefba",
  "bfdacd",
  "dbd",
  "aaecc",
  "bfec",
  "febabefbed",
  "ceaffd",
  "ddeccddfbd",
];
console.log(maxProduct(s));
