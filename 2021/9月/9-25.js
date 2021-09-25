// var getSkyline = function (buildings) {
//   const l = buildings.length;
//   buildings.sort((a, b) => a[0] - b[0] || b[2] - a[2]);
//   const res = [[buildings[0][0], buildings[0][2]]];
//   const stack = [];
//   let curRight = -1;
//   let curHeight = 0;
//   for (let i = 1; i < l; ) {
//     const [l, r, h] = buildings[i];
//     if (l > curRight) {
//       res.push(curRight, 0);
//       curRight = r;
//       curHeight = h;
//     } else if (l === curRight) {
//       if (h !== curHeight) {
//         res.push(curRight, h);
//       }
//       curRight = r;
//       curHeight = h;
//     } else {
//       // if(h>){}
//     }
//   }
//   res.push([curRight, 0]);
// };

// // 二分
// function insert(arr, item) {
//   if (!arr.length) {
//     arr.push(item);
//     return;
//   }
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     const mid = ~~((right + left) / 2);
//     if (mid === left) {
//       arr.splice(right, 0, item);
//       return;
//     }
//     if (arr[mid][0] === item[0]) {
//       arr.splice(mid, 0, item);
//       return;
//     } else if (arr[mid] < item[0]) {
//       left = mid;
//     } else {
//       right = mid;
//     }
//   }
// }
const tree = [
  {
    groupId: 1,
    parentId: null,
    groupName: "a",
  },
  {
    groupId: 2,
    parentId: null,
    groupName: "b",
  },
  {
    groupId: 3,
    parentId: 1,
    groupName: "c",
  },
  {
    groupId: 4,
    parentId: 2,
    groupName: "d",
  },
  {
    groupId: 5,
    parentId: 1,
    groupName: "e",
  },
];
const getTree = (list, key = "groupId") => {
  //记录groupid和item的对应关系
  const map = list.reduce((map, item) => {
    map.set(item[key], item);
    return map;
  }, new Map());
  const result = [];
  list.forEach((item) => {
    if (!item.parentId) {
      result.push(item);
      return;
    }
    const parent = map.get(item.parentId);
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(item);
  });
  return result;
};
console.log(getTree(tree));
