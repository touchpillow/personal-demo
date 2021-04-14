var a = 1;
function b() {
  const v = 1;
  const e = 1;
  return function a() {
    const f = 0;
    let h = 0;
    return function g() {
      const d = 1;
      return e + v + f;
    };
  };
}
var c = b()();
console.dir(c);
