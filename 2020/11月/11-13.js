// var removeKdigits = function (num, k) {
//   const l = num.length;
//   k = l - k;
//   let res = "";
//   while (k) {
//     const templ = num.length;
//     let min = num[0];
//     let index = 0;
//     for (let i = 1; i < templ - k + 1; i++) {
//       if (num[i] < min) {
//         index = i;
//         min = num[i];
//       }
//     }
//     res += min;
//     num = num.slice(index + 1);

//     k--;
//   }
//   if (res.startsWith("0")) {
//     res = res.replace(/^0+/, "");
//   }
//   return res || "0";
// };

// var removeKdigits = function (num, k) {
//   if (k === num.length) return "0";
//   const stack = [];
//   for (const n of num) {
//     if (k && stack.length) {
//       while (k && stack.length && stack[stack.length - 1] > n) {
//         stack.pop();
//         k--;
//       }
//     }
//     stack.push(n);
//     console.log(stack);
//   }
//   while (k) {
//     stack.pop();
//     k--;
//   }
//   while (stack[0] === "0") {
//     stack.shift();
//   }
//   return stack.length ? stack.join("") : "0";
// };
// const num = "10200",
//   k = 1;
// console.log(removeKdigits(num, k));
// var reverseList = function (head, pre = null) {
//   if (!head) return pre;
//   const next = head.next;
//   head.next = pre;
//   return reverseList(next, head);
// };
var getKthFromEnd = function (head, k) {
  let fast = head;
  let slow = head;
  while (k) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
