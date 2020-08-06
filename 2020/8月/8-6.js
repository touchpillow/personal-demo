// var tree2str = function (t) {
//   let res = "";
//   const search = (root) => {
//     if (!root) {
//       if (res[res.length - 1] !== "(") {
//         res += "()";
//       }
//       return;
//     }
//     res += root.val;
//     if (root.left) {
//       res += "(";
//       search(root.left);
//       res += ")";
//       res += "(";
//       search(root.right);
//       res += ")";
//     } else {
//       if (root.right) {
//         res += "(";
//         search(root.right);
//         res += ")";
//       }
//     }
//   };
//   search(t);
//   return res;
// };
// var mergeTrees = function (t1, t2) {
//   if (!t1 || !t2) return t1 || t2;
//   t1.val = t1.val + t2.val;
//   t1.left = mergeTrees(t1.left, t2.left);
//   t1.right = mergeTrees(t1.right, t2.right);
//   return t1;
// };

var restoreIpAddresses = function (s) {
  const res = [];
  const restoreIpAddressesAA = (s, start, last) => {
    if (!s && start == 4) {
      res.push(last);
      return;
    } else if (start == 4) {
      return;
    } else {
      for (let i = 1; i < 4 && i < s.length + 1; i++) {
        const temps = s.slice(0, i);
        if (Number(temps) > 255) break;
        if (i > 1 && temps.startsWith("0")) break;
        const v = `${last}${!start ? "" : "."}${temps}`;
        restoreIpAddressesAA(s.slice(i), start + 1, v);
      }
    }
  };
  restoreIpAddressesAA(s, 0, "");
  return res;
};
var a = "25525511135";
console.log(restoreIpAddresses(a));
