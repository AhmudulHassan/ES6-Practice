const first=2;
const second="2";

if(first===second){
    console.log("condition is true");
}
else{
    console.log("false");
}

numbers=[2,5,6,8]
function square(element){
    return element*element;
}
console.log(square);

numbers.map(function(element,index,array){
    console.log(element*element,index);
})

// numbers.map()

const resul1=numbers.map(x=>x*x);
console.log(resul1);
