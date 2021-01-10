// var decode = function (encoded, first) {
//   const res = [first];
//   let cur = first.toString(2);
//   for (const end of encoded) {
//     const s = end.toString(2);
//     let temp = "";

//     for (let i = 0; i < Math.max(s.length, cur.length); i++) {
//       if (
//         (s[s.length - 1 - i] === undefined ? "0" : s[s.length - 1 - i]) === "0"
//       ) {
//         temp = `${
//           cur[cur.length - 1 - i] === undefined ? "0" : cur[cur.length - 1 - i]
//         }${temp}`;
//       } else {
//         temp = `${cur[cur.length - 1 - i] === "1" ? "0" : "1"}${temp}`;
//       }
//     }
//     res.push(Number.parseInt(temp, 2));
//     cur = temp;
//   }
//   return res;
// };
// const encoded = [6, 2, 7, 3],
//   first = 4;
// console.log(decode(encoded, first));
// var swapNodes = function (head, k) {
//   let pre = head;
//   const list = [];
//   while (head) {
//     list.push(head);
//     head = head.next;
//   }
//   const l = list.length;
//   let left = list[k - 1].val;
//   let right = list[l - k].val;
//   list[k - 1].val = right;
//   list[l - k].val = left;
//   return pre;
// };
// var minimumTimeRequired = function (jobs, k) {
//   const dp = new Array(k).fill(0);
//   jobs.sort((b, a) => a - b);
//   const l = jobs.length;
//   console.log(jobs);
//   for (let i = 0; i < l; i++) {
//     const min = Math.min(...dp);
//     const index = dp.findIndex((item) => item === min);
//     dp[index] += jobs[i];
//   }
//   return Math.max(...dp);
// };
// const jobs = [38, 49, 91, 59, 14, 76, 84],
//   k = 3;
// console.log(minimumTimeRequired(jobs, k));
var minimumHammingDistance = function (source, target, allowedSwaps) {
  allowedSwaps.forEach((item) => {
    item.sort((a, b) => a - b);
  });
  allowedSwaps.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return b[0] - a[0];
  });
  const setList = [];
  for (const [start, end] of allowedSwaps) {
    const index = setList.findIndex((item) => {
      return item.has(start) || item.has(end);
    });
    if (index < 0) {
      const set = new Set();
      set.add(start);
      set.add(end);
      setList.push(set);
    } else {
      setList[index].add(start);
      setList[index].add(end);
      for (let j = index + 1; j < setList.length; ) {
        if (setList[j].has(end) || setList[j].has(start)) {
          setList[index] = new Set([...setList[index], ...setList[j]]);
          setList.splice(j, 1);
        } else {
          j++;
        }
      }
    }
  }
  let c = 0;
  const l = source.length;
  const flag = new Array(l).fill(true);

  for (const set of setList) {
    const item = [...set];
    item.forEach((item) => {
      flag[item] = false;
    });
    const map = item
      .map((i) => source[i])
      .reduce((map, item) => {
        map[item] = (map[item] || 0) + 1;
        return map;
      }, {});
    item
      .map((i) => target[i])
      .forEach((i) => {
        if (map[i]) {
          map[i]--;
        } else {
          c++;
        }
      });
  }

  for (let i = 0; i < l; i++) {
    if (flag[i] && target[i] !== source[i]) c++;
  }

  return c;
};

const source = [
    67,
    71,
    32,
    48,
    71,
    12,
    64,
    20,
    29,
    47,
    90,
    13,
    17,
    94,
    81,
    62,
    24,
    20,
    22,
  ],
  target = [
    67,
    6,
    32,
    48,
    36,
    97,
    70,
    29,
    29,
    15,
    90,
    73,
    32,
    94,
    38,
    61,
    24,
    20,
    22,
  ],
  allowedSwaps = [
    [16, 17],
    [10, 4],
    [6, 4],
    [5, 4],
    [13, 15],
    [7, 18],
    [4, 13],
    [18, 12],
    [14, 15],
    [17, 8],
    [7, 11],
    [18, 11],
    [6, 15],
  ];
console.log(minimumHammingDistance(source, target, allowedSwaps));
