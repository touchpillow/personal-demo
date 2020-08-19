// var longestWord = function (words) {
//   const set = new Set(words);
//   let length = 0;
//   let res = "";
//   for (const s of words) {
//     let flag = true;
//     const l = s.length;
//     for (let i = 1; i <= l; i++) {
//       if (!set.has(s.slice(0, i))) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       if (l > length) {
//         length = l;
//         res = s;
//       } else if (l == length && res > s) {
//         res = s;
//       }
//     }
//   }
//   return res;
// };
// var pivotIndex = function (nums) {
//   const l = nums.length;
//   if (!l) return -1;
//   if (l == 1) return 0;
//   let left = 0;
//   let right = nums.reduce((a, b) => a + b);
//   right -= nums[0];
//   for (let i = 0; i < l; i++) {
//     if (left == right) return i;
//     left += nums[i];
//     right -= nums[i + 1];
//   }
//   return -1;
// };
// var a = [1, 2, 3];
// console.log(pivotIndex(a));
// var partition = function (s) {
//   const res = [];
//   const s = [...s].sort((a, b) => a - b);
// };
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
var cloneGraph = function (node) {
  if (!node) return node;
  const map = new Map();
  const set = new Set();
  const stack = [node];
  let head;
  let count = 0;
  while (stack.length) {
    const item = stack.pop();
    if (set.has(item.val)) continue;
    count++;
    if (count > 20) return;
    const newItem = findChild(item, set, map);
    head = head || newItem;
    newItem.neighbors = newItem.neighbors.map((child) => {
      return findChild(child, set, map);
    });
    set.add(newItem.val);
    stack.push(...newItem.neighbors);
  }
  function findChild(child, set, map) {
    if (map.has(child.val)) return map.get(child.val);
    const node = new Node(child.val, child.neighbors);
    map.set(child.val, node);
    return node;
  }
  return head;
};
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];
cloneGraph(node1);
