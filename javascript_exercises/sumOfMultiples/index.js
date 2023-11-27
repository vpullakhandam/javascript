let sumTotal = 0;
const limit = parseInt(prompt("enter number: "));
function sumOfMultiples(lim) {
  for (let i = 0; i <= lim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sumTotal = sumTotal + i;
    }
  }
  return sumTotal;
}
console.log(sumOfMultiples(limit));
