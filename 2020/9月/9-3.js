// const inRange = (min, max, value) => {
//   return value <= max && value >= min;
// };
// var robotSim = function (commands, obstacles) {
//   const point = [0, 0];
//   let flagDir = 1;
//   let flagNum = 1;
// //   const set = new Set(obstacles.map((item) => `${item[0]}-${item[1]}`));
//   for (const n of commands) {
//     if (n < 0) {
//       n = n == -2 ? 1 : -1;
//       if (n == 1 && flagDir == 1) {
//         flagNum *= -1;
//       } else if (n == -1 && flagDir == 1) {
//         flagNum = flagNum;
//       } else if (n == 1 && flagDir == 0) {
//         flagNum = flagNum;
//       } else {
//         flagNum *= -1;
//       }
//       flagDir = (flagDir + n) % 2;
//     } else {
//         if(flagNum<0&&flagDir){
//             const item=
//             if (obstacles.some(item => item[0] == point[0] && inRange(point[flagDir] += flagNum * n,point[1],item[1]))){

// }
//         }
//       point[flagDir] += flagNum * n;
//     }
//   }
// };
// var middleNode = function (head) {
//   let fast = head;
//   let slow = head;
//   while (fast && fast.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   return slow;
// };
// var middleNode = function (head) {
//   const list = [];
//   while (head) {
//     list.push(head);
//   }
//   return head && list[~~(list.length / 2)];
// };
// const a = 8;
// var binaryGap = function (N) {
//   const s = N.toString(2);
//   const words = s.split("1");
//   words.pop();
//   words.shift();
//   console.log(words);
//   return Math.max(...words.map((s) => s.length + 1));
// };
// console.log(binaryGap(a));
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  while (v1.length) {
    if (!v2.length) return true;
    if (+v1.shift() < +v2.shift()) return false;
  }
  return !v2.length;
};
