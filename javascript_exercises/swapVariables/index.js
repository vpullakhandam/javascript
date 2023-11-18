let a = prompt("enter the first number");
let b = prompt("enter the second number");
function swapVar(first, second) {
  let c = a;
  a = b;
  b = c;
  return a + " " + b;
}
console.log(swapVar(a, b));
