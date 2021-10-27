var findMinFibonacciNumbers = function (k) {
  const stack = [1];
  let c = 1;
  while (c <= k) {
    let pre = stack[stack.length - 1];
    stack.push(c);
    c += pre;
  }
  let res = 0,
    index = stack.length - 1;
  while (k) {
    while (stack[index] > k) {
      index--;
    }
    res++;
    k -= stack[index];
  }
  return res;
};
console.log(findMinFibonacciNumbers(19));
