const inventory = require("./inventory.json")
// console.log(inventory)

//soal nomor 1

// function temukanBarangmeetingRoom(type) {
//     return inventory.filter((item) => item.placement.name === type);
//   }
//   console.log(temukanBarangmeetingRoom("Meeting Room"));
//==================================================================================
//soal nomor 2
// const electronicDevices = inventory.filter(function (item) {
//   return item.type === "electronic";
// });
// console.log(electronicDevices);
//===============================================================================
//soal nomor 3
// const furniture = inventory.filter(function (item) {
//   return item.type === "furniture";
// });
// console.log(furniture);
//===========================================================================
//soal nomor 4
// const pembelian = inventory.filter((time) => {
// 	return time.purchased_at === 1579190642 || 1579190471;
// });
// console.log(pembelian);
//======================================================================
// const date = inventory.filter(function(n){
//     let x = n.purchased_at*1000.date()===date
//     return x
// })
// console.log(date)

//==========================================================================
// const tanggalJson =(date) => {
//   const data = inventory;
//   date = new Date(date).toLocaleDateString();

//   const x = data
//   .filter(
//     (z) => new Date(z.purchased_at * 1000).toLocaleDateString() ===date
//   )
//   .map((z)=>z.name);
//   return x;

// };
// console.log(tanggalJson("2020-01-16"));

//soal nomor 5
// const brownColor = inventory.filter(function (item) {
//   let brown = item.tags.includes("brown");
//   return brown;
// });
// console.log(brownColor);

const tanggalJson =(date) => {
  date = new Date(date).toLocaleDateString();
  const x = inventory
  .filter(
    (z) => new Date(z.purchased_at * 1000).toLocaleDateString() ===date).map((z)=>z.name);
  return x;

};
console.log(tanggalJson("2020-01-16"));