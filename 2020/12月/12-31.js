// var addOneRow = function (root, v, d) {
//   if (d < 2) {
//     const node = new TreeNode(v);
//     node.left = root;
//     return node;
//   }
//   const search = (root, level) => {
//     if (!root) return;
//     if (level === d - 1) {
//       const left = root.left;
//       const right = root.right;
//       const leftNode = new TreeNode(v);
//       const rightNode = new TreeNode(v);
//       leftNode.left = left;
//       rightNode.left = right;
//       root.left = leftNode;
//       root.right = rightNode;
//     } else {
//       search(root.left, level + 1);
//       search(root.right, level + 1);
//     }
//     return root;
//   };
//   return search(root, 1);
// };
const findIndex = (logs, index, id) => {
  let c = 0;
  for (let i = index; i < logs.length; i++) {
    let [cid, flag, t] = logs[i];
    if (cid !== id) continue;
    if (flag === "start") {
      c++;
    } else {
      c--;
    }
    if (!c) return i + 1;
  }
};
var exclusiveTime = function (n, logs) {
  const time = new Array(n).fill(0);
  let pre = 0;
  const stack = [];
  for (let log of logs) {
    let [id, flag, t] = log.split(":");
    t = Number(t);
    if (flag === "start") {
      if (stack.length) {
        time[stack[stack.length - 1]] += t - pre - 1;
      }
      stack.push(id);
      pre = t;
    } else {
      stack.pop();
      time[id] += t - pre + 1;
      pre = t;
    }
  }

  return time;
};
// var exclusiveTime = function (n, logs) {
//   const time = new Array(n).fill(0);
//   const stack = [];
//   let pre = 0;
//   let preEnd = 0;
//   for (const log of logs) {
//     let [id, flag, t] = log.split(":");
//     t = Number(t);
//     if (flag === "end") {
//       const start = stack.pop();
//       let cur;
//       if (start < preEnd) {
//         cur = t - start - pre + 1;
//       } else {
//         cur = t - start + 1;
//       }
//       preEnd = t;
//       time[id] += cur;
//       pre += cur;
//     } else {
//       stack.push(t);
//     }
//   }
//   return time;
// };
// const n = 2,
//   logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
const n = 8,
  logs = [
    "0:start:0",
    "1:start:5",
    "2:start:6",
    "3:start:9",
    "4:start:11",
    "5:start:12",
    "6:start:14",
    "7:start:15",
    "1:start:24",
    "1:end:29",
    "7:end:34",
    "6:end:37",
    "5:end:39",
    "4:end:40",
    "3:end:45",
    "0:start:49",
    "0:end:54",
    "5:start:55",
    "5:end:59",
    "4:start:63",
    "4:end:66",
    "2:start:69",
    "2:end:70",
    "2:start:74",
    "6:start:78",
    "0:start:79",
    "0:end:80",
    "6:end:85",
    "1:start:89",
    "1:end:93",
    "2:end:96",
    "2:end:100",
    "1:end:102",
    "2:start:105",
    "2:end:109",
    "0:end:114",
  ];
console.log(exclusiveTime(n, logs));
