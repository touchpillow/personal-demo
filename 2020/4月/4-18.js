//这是一个装饰者 按照AOP的原则为功能动态注入一个前置函数
const before = function(fn, beforeFn) {
  return function(...arg) {
    beforeFn.apply(this, arg);
    return fn.apply(this, arg);
  };
};
//这是一个装饰者 按照AOP的原则为功能动态注入一个后置函数
const after = function(fn, afterFn) {
  return function(...arg) {
    Promise.resolve().then(() => {
      afterFn.apply(this, arg);
    });
    return fn.apply(this, arg);
  };
};

const httpApi = function(params) {
  return http({
    url: params.url,
    type: params.type,
    params: params.params
  });
};
//实际项目中http是封装好的http模块
const http = function(params) {
  return Promise.resolve().then(() => {
    console.log(params);
    return "success";
  });
};
const addToken = function(params) {
  //这里的getToken表示获取token的方式
  params.params.token = getToken();
};
function getToken() {
  return "ccc";
}
const httpApiWithToken = before(httpApi, addToken);
async function fn() {
  const res = await httpApiWithToken({
    url: "/aaa",
    type: "post",
    params: { a: "a" }
  });
  console.log(res);
}
fn();
// { url: '/aaa', type: 'post', params: { a: 'a', token: 'ccc' } }
// success
