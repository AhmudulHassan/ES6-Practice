const product='Seven Rings Gold'
console.log("🚀 ~ product:", product)

const numbers=[12,15,35];

numbers[1]=22;
console.log("🚀 ~ numbers:", numbers)
numbers.push(12)
console.log("🚀 ~ numbers:", numbers)

var student={name:'Safi',roll:45}

console.log("🚀 ~ student:", student)


//some basic about object

const myHonda={
    color:'Red',
    wheels:4,
    engine:{cylindar:4,size:2.2},
}
console.log("🚀 ~ myHonda:", myHonda)

// Using a constructor function
function car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}

const myCar=new car("Eagle","Talon TSI",2022);
const kenscar = new car("Nissan", "300ZX", 1992);
const vpgscar = new car("Mazda", "Miata", 1990);

function person(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
}

const rand = new person("Rand McKinnon", 33, "M");
const ken = new person("Ken Jones", 39, "M");

function carNe(make,model,year,owner){
    this.make=make;
    this.model=model;
    this.year=year;
    this.owner=owner;
}

const car1 = new car("Eagle", "Talon TSi", 1993, rand);
const car2 = new car("Nissan", "300ZX", 1992, ken);
ownerName=car2.make;
console.log(ownerName);

// var sum=0;
// for(var i=0;i<10;i++){
//     sum=sum+i;
// }
// console.log(i);

let sum1=0;
for(let i=0;i<10;i++){
    sum1=sum1+i;
}

console.log(i);

