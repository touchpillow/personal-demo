var largestRectangleArea = function (heights) {
  const l = heights.length;
  const left = new Array(l).fill(0);
  const right = new Array(l).fill(0);
  let stack = [];
  for (let i = 0; i < l; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  stack = [];
  for (let i = l - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    right[i] = stack.length ? stack[stack.length - 1] : l;
    stack.push(i);
  }
  let max = 0;
  for (let i = 0; i < l; i++) {
    max = Math.max(max, (right[i] - left[i] - 1) * heights[i]);
  }
  return max;
};
