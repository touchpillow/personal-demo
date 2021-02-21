// var decodeAtIndex = function (S, K) {
//   let l = 0;
//   let c = S.length;
//   for (let i = 0; i < c; i++) {
//     if (S[i].charCodeAt() > 90) {
//       l++;
//     } else {
//       l *= Number(S[i]);
//     }
//     if (l >= K) {
//       S = S.slice(0, i + 1);
//       break;
//     }
//   }
//   for (let i = S.length - 1; i >= 0; i--) {
//     K = K % l;
//     if (!K && S[i].charCodeAt() > 90) return S[i];
//     if (S[i].charCodeAt() < 90) {
//       l /= Number(S[i]);
//     } else {
//       l--;
//     }
//   }
// };
// const S =
//     "jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt",
//   K = 731963130;
// console.log(decodeAtIndex(S, K));
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let c = 0;
  const l = people.length;
  let right = l - 1,
    left = 0;
  while (right >= left) {
    if (right === left) {
      right--;
      c++;
      continue;
    }
    if (people[right] + people[left] <= limit) {
      left++;
    }
    right--;
    c++;
  }
  return c;
};
