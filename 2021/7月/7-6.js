var smallestSubsequence = function (s) {
  const map = new Map();
  for (const n of s) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const set = new Set();
  const stack = [];
  for (const n of s) {
    if (!stack.length) {
      stack.push(n);
      set.add(n);
      map.set(n, (map.get(n) || 0) - 1);
      continue;
    }
    if (set.has(n)) {
      map.set(n, (map.get(n) || 0) - 1);
      continue;
    }
    while (stack.length) {
      const pre = stack[stack.length - 1];
      if (!map.get(pre)) break;
      if (pre < n) break;
      set.delete(pre);
      stack.pop();
    }
    stack.push(n);
    set.add(n);
    map.set(n, (map.get(n) || 0) - 1);
  }
  return stack.join("");
};
const s = "bcbcbcababa";
console.log(smallestSubsequence(s));
