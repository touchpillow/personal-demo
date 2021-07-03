const debounce = (fun, delay = 200) => {
  let timer = -1;
  return function (...arg) {
    if (timer > 0) {
      clearTimeout(timer);
    }
    const that = this;
    timer = setTimeout(() => {
      fun.apply(that, arg);
      timer = -1;
    }, delay);
  };
};
const throttle = (fun, delay = 200) => {
  let pre;
  return function (...arg) {
    const that = this;
    const cur = new Date().getTime();

    if (!pre || (pre && cur - pre >= delay)) {
      pre = cur;
      fun.apply(that, arg);
    }
  };
};
