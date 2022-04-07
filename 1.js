

const databelanja = require("./1.json")

//soal nomor 1
const arr1 =databelanja.filter(d => d.created_at.match ("2018-02"));
console.log('arr1',arr1)


//soal nomor 2

  const totalBelanjaari = databelanja
    .filter(belanja => belanja.customer.name === 'Ari') 
    .map(belanja => { 
      return belanja.items
        .map(item => item.qty * item.price) 
        .reduce((a, b) => a + b, 0) 
    })
    .reduce((a, b) => a + b, 0)
console.log(totalBelanjaari)

//soal nomor 3
const orang300k = databelanja
  .map(belanja => {
    return {
      name: belanja.customer.name, 
      total: belanja.items
        .map(item => item.qty * item.price) 
        .reduce((a, b) => a + b, 0) 
    }
  })
  .filter(belanja => belanja.total < 300000) 
  .map(belanja => belanja.name) 
console.log((orang300k))


