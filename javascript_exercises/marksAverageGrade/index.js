let array = [];
for (let i = 0; i <= 5; i++) {
  array[i] = parseInt(prompt("enter a number: "));
}
function showGrade(arr) {
  let sum = 0;
  let avg = 0;
  for (let val of arr) {
    sum = sum + val;
  }
  avg = (sum / arr.length);
  if (avg < 70) {
    return "D";
  } else if (avg < 80) {
    return "C";
  } else if (avg < 90) {
    return "B";
  } else if (avg <= 100) {
    return "A";
  }
}
console.log("Grade:", " ", showGrade(array));
