var corpFlightBookings = function (bookings, n) {
  const seats = new Array(n + 1).fill(0);
  for (const [from, to, number] of bookings) {
    seats[from] += number;
    if (to < n) {
      seats[to + 1] -= number;
    }
  }
  console.log(seats);
  for (let i = 1; i <= n; i++) {
    seats[i] = seats[i - 1] + seats[i];
  }
  return seats.slice(1);
};
const bookings = [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ],
  n = 5;
console.log(corpFlightBookings(bookings, n));
