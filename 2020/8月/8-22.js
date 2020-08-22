// var isToeplitzMatrix = function (matrix) {
//   const h = matrix.length;
//   if (!h) return true;
//   const w = matrix[0].length;
//   const stack = [[h - 1, 0]];
//   while (stack.length) {
//     console.log(stack);
//     const v = matrix[stack[0][0]][stack[0][1]];
//     if (
//       stack.every((item) => {
//         return matrix[item[0]][item[1]] == v;
//       })
//     ) {
//       const temp = stack
//         .map((item) => [item[0], item[1] + 1])
//         .filter((item) => {
//           return isTrue(item[0], item[1]);
//         });
//       if (stack[0][0] > 0) {
//         temp.unshift([stack[0][0] - 1, stack[0][1]]);
//       }
//       stack.splice(0, Infinity, ...temp);
//     } else {
//       return false;
//     }
//   }
//   function isTrue(i, j) {
//     return i >= 0 && i < h && j >= 0 && j < w;
//   }
//   return true;
// };
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 3],
//   [9, 5, 1, 2],
// ];
// console.log(isToeplitzMatrix(matrix));
// var isToeplitzMatrix = function (matrix) {
//   const h = matrix.length;
//   if (!h) return true;
//   const w = matrix[0].length;
//   for (let i = 1; i < h; i++) {
//     for (let j = 1; j < w; j++) {
//       if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
//     }
//   }
//   return true;
// };
// var shortestCompletingWord = function (licensePlate, words) {
//   const license = licensePlate.toLowerCase().replace(/[\d\s]/g, "");
//   const map = new Map();
//   for (const s of license) {
//     map.set(s, (map.get(s) || 0) + 1);
//   }
//   let length = Infinity;
//   let index;
//   words.forEach((item, i) => {
//     if (item.length >= length) return false;
//     const temp = new Map(map.entries());
//     for (let s of item) {
//       if (temp.get(s) == 1) {
//         temp.delete(s);
//       } else if (temp.get(s)) {
//         temp.set(s, temp.get(s) - 1);
//       }
//     }
//     if (!temp.size) {
//       length = item.length;
//       index = i;
//     }
//   });
//   return words[index];
// };
// const licensePlate = "1s3 456",
//   words = ["looks", "pest", "stew", "show"];
// console.log(shortestCompletingWord(licensePlate, words));
// var copyRandomList = function (head) {
//   if (!head) return head;
//   const map = new Map();
//   let res = new Node();
//   let a = res;
//   let res1 = res;
//   while (head) {
//     res.next = getNode(head);
//     head = head.next;
//     res = res.next;
//   }
//   res1 = res1.next;
//   while (res1) {
//     res1.random = getNode(res1.random);
//     res1 = res1.next;
//   }
//   function getNode(node) {
//     if (!node) return node;
//     if (map.get(node)) {
//       return map.get(node);
//     } else {
//       const newNode = new Node(node.val, node.next, node.random);
//       map.set(node, newNode);
//       return newNode;
//     }
//   }
//   return a.next;
// };
// var mergeKLists = function (lists) {
//   let head = new ListNode();
//   const head1 = head;
//   while (true) {
//     if (lists.every((item) => !item)) break;
//     let v = Infinity;
//     let i = [];
//     lists.forEach((item, index) => {
//       if (item && item.val < v) {
//         v = item.val;
//         i.splice(0, Infinity, index);
//       } else if (item && item.val == v) {
//         i.push(index);
//       }
//     });
//     i.forEach((item) => {
//       head.next = lists[item];
//       lists[item] = lists[item].next;
//       head = head.next;
//     });
//   }
//   return head1.next;
// };
// var wordBreak = function (s, wordDict) {

// };
// var thousandSeparator = function (n) {
//   return `${n}`.replace(/(\d+?)(?=(\d{3})+$)/g, "$1.");
// };
// console.log(thousandSeparator(2223452334311));
// var findSmallestSetOfVertices = function (n, edges) {
//   const map = new Map();
//   for (const [from, to] of edges) {
//     if (map.get(from)) {
//       map.get(from).push(to);
//     } else {
//       map.set(from, [to]);
//     }
//   }
//   for (const key of map.keys()) {
//     const temp = map.get(key);
//     while (temp.length) {
//       const keyV = temp.pop();
//       if (map.get(keyV)) {
//         temp.push(...map.get(keyV));
//         map.delete(keyV);
//       }
//     }
//   }
//   return [...map.keys()];
// };
// const n = 5,
//   edges = [
//     [0, 1],
//     [2, 1],
//     [3, 1],
//     [1, 4],
//     [2, 4],
//   ];
// console.log(findSmallestSetOfVertices(n, edges));
// let count = 0;
// var minOperations = function (nums) {
//   nums = nums.filter((i) => i);
//   if (!nums.length) {
//     return count;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2) {
//       nums[i]--;
//       count++;
//       return minOperations(nums);
//     }
//   }
//   nums = nums.map((i) => i / 2);
//   count++;
//   return minOperations(nums);
// };
// const a = [2, 2];
// console.log(minOperations(a));
var containsCycle = function (grid) {
  const h = grid.length;
  if (!h) return false;
  const w = grid[0].length;
  const search = (i, j, v) => {
    let count = 0;
    if (i < 0 || i >= h) return false;
    if (j < 0 || j >= w) return false;
    if (grid[i][j] !== v) return false;
    if ((grid[i - 1] && grid[i - 1][j]) == `**${v}`) count++;
    if ((grid[i + 1] && grid[i + 1][j]) == `**${v}`) count++;
    if (grid[i][j - 1] == `**${v}`) count++;
    if (grid[i][j + 1] == `**${v}`) count++;
    if (count >= 2) {
      console.log(i, j);
      return true;
    }
    grid[i][j] = `**${v}`;
    return (
      search(i - 1, j, v) ||
      search(i + 1, j, v) ||
      search(i, j - 1, v) ||
      search(i, j + 1, v)
    );
  };
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j].startsWith("**")) continue;
      const res = search(i, j, grid[i][j]);
      if (res) return true;
    }
  }
  return false;
};
const a = [
  ["a", "b", "b"],
  ["b", "z", "b"],
  ["b", "b", "a"],
];
console.log(containsCycle(a));
