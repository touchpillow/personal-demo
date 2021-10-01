/*
 * @Author: your name
 * @Date: 2021-09-30 13:02:15
 * @LastEditTime: 2021-09-30 14:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/9月/9-30.js
 */
var findTheLongestSubstring = function (s) {
  let max = 0;
  const map = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };
  const char = ["a", "e", "i", "o", "u"];
  const stack = [0, 0, 0, 0, 0];
  const indexMap = new Map();
  indexMap.set("00000", -1);
  for (let i = 0; i < s.length; i++) {
    if (char.includes(s[i])) {
      stack[map[s[i]]] = (stack[map[s[i]]] + 1) % 2;
    }
    const current = stack.join("");
    if (!indexMap.has(current)) {
      indexMap.set(current, i);
    } else {
      max = Math.max(max, i - indexMap.get(current));
    }
  }
  return max;
};
const s = "leetcodeisgreat";
console.log(findTheLongestSubstring(s));
