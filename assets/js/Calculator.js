$(document).ready(function() {
  $('input[name="sub"]').on("click", function() {
    figureThis();
  });
});

function formatCurrency(num) {
  num = num.toString().replace(/\$|\,/g, "");
  if (isNaN(num)) num = "0";
  sign = num == (num = Math.abs(num));
  num = Math.floor(num * 100 + 0.50000000001);
  cents = num % 100;
  num = Math.floor(num / 100).toString();
  if (cents < 10) cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num =
      num.substring(0, num.length - (4 * i + 3)) +
      "," +
      num.substring(num.length - (4 * i + 3));
  return (sign ? "" : "-") + "$" + num + "." + cents;
}
function figureThis() {
  var weight = Number(
    document.getElementById("weight").value.replace(/[^0-9.]/g, "")
  );
  var price = Number(
    document.getElementById("price").value.replace(/[^0-9.]/g, "")
  );
  document.getElementById("price").value = price;
  document.getElementById("weight").value = weight;
  if (price == "" || price == 0) {
    alert("Please enter a Price/Troy Oz to continue");
  } else {
    var selection = document.calculator.units;
    for (i = 0; i < selection.length; i++) {
      if (selection[i].checked == true) var units = Number(selection[i].value);
    }
    var selection = document.calculator.metal;
    for (i = 0; i < selection.length; i++) {
      if (selection[i].checked == true) var metal = Number(selection[i].value);
    }

    if (units == 1) troy = weight * 0.03215075;
    else if (units == 2) troy = weight * 14.583;
    else if (units == 3) troy = weight * 0.05;
    else if (units == 4) troy = weight;
    else if (units == 5) troy = weight * 0.9114375;

    //troyper=new Array(.375,.4167,.5833,.6250,.75,.90,1,.8,.925);
    troyper = new Array(
      0.375,
      0.415,
      0.5824,
      0.7488,
      0.9,
      1,
      0.8,
      0.925,
      0.999
    );
    weightofmetal = troy * troyper[metal];
    var thevalue = weightofmetal * price;
    document.getElementById("thevalue").innerHTML =
      formatCurrency(thevalue) + "*";
  }
}
