/*
 * @Author: your name
 * @Date: 2021-10-09 13:01:50
 * @LastEditTime: 2021-10-09 13:04:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /demo/personal-demo/2021/10月/10-9.js
 */
var numTimesAllBlue = function (light) {
  const n = light.length;
  let max = 0;
  let c = 0;
  let res = 0;
  for (const v of light) {
    c++;
    max = Math.max(max, v);
    if (c === max) {
      res++;
    }
  }
  return res;
};
