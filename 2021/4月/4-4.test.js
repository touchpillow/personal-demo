//1.
// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log("1");

// 2.

// console.log("1");
// new Promise((res) => {
//   console.log(2);
//   res("7");
// })
//   .then((v) => {
//     console.log(v);
//   })
//   .finally(() => {
//     console.log("6");
//   });
// console.log("5");

// 3.
// async function asyncHandle() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log(3);
//       res();
//     }, 1000);
//   });
// }
// async function fn() {
//   await asyncHandle();
//   setTimeout(() => {
//     console.log(1);
//   }, 0);
//   console.log(2);
// }
// fn();

// 4.
// console.log(1);
// Promise.resolve()
//   .then(() => {
//     console.log(2);
//   })
//   .finally(() => {
//     console.log(6);
//   });
// new Promise((res) => {
//   console.log(3);
//   res();
// })
//   .then(() => {
//     console.log(4);
//   })
//   .then(() => {
//     console.log(5);
//   });

// 5.
// async function fun() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log(2);
//       res();
//     }, 0);
//   });
// }
// async function fn() {
//   setTimeout(() => {
//     console.log(1);
//   }, 0);
//   await fun();
//   console.log(3);
// }
// fn();

// 6.
// Promise.resolve()
//   .then(() => {
//     return Promise.resolve(1);
//   })
//   .then((v) => {
//     console.log(v);
//   });
// Promise.resolve()
//   .then(() => {
//     return 2;
//   })
//   .then((v) => {
//     console.log(v);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(4);
//   });
// Promise.resolve()
//   .then(() => {
//     console.log(10);
//   })
//   .then(() => {
//     console.log(11);
//   });

// 7.
console.log(1);
Promise.resolve()
  .then(() => {
    return Promise.resolve().then(() => {
      console.log(2);
    });
  })
  .then(() => {
    console.log(7);
  });
Promise.resolve()
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

// 8.
// async function asyncHandle() {
//   new Promise((res) => {
//     console.log(3);
//     res();
//   });
// }
// async function fn() {
//   await asyncHandle();
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 0);
// }
// fn();
