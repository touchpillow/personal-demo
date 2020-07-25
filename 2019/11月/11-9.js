/*
 * @Author: your name
 * @Date: 2019-11-09 17:25:11
 * @LastEditTime: 2019-11-09 18:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\2019\11月\11-9.js
 */
// function CodingMan(name) {
//   class MyClass {
//     constructor(name) {
//       this.name = name;
//       this.eventStack = [];
//       this.funType = {
//         insert: "unshift",
//         push: "push"
//       };
//       this.init();
//       Promise.resolve().then(() => {
//         this.doEvent();
//       });
//     }
//     init() {
//       this.addEvent("push", 0, `Hi! This is ${this.name}!`);
//     }
//     eat(food) {
//       this.addEvent("push", 0, `Eat ${food}`);
//       return this;
//     }
//     sleep(time) {
//       this.addEvent("push", time, `Wake up after ${time}`);
//       return this;
//     }
//     sleepFirst(time) {
//       this.addEvent("insert", time, `Wake up after ${time}`);
//       return this;
//     }
//     addEvent(type, time, msg) {
//       this.eventStack[this.funType[type]](this.createEvent(time, msg));
//     }
//     createEvent(time, msg) {
//       return () =>
//         new Promise(res => {
//           setTimeout(() => {
//             console.log(msg);
//             res();
//           }, time * 1e3);
//         });
//     }
//     doEvent() {
//       this.eventStack.reduce((val, item) => val.then(item), Promise.resolve());
//     }
//   }
//   return new MyClass(name);
// }
function CodingMan(name) {
  var obj = {
    name,
    fnArray: ["push", "unshift"],
    sleep(time) {
      this.addEv(0, time, `Wake up after ${time}`);
      return this;
    },
    eat(food) {
      this.addEv(0, 0, `Eat ${food}~`);
      return this;
    },
    sleepFirst(time) {
      this.addEv(1, time, `Wake up after ${time}`);
      return this;
    },
    addEv(type, time, msg) {
      this.eventArray[this.fnArray[type]](this.addEvent(time, msg));
    },
    addEvent(time, msg) {
      return () =>
        new Promise(res => {
          setTimeout(() => {
            console.log(msg);
            res();
          }, time * 1e3);
        });
    },
    doEvent() {
      this.eventArray.reduce((val, item) => val.then(item), Promise.resolve());
    },
    init() {
      this.addEv(0, 0, `Hi! This is ${this.name}!`);
    },
    eventArray: []
  };
  obj.init();
  Promise.resolve().then(() => {
    obj.doEvent();
  });
  return obj;
}
// CodingMan("Peter");
CodingMan("Peter")
  .sleep(3)
  .eat("dinner")
  .eat("supper");
