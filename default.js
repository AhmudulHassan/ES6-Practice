function add(num1,num2){
    return num1+num2;
}
const total=add(15,17)
console.log(total);

function addNew(num1,num2){
    num2=num2|| 0;
    return num1+num2;
    // if(num2==undefined){
    //     num2=0;
    // }
    return num1+num2
}

const totalNew=addNew(15);
console.log(totalNew);

const firstname='Justin';
const lastName='trudue';

// const fullName=firstname+" "+lastName;
const fullName=`${firstname} ${20+50} is a good boy`;
const multiLine=`hello dear 
I miss you`;
console.log(multiLine);

const doubleIt=num => num*2;
const multiplier=doubleIt(5);
console.log("🚀 ~ multiplier:",multiplier)

// const result=addOneLine(50,70);
// console.log(result);

const emon=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}
const emonResult=emon(10,2)
console.log(emonResult);


