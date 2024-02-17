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

const bigger=numbers.filter(x =>x>5)
console.log(bigger);

const isThere=numbers.find(x=> x>5);
console.log(isThere);
 