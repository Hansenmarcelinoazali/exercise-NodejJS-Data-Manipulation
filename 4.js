const data = require("./data.json")
// console.log (data)
// //menemukan orang tanpa nomor telepon
// const nomorTelepon = () => {
//     return data.filter((user) => user.profile.phones.length === 0);
//   };
//   nomorTelepon()

// console.log(nomorTelepon())


//menemukan orang yang mempunyai artikel
const artikel = () => {
    // let al = user
    return data.filter((user) =>user.articles.length !== 0);
  };

  console.log(artikel())

//cari user yang namanya annis
// const namaAnnis = (name) => {
//     const regex = new RegExp(name, "gi");
//     return data.filter((user) => user.profile.full_name.match(regex));
//   };

//   console.log(namaAnnis('ANNIS'))
// ============================================================================
// // // // yang ulangtahun pada tahun 1986
// const userUlangtahun = (tahun) => {
//   return data.filter(
//     (user) => new Date(user.profile.birthday).getFullYear() === tahun
//   );
// };
// console.log(userUlangtahun(1986))

// =================================================================================
// yang mempunyai artikel pada tahun 2020

// const artikelTahun2020 = (tahun) => {
//   return data.filter((user) => {
//     const articles = user.articles.filter(
//       (article) => new Date(article.published_at).getFullYear() === tahun
//     );
//     return ['Articles'].length !== 0;
//   });
// };

// console.log(artikelTahun2020(2020))

// ==============================================================================
//judul artikel pada user
// const judulArtieluser = (title) => {
//   const regex = new RegExp(title, "gi");
//   return data
//     .map((user) => user.articles)
//     .flat()
//     .filter((article) => article.title.match(regex));
// };

// console.log(judulArtieluser('tips'))

//=====================================================================================
// artikel pada tahun 2019 sebelum agustus

// const artiekltahun2019= () => {
//   return data
//   .map((user) => user.articles)
//   .flat().filter(article => new Date(article.published_at) < new Date(2019, 8))
// }

// console.log(artiekltahun2019())
