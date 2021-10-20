var UndergroundSystem = function () {
  this.map = new Map();
  this.url = new Map();
};

/**

* @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  if (!this.url.has(id)) {
    this.url.set(id, []);
  }
  this.map.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const [name, startTime] = this.map.get(id);
  this.url.get(id).push([name, stationName, t - startTime]);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let sum = 0,
    c = 0;
  for (const list of this.url.values()) {
    for (const [start, end, t] of list) {
      if (start === startStation && end === endStation) {
        c++;
        sum += t;
      }
    }
  }
  return sum / c;
};
