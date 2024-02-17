const person ={name:"jk",age:17,job:"jnr exc", phone: 012856 }


const {age}=person;

console.log(age);

const friends=['imran','shihab','sarwar','simon'];
const [chotoFriends,nextfriends,...others]=friends;
console.log(chotoFriends);
console.log(others);

const complexObject={
    name:"riaz",
    info:{
        address:'kola bagan',
        leader:'Tiger'

    }
}

const{leader}=complexObject.info;
console.log(leader);