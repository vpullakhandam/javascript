let obj = {};
obj.name = prompt("enter a name: ");
obj.age = parseInt(prompt("enter an age in numbers: "));
obj.height = parseInt(prompt("enter height: "));
obj.country = prompt("enter your country: ");
obj.designation = prompt("enter your designation: ");
function stringProp(curObj) {
  for (let key in curObj) {
    if (typeof curObj[key] === "number") {
      console.log(key, ":", curObj[key]);
    }
  }
}
stringProp(obj);
