// var longestArithSeqLength = function (A) {
//   const l = A.length;
//   const dp = new Array(l).fill("").map(() => ({}));
//   let max = 0;
//   for (let i = 1; i < l; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       const dis = A[i] - A[j];
//       dp[i][dis] = Math.max(dp[i][dis] || 0, 1 + (dp[j][dis] || 0));
//       max = Math.max(max, dp[i][dis]);
//     }
//   }
//   return max + 1;
// };
// const a = [20, 1, 15, 3, 10, 5, 8];
// console.log(longestArithSeqLength(a));
// var maxAncestorDiff = function (root) {
//   let res = 0;
//   const dfs = (root, min, max) => {
//     if (!root) return 0;
//     res = Math.max(res, Math.abs(root.val - min), Math.abs(root.val - max));
//     min = Math.min(min, root.val);
//     max = Math.max(max, root.val);
//     dfs(root.left, min, max);
//     dfs(root.right, min, max);
//   };
//   dfs(root, root.val, root.val);
//   return res;
// };
// function Parent(age) {
//   this.age = age;
// }

// var p = new Parent(50);
// console.log(p.constructor === Parent); // true
// function Foo() {
//   this.value = 42;
// }
// Foo.prototype.method = function () {};

// function Bar() {}
// const a = new Foo();
// console.log(a.constructor === Foo);

// // 设置 Bar 的 prototype 属性为 Foo 的实例对象
// Bar.prototype = a;
// Bar.prototype.foo = "Hello World";
// console.log(Bar.prototype.constructor === Foo);
// function create() {
//   // 1、创建一个空的对象
//   var obj = new Object(),
//     // 2、获得构造函数，同时删除 arguments 中第一个参数
//     Con = [].shift.call(arguments);
//   // 3、链接到原型，obj 可以访问构造函数原型中的属性
//   Object.setPrototypeOf(obj, Con.prototype);
//   // 4、绑定 this 实现继承，obj 可以访问到构造函数中的属性

//   var ret = Con.apply(obj, arguments);
//   debugger;
//   // 5、优先返回构造函数返回的对象
//   return ret instanceof Object ? ret : obj;
// }
// function a() {
//   this.a = 1;
// }
// const obj = create(a);
// console.log(obj);
// function add(a) {
//   function sum(b) {
//     // 使用闭包
//     a = a + b; // 累加
//     return sum;
//   }
//   sum.toString = function () {
//     // 重写toString()方法
//     return a;
//   };
//   return sum; // 返回一个函数
// }

// console.log(add(1)); // 1
// console.log(add(1)(2)); // 3
// console.log(add(1)(2)(3)); // 6
// console.log(add(1)(2)(3)(4)); // 10
// function SuperType() {
//   this.property = true;
// }

// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };

// function SubType() {
//   this.subproperty = false;
// }

// // 这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype
// SubType.prototype = new SuperType();

// // SubType.prototype.getSubValue = function () {
// //   return this.subproperty;
// // };

// var instance = new SubType();
// console.log(instance.getSuperValue()); // true
function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.getName = function () {
  return this.name;
};

// function Child() {
//   const a = {};
//   Object.setPrototypeOf(a, Parent.prototype);
//   Parent.apply(a, arguments);
//   a.__proto__.constructor = Child;
//   return a;
// }
function Child() {
  return Parent.apply(this, arguments);
}
Child.prototype = Parent.prototype;
Child.prototype.conctructor = Child;
const a = new Child("a", 123);
console.log(a.__prototype__ === Parent.prototype);
console.log(a);
console.log(a.getName());
