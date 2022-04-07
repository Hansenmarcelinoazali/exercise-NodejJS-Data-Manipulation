
const users = require("./use.json")
// console.log(users);



const data = JSON.parse(users);
const changedData = data.map(item => ({ fullname: `${item.result.first} ${item.result.last}`}));


// yang laki-laki

// const arr = users.results.filter(d => d.gender === "male" )
// console.log("arr",arr);

//menggabungkan nama depan dan nama belakang
// const names = users.results.map(person => {
//   person.fullName = {fullName: `${person.name.title +"."} ${person.name.first} ${person.name.last}`} 
//   return person    
// } 
//     )
    
//   console.log(names);

//========================================================================================

