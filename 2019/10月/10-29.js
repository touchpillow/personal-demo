/*
 * @Author: your name
 * @Date: 2019-10-29 22:03:52
 * @LastEditTime: 2019-10-29 22:11:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\2019\10月\10-29.js
 */
function fn(str, obj, keyLeft = "{{", keyRight = "}}") {
  const reg = new RegExp(`${keyLeft}(.+?)${keyRight}`, "g");
  return str.replace(reg, (a, b) => {
    return obj[b];
  });
}
const tpl = "{{company}}{{job}}招聘";
const data = { company: "火树", job: "前端" };
console.log(fn(tpl, data));
