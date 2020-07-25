// var longestCommonPrefix = function (strs) {
//   var s1 = strs[0],
//     l = strs.length;
//   if (!s1) return "";
//   if (l < 2) return s1;
//   var l1 = s1.length,
//     i = 0,
//     j = l - 1;
//   while (i < l1) {
//     for (var j = l - 1; j; j--) {
//       if (s1[i] !== strs[j][i]) {
//         return s1.substr(0, i);
//       }
//     }
//     i++;
//   }

//   return s1;
// };
var isValid = function (s) {
  var l = s.length;
  if (l % 2) return false;
  var a = [],
    item,
    v;
  for (let i = 0; i < l; i++) {
    item = s[i];
    if (item === "(" || item === "[" || item === "{") {
      a.push(item);
    } else {
      if (!a.length) return false;
      v = a.pop();
      if (
        (item === ")" && v !== "(") ||
        (item === "]" && v !== "[") ||
        (item === "}" && v !== "{")
      ) {
        return false;
      }
    }
  }
  return !a.length;
};
console.log(isValid("(]"));
// function a() {
//   let b = {
//     a: 1,
//   };
//   return b;
// }
// const c=b()
