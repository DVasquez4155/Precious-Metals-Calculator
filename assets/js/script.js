// //Example of how this API can be used
// var worldTrade = new getResponse(
//   "http://metals-api.com/api/latest?access_key=km649dqf4vjyvakzc59zanvo88f05pya0u58ksl56b9ljaobo9whf3flwh8yl6m0",
//   "",
//   ""
// );
// // var cat = new getResponse("https://aws.random.cat/meow", "", "")
// // weather.done(
// //     function (response){
// //         console.log(response)
// //     }
// // )
// // cat.done(
// //     function (response){
// //         console.log(response)
// //     }
// // )
// worldTrade.done(function(response) {
//   console.log(response);
// });

// //Response
// function getResponse(url, apiKey, query) {
//   this.url = url;
//   this.apiKey = apiKey;
//   this.query = query;

//   this.queryURL = function() {
//     return this.url + this.apiKey + this.query;
//   };
//   var ajax = $.ajax({
//     url: this.queryURL(),
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
//   return ajax;
// }

//

var queryURL =
  "https://metals-api.com/api/latest?access_key=km649dqf4vjyvakzc59zanvo88f05pya0u58ksl56b9ljaobo9whf3flwh8yl6m0";
//"&base=USD"+
//  "&symbols=XAU,XAG";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
