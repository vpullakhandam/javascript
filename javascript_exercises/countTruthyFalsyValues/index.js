let arr=[];
for(let i=0;i<6;i++){
    arr[i]=prompt("enter a number: ");
}
let count=0;
function fun(array){
    for(let i=0;i<array.length;i++){
        if(isNaN(arr[i])==false){
            count++;
        }
    }
    return count;
}
console.log(fun(arr));