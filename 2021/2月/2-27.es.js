// const a = {
//   valueOf() {
//     return false;
//   },
//   toString() {
//     return false;
//   },
// };
// if (a) {
//   console.log(1234);
// }
// const s = "123asdsa451";
// console.log(s.replace("1", "--")); //--23asdsa451
// console.log(s.replace(/\d/g, "@")); //@@@asdsa@@@
// console.log(s.replaceAll("1", "@")); //@23asdsa45@
// console.log(s.replaceAll(/1/g, "--")); //@23asdsa45@
// console.log(s.replaceAll(/\d/g, "@")); //Uncaught TypeError: String.prototype.replaceAll called with a non-global RegExp
// const p1 = new Promise((res, rej) => {
//   return Promise.resolve().then(() => res(1));
// });
// const p2 = new Promise((res, rej) => rej(2));
// Promise.race([p1, p2]).then(
//   (a) => {
//     console.log(a);
//   },
//   (b) => {
//     console.log(b);
//   }
// ); //2
// Promise.any([p1, p2]).then(
//   (a) => {
//     console.log(a);
//   },
//   (b) => {
//     console.log(b);
//   }
// ); //1
// let a = 0;
// let b = null;
// let c = 1;

// a ??= 1; //a:0
// a ||= 1; //a:1
// b ??= 1; //b:1
// b ||= 2; //b:2
// a &&= 1; //a:0
// c &&= 2; //c:2
// const a = {};

// const obj = new WeakRef(a);

// const fina = new FinalizationRegistry((v) => {
//   console.log(v);
// });

// fina.register(a, "a被回收了");

// fina.obj.deref(); //a
// console.log(a);
// obj.deref(); //undefined 如果a被回收了
const a = 123_3445;
a === 1233445; //true
const b = _123_342; //Uncaught ReferenceError: _123_342 is not defined
const c = 333_344_; //Uncaught SyntaxError: Numeric separators are not allowed at the end of numeric literals
