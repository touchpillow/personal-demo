// var Twitter = function () {
//   this.user = new Map();
//   this.index = 0;
// };

// /**
//  * Compose a new tweet.
//  * @param {number} userId
//  * @param {number} tweetId
//  * @return {void}
//  */
// Twitter.prototype.postTweet = function (userId, tweetId) {
//   this.index++;
//   const item = {
//     time: this.index,
//     id: tweetId,
//   };
//   if (!this.user.get(userId)) {
//     this.initUser(userId);
//   }
//   this.user.get(userId).tweet.push(item);
// };
// Twitter.prototype.initUser = function (userId) {
//   this.user.set(userId, {
//     follow: [],
//     tweet: [],
//   });
// };
// /**
//  * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
//  * @param {number} userId
//  * @return {number[]}
//  */
// Twitter.prototype.getNewsFeed = function (userId) {
//   if (!this.user.get(userId)) return [];
//   const userList = this.user.get(userId).follow.concat(userId);
//   return userList
//     .reduce((res, item) => {
//       res.push(...this.user.get(item).tweet);
//       return res;
//     }, [])
//     .sort((a, b) => a.time - b.time)
//     .slice(0, 10)
//     .map((i) => i.id);
// };

// /**
//  * Follower follows a followee. If the operation is invalid, it should be a no-op.
//  * @param {number} followerId
//  * @param {number} followeeId
//  * @return {void}
//  */
// Twitter.prototype.follow = function (followerId, followeeId) {
//   if (followeeId == followerId) return;
//   if (!this.user.get(followerId)) {
//     this.initUser(followerId);
//   }
//   if (!this.user.get(followeeId)) {
//     this.initUser(followeeId);
//   }
//   if (this.user.get(followerId).follow.includes(followeeId)) return;
//   this.user.get(followerId).follow.push(followeeId);
// };

// /**
//  * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
//  * @param {number} followerId
//  * @param {number} followeeId
//  * @return {void}
//  */
// Twitter.prototype.unfollow = function (followerId, followeeId) {
//   if (followeeId == followerId) return;
//   if (!this.user.get(followerId)) return;
//   if (!this.user.get(followeeId)) return;
//   const index = this.user
//     .get(followerId)
//     .follow.findIndex((i) => i == followeeId);
//   if (index < 0) return;
//   this.user.get(followerId).follow.splice(index, 1);
// };
// var minStartValue = function (nums) {
//   let min = 0;
//   let sum = 0;
//   for (const n of nums) {
//     sum += n;
//     min = sum < min ? sum : min;
//   }
//   return 1 - min;
// };
var reformat = function (s) {
  const n = [];
  const u = [];
  for (const v of s) {
    if (v.charCodeAt() < 90) {
      n.push(v);
    } else {
      u.push(v);
    }
  }
  if (Math.abs(n.length - u.length) > 1) return "";
  let l1, l2;
  if (n.length >= u.length) {
    l1 = n;
    l2 = u;
  } else {
    l1 = u;
    l2 = n;
  }
  const res = [];
  while (l1.length && l2.length) {
    res.push(l1.shift());
    res.push(l2.shift());
  }
  res.push(...l1, ...l2);
  return res.join("");
};
const s = "covid2019";
console.log(reformat(s));
