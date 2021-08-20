var CombinationIterator = function (characters, combinationLength) {
  this.chrats = new Array(combinationLength);
  for (let i = 0; i < combinationLength; i++) {
    this.chrats[i] = i;
  }
  this.dic = characters;
  this.init = false;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  if (!this.init) {
    this.init = true;
    return this.dic.slice(0, this.chrats.length);
  }
  for (let i = 0; i < this.chrats.length; i++) {
    const preIndex = this.chrats.length - 1 - i;
    let curIndex = this.chrats[preIndex];
    if (curIndex < this.dic.length - 1 - i) {
      for (let j = preIndex; j < this.chrats.length; j++) {
        this.chrats[j] = curIndex + 1 + j - preIndex;
      }
      return this.chrats.map((i) => this.dic[i]).join("");
    }
  }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return !this.init || this.chrats[0] !== this.dic.length - this.chrats.length;
};
