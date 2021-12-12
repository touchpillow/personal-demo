var ThroneInheritance = function (kingName) {
  this.map = new Map();
  this.king = kingName;
  this.status = new Map();
  this.status.set(kingName, true);
  this.map.set(kingName, []);
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
  this.map.get(parentName).push(childName);
  this.map.set(childName, []);
  this.status.set(childName, true);
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
  this.status.set(name, false);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function (
  start = this.king,
  res = []
) {
  const childs = this.map.get(start);
  if (this.status.get(start)) {
    res.push(start);
  }
  return childs.reduce((res, child) => {
    return this.getInheritanceOrder(child, res);
  }, res);
};
