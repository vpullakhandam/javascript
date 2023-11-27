let limit = parseInt(prompt("enter a number: "));
function starPattern(lim) {
  for (let i = 0; i < lim; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}
starPattern(limit);
