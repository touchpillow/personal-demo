let b = { a: 1 };
let a = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: {
      e: 4,
      f: 5,
      n: b,
    },
  },
  g: {
    n: b,
    h: 6,
    i: 7,
    j: {
      k: 8,
      l: 9,
    },
  },
  m: 10,
};
//递归，深度优先遍历
function deepClone2(data) {
  if (isObject(data)) {
    let temp = {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        temp[key] = deepClone2(data[key]);
      }
    }
    return temp;
  } else {
    return data;
  }
}
//递归，广度优先遍历
async function deepClone3(data) {
  if (isObject(data)) {
    let temp = {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        Promise.resolve().then(() => {
          temp[key] = deepClone3(data[key]);
        });
      }
    }
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 0);
    });
    debugger;
    return temp;
  } else {
    console.log(data);
    return data;
  }
}
//循环，深度优先遍历
function isObject(a) {
  return typeof a == "object" && a != null;
}
function deepClone4(data) {
  let stack = [];
  let res = {};
  stack.push({
    key: undefined,
    data,
    parent: res,
  });
  let dataList = new Map();
  while (stack.length) {
    let item = stack.pop();
    let currData = item.data;
    let temp;
    if (!item.key) {
      temp = item.parent;
    } else {
      temp = item.parent[item.key] = {};
    }
    debugger;
    if (dataList.get(currData)) {
      temp[item.key] = dataList.get(currData);
      continue;
    }
    dataList.set(currData, currData);
    for (let key in currData) {
      if (isObject(currData[key])) {
        if (currData.hasOwnProperty(key)) {
          stack.push({
            key,
            data: currData[key],
            parent: temp,
          });
        }
      } else {
        console.log(currData[key]);
        temp[key] = currData[key];
      }
    }
  }
  console.log(dataList);
  return res;
}
//循环，广度优先遍历
function deepClone5(data) {
  let stack = [];
  let res = {};
  stack.push({
    key: undefined,
    data,
    parent: res,
  });
  while (stack.length) {
    let item = stack.shift();
    let currData = item.data;
    let temp;
    if (!item.key) {
      temp = item.parent;
    } else {
      temp = item.parent[item.key] = {};
    }
    for (let key in currData) {
      if (isObject(currData[key])) {
        if (currData.hasOwnProperty(key)) {
          stack.push({
            key,
            data: currData[key],
            parent: temp,
          });
        }
      } else {
        console.log(currData[key]);
        temp[key] = currData[key];
      }
    }
  }

  return res;
}
// console.log(deepClone2(a));
// deepClone3(a).then(res => {
//   console.log(res, "0000000");
// });
let res = deepClone4(a);
// res.g.n.a = 2;
console.log(res);
console.log(deepClone5(a));
function reverseStr(s) {
  if (typeof s != "string") {
    throw new Error("请传入字符串");
  }
  if (s.length == 1) {
    return s;
  } else {
    return `${reverseStr(s.substr(1))}${s[0]}`;
  }
}
// console.log(reverseStr("123456"));
Function.prototype.myBind = function () {
  // let _this=this;
  let _this = arguments[0];
  if (!_this) {
    _this = {};
  }
  let arg = arguments.apply.slice([], [1]);
  _this._fn = this;
  return (...currArg) => {
    _this._fn(...arg, ...currArg);
  };
};
let c = function (a) {
  console.log(arguments);
};
// c.myBind(null, 2)(1);
let e = [2, 3, 4, 4354, 46, 456, 457, 4, 2];
//归并排序
function gbSort(arr) {
  let arrLength = arr.length;
  if (arrLength <= 1) {
    return arr;
  }
  debugger;
  let leftArr = [];
  let rightArr = [];
  let middleNum = arr[Math.floor(arrLength / 2)];
  arr.forEach((item, index) => {
    if (index == Math.floor(arrLength / 2)) return;
    if (item <= middleNum) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  });
  return gbSort(leftArr).concat(middleNum, gbSort(rightArr));
}
// console.log(gbSort(e));
//快速排序
function ksSort(arr) {
  return splitArr(arr);
}
function splitArr(arr) {
  let arrLength = arr.length;
  if (arrLength <= 1) {
    return arr;
  }
  let leftArr = arr.slice(0, Math.floor(arrLength / 2));
  let rightArr = arr.slice(Math.floor(arrLength / 2));
  return sortArray(splitArr(leftArr), splitArr(rightArr));
}
function sortArray(left, right) {
  debugger;
  let res = [];
  while (!!left.length && !!right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return res.concat(left, right);
}
// console.log(ksSort(e));
