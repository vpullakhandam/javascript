let width = prompt("enter the width");
let height = prompt("enter the height");
function isLandscape(w, h) {
  return parseInt(w) > parseInt(h);
}
console.log(isLandscape(width, height));
// prompt returns a string value and should be converted to 
// a numerical value before use.