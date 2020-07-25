class Chain {
  constructor() {
    this.chainList = [];
  }
  addNode(node) {
    this.chainList.push(node);
  }
  handleRequest(...rest) {
    this.chainList
      .map(item => {
        return rest => {
          const res = item.doRequset(...rest);
          if (res) {
            return Promise.reject({
              type: "done",
              node: item
            });
          } else {
            return rest;
          }
        };
      })
      .reduce((res, item) => {
        return res.then(item);
      }, Promise.resolve(rest))
      .catch(res => {
        console.log(res, "res");
      });
  }
  passONrequest(...rest) {
    this.handleRequest(...rest);
  }
}
class Node {
  constructor(num) {
    this.num = num;
  }
  doRequset(num) {
    if (this.num >= num) {
      console.log(this.num, num, true);
      return true;
    } else {
      console.log(this.num, num, false);
      return false;
    }
  }
}
