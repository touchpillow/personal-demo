// var SnapshotArray = function (length) {
//   this.record = [];
//   this.data = new Array(length).fill(0);
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// SnapshotArray.prototype.set = function (index, val) {
//   this.data[index] = val;
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function () {
//   this.record.push(this.data.join("-"));
//   return this.record.length - 1;
// };

// /**
//  * @param {number} index
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function (index, snap_id) {
//   const record = this.record[snap_id];
//   return Number(record.split("-")[index]);
// // };
// var SnapshotArray = function (length) {
//   this.record = [new Map()];
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// SnapshotArray.prototype.set = function (index, val) {
//   this.record[this.record.length - 1].set(index, val);
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function () {
//   this.record.push(new Map());
//   return this.record.length - 1;
// };

// /**
//  * @param {number} index
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function (index, snap_id) {
//   for (let i = snap_id; i >= 0; i--) {
//     if (this.record[i].has(index)) return this.record[i].get(index);
//   }
//   return 0;
// };
// var sumBase = function (n, k) {
//   let sum = 0;
//   while (n) {
//     sum += n % k;
//     n = ~~(n / k);
//   }
//   return sum;
// };
// var sumBase = function (n, k) {
//   const s = n.toString(k);
//   let sum = 0;
//   for (const v of s) {
//     sum += Number(v);
//   }
//   return sum;
// };
// var canBeTypedWords = function (text, brokenLetters) {
//   const words = text.split(" ");
//   brokenLetters = [...brokenLetters];
//   return words.filter((item) => {
//     return brokenLetters.every((s) => !item.includes(s));
//   }).length;
// };
const list = [
  {
    id: 1,
    price: 5,
  },
  {
    id: 2,
    price: 20,
  },
  {
    id: 3,
    price: 3,
  },
  {
    id: 4,
    price: 8,
  },
  {
    id: 5,
    price: 6,
  },
];
const getGroups = (list, mount) => {
  list.sort((a, b) => a.price - b.price); //先排序
  const res = [];
  const l = list.length;
  const cur = [];
  const handle = (index = 0, preSum = 0) => {
    if (preSum === mount) {
      res.push(cur.slice());
      return;
    }
    for (let i = index; i < l; i++) {
      if (preSum + list[i].price > mount) break; //剪枝
      cur.push(list[i]);
      handle(i + 1, preSum + list[i].price);
      cur.pop();
    }
  };
  handle();
  return res;
};
console.log(getGroups(list, 8));
const arr = ["ac", "bc", "ed", "sf", "hi", "ae", "ab"];
const group = (arr) => {
  const stringList = new Array(26).fill(0).map((item, index) => index);
  const findNumber = (v) => {
    while (stringList[v] !== v) {
      v = stringList[v];
    }
    return v;
  };
  arr.forEach((item) => {
    const t = [].find.call(item, (s) => {
      const code = s.charCodeAt() - 97;
      return stringList[code] !== code;
    });
    const target = t || item[0];
    const targetIndex = findNumber(stringList[target.charCodeAt() - 97]);
    for (const s of item) {
      const code = s.charCodeAt() - 97;
      const last = findNumber(code);
      stringList[last] = targetIndex;
    }
  });
  const map = new Map();
  for (const item of arr) {
    for (const s of item) {
      const code = s.charCodeAt() - 97;
      const target = findNumber(code);
      if (!map.has(target)) {
        map.set(target, new Set(s));
      } else {
        map.get(target).add(s);
      }
    }
  }
  return [...map.values()].map((item) => [...item].join(""));
};
// console.log(group(arr));
