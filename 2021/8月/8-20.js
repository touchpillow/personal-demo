// var CombinationIterator = function (characters, combinationLength) {
//   this.chrats = new Array(combinationLength);
//   for (let i = 0; i < combinationLength; i++) {
//     this.chrats[i] = i;
//   }
//   this.dic = characters;
//   this.init = false;
// };

// /**
//  * @return {string}
//  */
// CombinationIterator.prototype.next = function () {
//   if (!this.init) {
//     this.init = true;
//     return this.dic.slice(0, this.chrats.length);
//   }
//   for (let i = 0; i < this.chrats.length; i++) {
//     const preIndex = this.chrats.length - 1 - i;
//     let curIndex = this.chrats[preIndex];
//     if (curIndex < this.dic.length - 1 - i) {
//       for (let j = preIndex; j < this.chrats.length; j++) {
//         this.chrats[j] = curIndex + 1 + j - preIndex;
//       }
//       return this.chrats.map((i) => this.dic[i]).join("");
//     }
//   }
// };

// /**
//  * @return {boolean}
//  */
// CombinationIterator.prototype.hasNext = function () {
//   return !this.init || this.chrats[0] !== this.dic.length - this.chrats.length;
// };
const a = [
  {
    name: "name1",
    value: "value1",
    child: [
      {
        name: "name11",
        value: "value11",
        child: [
          {
            name: "name111",
            value: "value111",
          },
          {
            name: "name112",
            value: "value112",
          },
        ],
      },
    ],
  },
  {
    name: "name2",
    value: "value2",
    child: [
      {
        name: "name21",
        value: "value21",
      },
    ],
  },
  {
    name: "name3",
    value: "value3",
  },
];
// const generteDicTree = (arr, res = [], preName = "", preValue = "") => {
//   return arr.reduce((res, item) => {
//     const curName = preName ? `${preName}/${item.name}` : item.name;
//     const curValue = preValue ? `${preValue}/${item.value}` : item.value;
//     if (item.child) {
//       return generteDicTree(item.child, res, curName, curValue);
//     } else {
//       res.push({
//         names: curName,
//         values: curValue,
//       });
//     }
//     return res;
//   }, res);
// };
const c = [
  {
    id: 5,
    name: "测试类目1",
    description: null,
    parentId: 2,
    sort: 4,
    tagType: "category",
    configTagList: [
      {
        id: 6,
        name: "测试产品线1",
        description: null,
        parentId: 5,
        sort: 5,
        tagType: "product",
        configTagList: [
          {
            id: 131,
            name: "2",
            description: null,
            parentId: 6,
            sort: 129,
            tagType: "brand",
          },
          {
            id: 132,
            name: "3",
            description: null,
            parentId: 6,
            sort: 130,
            tagType: "brand",
          },
          {
            id: 133,
            name: "4",
            description: null,
            parentId: 6,
            sort: 131,
            tagType: "brand",
          },
          {
            id: 134,
            name: "5",
            description: null,
            parentId: 6,
            sort: 132,
            tagType: "brand",
          },
          {
            id: 135,
            name: "6",
            description: null,
            parentId: 6,
            sort: 133,
            tagType: "brand",
          },
          {
            id: 136,
            name: "78",
            description: null,
            parentId: 6,
            sort: 134,
            tagType: "brand",
          },
        ],
      },
      {
        id: 125,
        name: "12321",
        description: null,
        parentId: 5,
        sort: 123,
        tagType: "product",
        configTagList: [
          {
            id: 126,
            name: "123213",
            description: null,
            parentId: 125,
            sort: 124,
            tagType: "brand",
            configTagList: [
              {
                id: 137,
                name: "1",
                description: null,
                parentId: 126,
                sort: 135,
                tagType: "model",
              },
              {
                id: 138,
                name: "2",
                description: null,
                parentId: 126,
                sort: 136,
                tagType: "model",
              },
              {
                id: 139,
                name: "3",
                description: null,
                parentId: 126,
                sort: 137,
                tagType: "model",
              },
              {
                id: 140,
                name: "34",
                description: null,
                parentId: 126,
                sort: 138,
                tagType: "model",
              },
            ],
          },
          {
            id: 127,
            name: "32432",
            description: null,
            parentId: 125,
            sort: 125,
            tagType: "brand",
          },
          {
            id: 128,
            name: "12",
            description: null,
            parentId: 125,
            sort: 126,
            tagType: "brand",
          },
          {
            id: 129,
            name: "3",
            description: null,
            parentId: 125,
            sort: 127,
            tagType: "brand",
          },
          {
            id: 130,
            name: "1",
            description: null,
            parentId: 125,
            sort: 128,
            tagType: "brand",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "测试类目2",
    description: null,
    parentId: 2,
    sort: 19,
    tagType: "category",
    configTagList: [
      {
        id: 22,
        name: "测试产品线1",
        description: null,
        parentId: 21,
        sort: 20,
        tagType: "product",
        configTagList: [
          {
            id: 23,
            name: "测试品牌1",
            description: null,
            parentId: 22,
            sort: 21,
            tagType: "brand",
            configTagList: [
              {
                id: 24,
                name: "测试型号1",
                description: null,
                parentId: 23,
                sort: 22,
                tagType: "model",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "测试类目1",
    description: null,
    parentId: 2,
    sort: 4,
    tagType: "category",
    configTagList: [
      {
        id: 6,
        name: "测试产品线1",
        description: null,
        parentId: 5,
        sort: 5,
        tagType: "product",
        configTagList: [
          {
            id: 131,
            name: "2",
            description: null,
            parentId: 6,
            sort: 129,
            tagType: "brand",
          },
          {
            id: 132,
            name: "3",
            description: null,
            parentId: 6,
            sort: 130,
            tagType: "brand",
          },
          {
            id: 133,
            name: "4",
            description: null,
            parentId: 6,
            sort: 131,
            tagType: "brand",
          },
          {
            id: 134,
            name: "5",
            description: null,
            parentId: 6,
            sort: 132,
            tagType: "brand",
          },
          {
            id: 135,
            name: "6",
            description: null,
            parentId: 6,
            sort: 133,
            tagType: "brand",
          },
          {
            id: 136,
            name: "78",
            description: null,
            parentId: 6,
            sort: 134,
            tagType: "brand",
          },
        ],
      },
    ],
  },
  {
    id: 21,
    name: "测试类目2",
    description: null,
    parentId: 2,
    sort: 19,
    tagType: "category",
    configTagList: [
      {
        id: 22,
        name: "测试产品线1",
        description: null,
        parentId: 21,
        sort: 20,
        tagType: "product",
        configTagList: [
          {
            id: 23,
            name: "测试品牌1",
            description: null,
            parentId: 22,
            sort: 21,
            tagType: "brand",
            configTagList: [
              {
                id: 24,
                name: "测试型号1",
                description: null,
                parentId: 23,
                sort: 22,
                tagType: "model",
              },
            ],
          },
        ],
      },
    ],
  },
];
const generteDicTree = (
  arr,
  childKey = "configTagList",
  res = [],
  keys = ["name", "parentId", "tagType"],
  values = keys.map(() => "")
) => {
  return arr.reduce((res, item) => {
    const curValue = values.map((v, index) =>
      v ? `${v}/${item[keys[index]]}` : item[keys[index]]
    );
    if (item[childKey]) {
      return generteDicTree(item[childKey], childKey, res, keys, curValue);
    } else {
      res.push(
        keys.reduce((pre, key, index) => {
          pre[key] = curValue[index];
          return pre;
        }, {})
      );
    }
    return res;
  }, res);
};
// RegExp.prototype.test;
console.log(generteDicTree(c));
// 3(x)2(yz2(az2(x)))1(x) 输出：xxxyzazazyzazazx
const getStr = (str, index = 0) => {
  const l = str.length;
  let res = "";
  let v = "";
  for (let i = index; i < l; i++) {
    if (str[i] === "(") {
      const [nextValue, nextIndex] = getStr(str, i + 1);
      const multi = Number(v) || 1;
      res += `${nextValue.repeat(multi)}`;
      i = nextIndex;
      v = "";
    } else if (str[i] === ")") {
      return [res, i];
    } else if (/\d/.test(str[i])) {
      v += str[i];
    } else {
      res += str[i];
    }
  }
  return res;
};
console.log(getStr("3(x)2(yz2(az2(x)))1(x)"));
