var liveRates = new JSON({
    url: "https://www.live-rates.com/rates",
    api: "?key=" + "bc6cdd4bb0",
    result: function (response) {
        $(response).each(function (data) {
            var price = formatCurrency(response[data].rate);
            var timeSince = moment(parseInt(response[data].timestamp)).calendar();
            if (response[data].currency == "GOLD") {
                goldText.html(price);
                goldTimeText.html(timeSince);
            } else if (response[data].currency == "SILVER") {
                silverText.html(price);
                silverTimeText.html(timeSince);
            } else if (response[data].currency == "PLATINUM") {
                platinumText.html(price);
                platinumTimeText.html(timeSince);
            } else if (response[data].currency == "PALLADIUM") {
                palladiumText.html(price);
                palladiumTimeText.html(timeSince);
            }
        });
    }
});

// var alphavantage = new JSON(
//         {
//             url : "https://finnhub.io/api/v1/forex/candle",
//             api : "?token=" + "bovg3ufrh5r90eafk9s0",
//             query : "&symbol=OANDA:XAU_USD&resolution=D" + "&from="  + moment().subtract(1, 'month').format('x').substring(0,10) + "&to="  + moment().format('x').substring(0,10),
//             cors : true,
//             result : function (response) {
//                 $(response).each(function(i){
//                     console.log(moment(parseInt(response.t[i] + "000")))
//                 })
//                 console.log(response)
//             }
//         }
//     )

// var alphavantage = new JSON(
//     {
//         url : "https://api.worldtradingdata.com/api/v1/forex",
//         api : "?api_token=" + "zDjkfomCS01jLBkzW2EFz5KT2Bod85ci3WoQMVWBhKnLUfeLkOWTmG0jKAwR",
//         query : "&base=USD",
//         cors : true,
//         result : function (response) {
//             console.log(response)
//         }
//     }
// )

// var alphavantage = new JSON(
//     {
//         url : "https://www.alphavantage.co/query?function=SYMBOL_SEARCH",
//         api : "&apikey=" + "VI73VEG5MXIDIMDZ",
//         query : "&keywords=gold",
//         cors : true,
//         result : function (response) {
//             console.log(response)
//         }
//     }
// )

// var intrinio = new JSON(
//     {
//         url : "https://api-v2.intrinio.com/securities/search",
//         api : "?api_key=" + "OmUwMzQ3YzEyYWQ1YWQ0OWIxN2NlMjYyZDM0ZTRkYWY3",
//         query : "&query=apple",
//         cors : true,
//         result : function (response) {
//             console.log(response)
//         }
//     }
// )

// var metalsApi = new JSON(
//     {
//         url : "http://metals-api.com/api/latest",
//         api : "?access_key=" + "6er5tg54g49w64i6e1lkp9ka7mpc5xwk1dv22v650i7022x2q47eih19pyfu64vw",
//         cors : true,
//         result : function (response) {
//             console.log(response)
//         }
//     }
// )