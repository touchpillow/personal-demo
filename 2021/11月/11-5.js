var countTriplets = function (arr) {
  const l = arr.length;
  const left = new Array(l);
  const right = new Array(l);
  for (let i = 0; i < l; i++) {
    left[i] = (left[i - 1] || 0) ^ arr[i];
    right[l - 1 - i] = (right[l - i] || 0) ^ arr[l - 1 - i];
  }
  let c = 0;

  for (let i = 0; i < l - 1; i++) {
    const mapLeft = new Map();
    const mapRight = new Map();
    let left = 0;
    let right = 0;
    for (let j = i; j >= 0; j--) {
      left = left ^ arr[j];
      mapLeft.set(left, (mapLeft.get(left) || 0) + 1);
    }
    for (let j = i + 1; j < l; j++) {
      right = right ^ arr[j];
      mapRight.set(right, (mapRight.get(right) || 0) + 1);
    }
    console.log(i, mapLeft, mapRight);
    for (const n of mapLeft.keys()) {
      c += mapLeft.get(n) * (mapRight.get(n) || 0);
    }
  }

  return c;
};

console.log(countTriplets([2, 3, 1, 6, 7]));
