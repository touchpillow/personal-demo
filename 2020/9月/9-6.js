// var modifyString = function (s) {
//   let res = "";
//   const l = s.length;
//   for (let i = 0; i < l; i++) {
//     if (s[i] !== "?") {
//       res += s[i];
//     } else {
//       let v = 97;
//       while (
//         !(
//           ((res[i - 1] && res[i - 1].charCodeAt() !== v) || !res[i - 1]) &&
//           ((s[i + 1] && s[i + 1].charCodeAt() !== v) || !s[i + 1])
//         )
//       ) {
//         v++;
//       }
//       res += String.fromCharCode(v);
//     }
//   }
//   return res;
// };
// const a = "??yw?ipkj?";
// console.log(modifyString(a));
// var numTriplets = function (nums1, nums2) {
//   const map1 = new Map();
//   const map2 = new Map();
//   for (const n of nums1) {
//     map1.set(n, (map1.get(n) || 0) + 1);
//   }
//   for (const n of nums2) {
//     map2.set(n, (map2.get(n) || 0) + 1);
//   }
//   const search = (map1, map2) => {
//     let num = 0;
//     const set = new Set();
//     for (const n of map1.keys()) {
//       set.clear();
//       for (const i of map2.keys()) {
//         if (set.has(i)) continue;
//         if (!((n * n) % i)) {
//           if (i === n) {
//             num += map1.get(n) * ((map2.get(i) * (map2.get(i) - 1)) / 2);
//           } else {
//             if (!(map2.get((n * n) / i) || 0)) continue;
//             set.add((n * n) / i);
//             set.add(i);
//             num += map1.get(n) * (map2.get(i) * (map2.get((n * n) / i) || 0));
//           }
//         }
//       }
//     }
//     return num;
//   };
//   return search(map1, map2) + search(map2, map1);
// };
// const nums1 = [1, 1],
//   nums2 = [1, 1, 1];
// console.log(numTriplets(nums1, nums2));
// var minCost = function (s, cost) {
//   const l = s.length;
//   let left = 0;
//   let v = 0;
//   for (let i = 0; i < l - 1; i++) {
//     if (s[i] == s[i + 1]) {
//       left = i;
//       i++;
//       while (s[i + 1] == s[left]) {
//         i++;
//       }
//       const vSum = cost.slice(left, i + 1);
//       v += vSum.reduce((a, b) => a + b) - Math.max(...vSum);
//     }
//   }
//   return v;
// };
// const s = "bbbaaa",
//   cost = [4, 9, 3, 8, 8, 9];

// console.log(minCost(s, cost));
// var maxNumEdgesToRemove = function (n, edges) {
//   const node = new Set();
//   for (const item of edges) {
//     node.add(edges[1]);
//     node.add(edges[2]);
//   }
// };
// var largestNumber = function (nums) {
//   nums = nums.sort((a, b) => {
//     let S1 = `${a}${b}`;
//     let S2 = `${b}${a}`;
//     return S2 - S1;
//   });
//   return nums[0] ? nums.join("") : "0";
// };
// const a = [312, 31, 2];
// console.log(largestNumber(a));
// var isMonotonic = function (A) {
//   const l = A.length;
//   if (l < 3) return true;
//   let flag;
//   for (let i = 1; i < l; i++) {
//     if (A[i] > A[i - 1]) {
//       if (flag === false) return false;
//       flag = true;
//     } else if (A[i] < A[i - 1]) {
//       if (flag === true) return false;
//       flag = false;
//     }
//   }
//   return true;
// };
// var increasingBST = function (root) {
//   if (!root) return root;
//   root.right = increasingBST(root.right);
//   if (!root.left) return root;
//   const left = increasingBST(root.left);
//   root.left = null;
//   let node = left;
//   while (node.next) {
//     node = node.next;
//   }
//   node.right = root;
//   return left;
// };

// console.log(increasingBST(a));
// var rightSideView = function (root) {
//   const res = [];
//   if (!root) return res;
//   const stack = [root];
//   while (stack.length) {
//     res.push(stack.map((i) => i.val));
//     const temp = [];
//     for (const item of stack) {
//       if (item.left) {
//         temp.push(item.left);
//       }
//       if (item.right) {
//         temp.push(item.right);
//       }
//     }
//     stack.splice(0, Infinity, ...temp);
//   }
//   return res.map((item) => item.pop());
// };
// var rightSideView = function (root) {
//   const res = [];
//   const search = (root, level) => {
//     if (!root) return;
//     if (res[level] === undefined) {
//       res[level] = root.val;
//     }
//     search(root.right, level + 1);
//     search(root.left, level + 1);
//   };
//   search(root, 0);
//   return res;
// };
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// var reverseKGroup = function (head, k) {
//   if (k < 2) return head;
//   let count = 1;
//   const node = new ListNode();
//   node.next = head;
//   let pre = node;
//   const reverse = (root) => {
//     let pre = null;
//     while (root) {
//       const next = root.next;
//       root.next = pre;
//       pre = root;
//       root = next;
//     }
//     return pre;
//   };
//   while (head) {
//     console.log(111, count, k);
//     if (count === k) {
//       const next = head.next;
//       head.next = null;
//       const last = pre.next;
//       pre.next = reverse(pre.next);
//       pre = last;
//       last.next = next;
//       head = next;
//       count = 1;
//     } else {
//       count++;
//       head = head.next;
//     }
//   }
//   return node.next;
// };

// const a = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: null,
//     },
//   },
// };
// console.log(reverseKGroup(a, 2));
// var sortArrayByParity = function (A) {
//   let left = 0;
//   let right = A.length - 1;
//   while (left < right) {
//     while (!(A[left] % 2) && left < right) {
//       left++;
//     }
//     while (A[right] % 2 && left < right) {
//       right--;
//     }
//     [A[left], A[right]] = [A[right], A[left]];
//   }
//   return A;
// };
// const a = [1, 2, 3, 2, 3];
// console.log(sortArrayByParity(a));
// var sortArrayByParity = function (A) {
//   let left = [];
//   let right = [];
//   for (const n of A) {
//     if (n % 2) {
//       right.push(n);
//     } else {
//       left.push(n);
//     }
//   }
//   return left.concat(right);
// };
