// var threeConsecutiveOdds = function (arr) {
//   const l = arr.length;
//   if (l < 3) return false;
//   let v = arr[0] * arr[1] * arr[2];
//   for (let i = 0; i < l - 2; i++) {
//     if (v % 2) return true;
//     v = (v * arr[i + 3]) / arr[i];
//   }
//   return false;
// };
// var a = [1, 2, 34, 3, 4, 5, 7, 23, 12];
// console.log(threeConsecutiveOdds(a));
// 1 3 5 7 9
// ((n - 1) * (n + 1)) / 4
//(n) * n / 4;
// var minOperations = function (n) {
//   if (n % 2) {
//     return ((n - 1) * (n + 1)) / 4;
//   } else {
//     return (n * n) / 4;
//   }
// };
// var maxDistance = function (position, m) {
//   position.sort((a, b) => a - b);

// };
// var minDays = function (n) {
//   const map = new Map();
//   const search = (n, count = 0) => {
//     if (map.get(n) && map.get(n) <= count) return;
//     map.set(n, count);
//     if (n == 1) return;
//     if (!(n % 3)) {
//       search(n / 3, count + 1);
//     } else {
//       search(n - 1, count + 1);
//     }
//     if (!(n % 2)) {
//       search(n / 2, count + 1);
//     } else {
//       search(n - 1, count + 1);
//     }
//   };
//   search(n);
//   console.log(map);
//   return map.get(1) + 1;
// };
// var a = 84806671;
// console.log(minDays(a));

// console.log(minDays(10));
// var maxDistance = function (position, m) {
//   position.sort((a, b) => a - b);
//   const l = position.length;
//   if (m < 3) return position[l - 1] - position[0];
//   const dis = position[l - 1] - position[0];
//   const mindDis = ~~(dis / (m - 1));
//   const list = new Array(l - 1);
//   for (let i = 0; i < l - 1; i++) {
//     list[i] = position[i + 1] - position[i];
//   }
//   list.sort((a, b) => a - b);
//   let sum = 0;
//   console.log(list, mindDis);
//   for (let i = 0; i < l - 1; i++) {
//     if (sum + list[i] > mindDis) return sum;
//     sum += list[i];
//   }
// };
// var a = [1, 2, 3, 4, 7];

// console.log(maxDistance(a, 3));
// var findShortestSubArray = function (nums) {
//   const l = nums.length;
//   if (l < 2) return l;
//   const map1 = new Map();
//   const map2 = new Map();
//   let max = 0;
//   const maxV = [];
//   const index = [];
//   for (let i = 0; i < l; i++) {
//     map1.set(nums[i], (map1.get(nums[i]) || 0) + 1);
//     map2.set(nums[i], map2.get(nums[i]) === undefined ? i : map2.get(nums[i]));
//     if (map1.get(nums[i]) > max) {
//       max = map1.get(nums[i]);
//       maxV.splice(0, Infinity, nums[i]);
//       index.splice(0, Infinity, i);
//     } else if (map1.get(nums[i]) == max) {
//       maxV.push(nums[i]);
//       index.push(i);
//     }
//   }
//   return Math.min(...maxV.map((i, ind) => index[ind] - map2.get(i) + 1));
// };
// var a = [1, 2, 2, 3, 1];
// console.log(findShortestSubArray(a));
// var searchBST = function (root, val) {
//   if (!root) return null;
//   if (val === root.val) return root;
//   if (val > root.val) {
//     return searchBST(root.right, val);
//   } else {
//     return searchBST(root.left, val);
//   }
// };
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  if (beginWord.length < 2) return 2;
  const wordSet = new Set(wordList);
  const findDis = (s1, s2) => {
    let count = 0;
    for (let i = 0, l = s1.length; i < l; i++) {
      if (s1[i] !== s2[i]) count++;
    }
    return count;
  };
  let stack = [[beginWord, 1]];
  while (stack.length) {
    let [word, transNumber] = stack.pop();
    if (word === endWord) return transNumber;
    for (let str of wordSet) {
      if (findDis(word, str) === 1) {
        stack.unshift([str, transNumber + 1]);
        wordSet.delete(str);
      }
    }
  }
  return 0;
};
var a = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength("hit", "cog", a));
