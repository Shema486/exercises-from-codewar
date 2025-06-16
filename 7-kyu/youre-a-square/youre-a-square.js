function isSquare(n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
}
// function isSquare(n) {
//   return n >= 0 && Number.isInteger(Math.sqrt(n));
// }