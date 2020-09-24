// var lowestCommonAncestor = function (root, p, q) {
//   let ps = "";
//   let qs = "";
//   const search = (root, s = "") => {
//     if (ps && qs) return;
//     if (!root) return;
//     s += "." + root.val;
//     if (root == p) {
//       ps = s;
//     } else if (root == q) {
//       qs = s;
//     }
//     search(root.left, s);
//     search(root.right, s);
//   };
//   search(root);
//   ps = ps.split(".");
//   qs = qs.split(".");
//   let vn;
//   const l = ps.length;
//   for (let i = l - 1; i >= 0; i--) {
//     if (qs.includes(ps[i])) {
//       vn = +ps[i];
//     }
//   }
//   const search2 = (root) => {
//     if (!root) return false;
//     if (root.val == vn) return root;
//     return search2(root.left) || search2(root.right);
//   };
//   return search2(root);
// };
const getColor = (nei) => {
  for (let i = 1; i <= 4; i++) {
    if (!nei.includes(i)) return i;
  }
};
var gardenNoAdj = function (N, paths) {
  const map = new Map();
  for (const [a, b] of paths) {
    if (map.get(a)) {
      map.get(a).push(b);
    } else {
      map.set(a, [b]);
    }
    if (map.get(b)) {
      map.get(b).push(a);
    } else {
      map.set(b, [a]);
    }
  }
  const res = new Array(N);
  `    `;
  for (let i = 0; i < N; i++) {
    res[i] = getColor(map.get(i + 1).map((i) => res[i - 1]));
  }
  return res;
};
const N = 3,
  paths = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];
console.log(gardenNoAdj(N, paths));
