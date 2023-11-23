let input_parameter = parseInt(prompt("enter a number"));
function solFunc(in_p) {
  if (isNaN(in_p)) {
    return "Nan-Not a Number! Please Input Number";
  } else if (in_p % 3 == 0 && in_p % 5 == 0) {
    return "FizzBuzz";
  } else if (in_p % 3 == 0) {
    return "Fizz";
  } else if (in_p % 5 == 0) {
    return "Buzz";
  } else {
    return in_p;
  }
}
console.log(solFunc(input_parameter));
