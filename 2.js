const axios = require('axios');

async function makeGetRequest() {


  const res = await axios.get('https://jsonplaceholder.typicode.com/users')//.then(result=>resultRes=result.data);
  const pos= await axios.get("https://jsonplaceholder.typicode.com/posts")//.then(result=>resultPos=result.data)
  // let users = res.data;
  // console.log(res);
// console.log(pos)
// console.log(res)

  const result = pos.data.map((a) => {
    a.user = res.data.find((b) => b.id === a.userId);
    return a;
  });
  // let posts= pos.data;
  //   console.log(posts)
  console.log(result)

}
makeGetRequest();



// async function postRequest() {

//     pos= await axios.get("https://jsonplaceholder.typicode.com/posts");
  
//     let posts= pos.data;
//     console.log(posts)
//   }
  
//   postRequest();

// posts.forEach((post) => {
//   post.user = users.find((user) => user.id === post.userId);
// });
// console.log(posts);

// const result = pos.map((a) => {
//   a.user = res.find((user) => b.id === a.userId);
//   return a;
// });
const csv = require("csvtojson");
const request = require('request');
// Convert a csv file with csvtojson
csv().fromStream(request.get('https://fileas.csv))
  	.then(function(jsonArrayObj){
  		//when parse finished, result will be emitted here.
    	console.log(jsonArrayObj); 
 	})


const json2csvParser = new Parser();
const csv = json2csvParser.parse(result);

console.log(csv);