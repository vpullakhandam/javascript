let a = prompt("enter the first number");
let b = prompt("enter the second number");
function findMax(first,second){
    if(first>second){
        return first;
    } 
    else if(first==second){
        return "same";
    }
    else {
        return second;
    }
}
console.log(findMax(a,b));