/**
 * 1578. 避免重复字母的最小删除成本
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
// var minCost = function (s, cost) {
//   let min = 0;
//   for (let i = 0; i < s.length; ) {
//     // 找最长相邻相同字母
//     let j;
//     for (j = i + 1; j < s.length; j++) {
//       if (s[j] !== s[i]) break;
//     }
//     if (i + 1 !== j) {
//       // let temp = cost.slice(i, j).sort((a, b) => a - b)
//       // temp.pop()
//       const max = Math.max(...cost.slice(i, j));
//       min = temp.reduce((pre, i) => pre + i, min);
//     }
//     i = j;
//   }
//   return min;
// };
var robotSim3 = function (commands, obstacles) {
  const len = commands.length,
    // 1面向北 2面向东 3面向南 4面向西
    // 调整方向：当前方向值 +5 取余数
    v = {
      "-2": -1,
      "-1": 1,
    },
    // 1面向北 2面向东 3面向南 4面向西
    // 0x轴下标 1y轴下标
    keyIndex = {
      // 北向前 y轴
      1: 1,
      // 东向前 X轴
      2: 0,
      // 南向前 y轴
      3: 1,
      // 西向前 X轴
      4: 0,
    },
    valuesIndex = {
      // 北向前 y轴+1
      1: 1,
      // 东向前 X轴+1
      2: 1,
      // 南向前 y轴-1
      3: -1,
      // 西向前 X轴-1
      4: -1,
    };
  let map = new Map(),
    x = 0,
    y = 0,
    // 1面向北 2面向东 3面向南 4面向西
    d = 1;
  let position = [0, 0],
    max = 0;
  for (let i = 0; i < obstacles.length; i++) {
    const [xi, yi] = obstacles[i];
    map.set(`${xi},${yi}`, true);
  }
  for (let i = 0; i < len; i++) {
    const step = commands[i];
    if (step === -2 || step === -1) {
      // 0-3
      // 1-4
      // 加5 是为了防止负数的情况 比如 (1-1)%5 最小值是1
      // d = Math.max(1, (d + v[step] + 4) % 4 );
      d = ((d + v[step] - 1 + 4) % 4) + 1;
      // d 从0 1 2 3 的话就是对4取余数
      // d = (d + v[step] + 4) % 4
    } else if (step >= 1 && step <= 9) {
      for (let j = 1; j <= step; j++) {
        // 根据方向获取对应xy轴   根据方向获取+-1
        position[keyIndex[d]] += valuesIndex[d];
        if (map.has(position.join())) {
          console.log(position);
          position[keyIndex[d]] -= valuesIndex[d];
          break;
        }
      }
      max = Math.max(
        max,
        position[0] * position[0] + position[1] * position[1]
      );
    }
  }
  return max;
};
