async function fn1() {
  console.log(1);
  await fn3();
  console.log(2);
}
console.log(0);
// async function fn2() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(2);
//     }, 2000);
//   });
// }
function fn3() {
  console.log(3);
}
async function fn() {
  fn1();
  //   const [a, b] = await Promise.all([fn1(), fn2()]);
  //   console.log(a, b);
}
fn();
new Promise((res) => {
  console.log(111);
  res();
})
  .then((v) => {
    console.log(222);
  })
  .then(() => {
    console.log(333);
  });
