const fruit = require("./fruit.json")
// console.log(fruit)

// let fruitss = fruit.filter(function(i,n){
//     return n.category==='fruits';
// })

// console.log(fruitss)
// =======================================================
// var buah = JSON.parse(fruit).filter(function(entry){
//     return entry.category === 'fruits'
// })

// console.log(buah)
// // =================================================================

buah_c = fruit.filter(buah => buah.category === 'fruits');
console.log(buah_c)
