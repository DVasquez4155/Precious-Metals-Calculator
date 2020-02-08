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

// var queryURL =
//   "http://metals-api.com/api/latest?access_key=km649dqf4vjyvakzc59zanvo88f05pya0u58ksl56b9ljaobo9whf3flwh8yl6m0";
// //"&base=USD"+
// //  "&symbols=XAU,XAG";
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

// var queryURL =

// http://metals-api.com/api/latest?access_key=km649dqf4vjyvakzc59zanvo88f05pya0u58ksl56b9ljaobo9whf3flwh8yl6m0

// set endpoint and your access key
endpoint = "latest";
access_key = "km649dqf4vjyvakzc59zanvo88f05pya0u58ksl56b9ljaobo9whf3flwh8yl6m0";

// get the most recent exchange rates via the "latest" endpoint:
$.ajax({
  url: "http://metals-api.com/api/" + endpoint + "?access_key=" + access_key,
  dataType: "jsonp",
  success: function(json) {
    // exchange rata data is stored in json.rates
    alert(json.rates.GBP);

    // base currency is stored in json.base
    alert(json.base);

    // timestamp can be accessed in json.timestamp
    alert(json.timestamp);
  }
});
