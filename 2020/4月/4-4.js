// const list = [1, 2, 3];
// for (let i = 0; i < list.length; i++) {
//   const item = list[i];
//... do something
// }
// const list = [1, 2, 3];
// for (const item of list) {
//   //do something
//   if (item >= 2) {
//     break;
//   }
// }
// const list = [1, 2, 3];
// list.forEach(item => {
//   //do something
// });
// const list = [1, 2, 3];
// const newList = list((item, index) => item * index);
// //newList的结果为[1,2,6]
// const list = [1, 2, 3];
// const newList = list.filter((item, index) => item * index >= 4);
// //newList的结果为[3]
// const res = list.reduce((res, item) => {
//   res[item.id] = item;
//   return res;
// }, {});
//res的结果是
//   {
//    '1': { id: 1, label: '万里归来颜愈少' },
//    '2': { id: 2, label: '笑时犹带岭梅香' },
//    '3': { id: 3, label: '试问岭南应不好' },
//    '4': { id: 4, label: '此心安处是吾乡' }
//    }
// const list = [
//   {
//     id: 1,
//     label: "万里归来颜愈少"
//   },
//   {
//     id: 2,
//     label: "笑时犹带岭梅香"
//   },
//   {
//     id: 3,
//     label: "试问岭南应不好"
//   },
//   {
//     id: 4,
//     label: "此心安处是吾乡"
//   }
// ];
// const item = list.find(item => item.id === 2);
// const index = list.findIndex(item => item.id === 2);
// // item={id: 2,label: "笑时犹带岭梅香"}
// // index=1
// const list = [1, 2, 3];
// const res = list.some(item => item >= 2);
// res = true
// const list = [1, 2, 3];
// const res = list.every(item => item >= 2);
// res = false;
class Common {
  constructor() {
    this.menmbers = [];
  }
  addMembers(menmber) {
    this.menmbers.push(menmber);
  }
  stipends(money) {
    this.menmbers.forEach(item => {
      item.stipends(money);
    });
  }
}
class Company extends Common {
  constructor(name) {
    super();
    this.companyName = name;
  }
}
class subsidiary extends Common {
  constructor(name) {
    super();
    this.subsidiaryName = name;
  }
}
class Department extends Common {
  constructor(name) {
    super();
    this.departmentName = name;
  }
}
class Person {
  constructor() {
    this.money = 0;
  }
  stipends(money) {
    this.money += money;
  }
}
const a = new Company("first");
console.log(a);
