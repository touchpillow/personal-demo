class Person {
  constructor(male, nameList) {
    this.male = male;
    this.nameList = nameList;
  }
  playGame() {
    if (this.male === "female") return;
    //...
  }
  playBasketball() {
    if (this.male === "female") return;
    //...
  }
  windowShop() {
    if (this.male === "male") return;
    //...
  }
  dressing() {
    if (this.male === "male") return;
    //...
  }
}
