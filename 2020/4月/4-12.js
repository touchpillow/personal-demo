class Person {
  constructor(name) {
    this.name = name;
    this.id = Math.random();
    this.money = {};
  }
  updateMoney(type, count, handle) {
    const flag = handle.addMoney(this.id, type, count);
    if (flag) {
      this.money[type] = count;
    }
  }
}
class MoneyHandle {
  constructor() {
    this.money = {};
    this.limit = {};
  }
  updateLimit(type, count) {
    this.limit[type] = count;
  }
  addMoney(id, type, count) {
    if (sum)
      if (!this.money) {
        this.money[type] = [
          {
            id,
            count
          }
        ];
      }
    const item = this.money[type].find(item => item.id === id);
    let sum;
    if (!item) {
      sum = this.getSunCount(type);
      if (sum + count > this.limit[type]) {
        console.log(`${type}类型报销项费用已超标，此次操作无效`);
        return false;
      }
      this.money[type].push({
        id,
        count
      });
    } else {
      sum = this.getSunCount(type);
      if (sum + count - item.count > this.limit[type]) {
        console.log(`${type}类型报销项费用已超标，此次操作无效`);
        return false;
      }
      item.count = count;
      return true;
    }
  }
  getSunCount(type) {
    if (!this.money[type]) return 0;
    this.money[type].reduce((sum, item) => {
      sum += item.count;
      return sum;
    }, 0);
  }
}
class Department {
  constructor() {
    this.person = [];
    this.money = {};
  }
  updateMoney(type, count) {
    this.money[type] = count;
  }
}
