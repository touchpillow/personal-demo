// var findAnagrams = function (s, p) {
//   const l1 = s.length;
//   const l2 = p.length;
//   if (l1 < l2) return [];
//   const map2 = {};
//   for (const n of p) {
//     map2[n] = (map2[n] || 0) + 1;
//   }
//   const keys = Object.keys(map2);
//   const map1 = {};
//   let res = [];
//   for (let i = 0; i < l2; i++) {
//     map1[s[i]] = (map1[s[i]] || 0) + 1;
//   }
//   const flag = keys.every((item) => map1[item] == map2[item]);
//   if (flag) res.push(0);
//   for (let i = l2; i < l1; i++) {
//     map1[s[i]] = (map[s[i]] || 0) + 1;
//     map1[s[i - l2]]--;
//     const flag = keys.every((item) => map1[item] == map2[item]);
//     if (flag) res.push(i - l2 + 1);
//   }
//   return res;
// };
// var deleteNode = function (node) {
//   node.val = node.next.val;
//   node.next = node.next.next;
// };
const reverse = (node) => {
  let pre = null;
  while (node) {
    const next = node.next;
    node.next = pre;
    pre = node;
    node = next;
  }
  return pre;
};

var isPalindrome = function (head) {
  let slow = { next: head };
  let fast = { next: head };
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let right = reverse(slow.next);
  console.log(right);
  while (right && head) {
    if (right.val !== head.val) return false;
    right = right.next;
    head = head.next;
  }
  return true;
};
const a = { val: 1, next: { val: 2, next: null } };
console.log(isPalindrome(a));
