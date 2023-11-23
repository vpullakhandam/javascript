let inp = parseInt(prompt("enter a speed:"));
let points = 0;
function sLimit(inpt) {
  if (inpt <= 70) {
    return "Good Safe Driving";
  } else {
    points = (inpt - 70) / 5;
    if (points <= 10) {
      return "Speed Limit Crossed by Penalty Point " + points;
    } else {
      return "License Suspended";
    }
  }
}
console.log(sLimit(inp));
