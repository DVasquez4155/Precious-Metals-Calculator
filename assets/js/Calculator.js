$(document).ready(function() {
  $('input[name="sub"]').on("click", function() {
    figureThis();
  });
});

function figureThis() {
  var weight = Number(
    document.getElementById("weight").value.replace(/[^0-9.]/g, "")
  );
  document.getElementById("weight").value = weight;
  var selection = document.calculator.units;
  for (i = 0; i < selection.length; i++) {
    if (selection[i].checked == true) var units = Number(selection[i].value);
  }
  var selection = document.calculator.metal;
  for (i = 0; i < selection.length; i++) {
    if (selection[i].checked == true) var metal = Number(selection[i].value);
  }
  if (metal <= 5 && metal >= 0) {
    var price = 1568.51
  }
  else if (metal <= 8 && metal >=6) {
    // var price = parseFloat($('#silverText').html())
    var price = 17.55;
  }
  else if (metal == 9) {
    var price = 972.00;
  }
  else if (metal == 10) {
    var price = 2262.10;
  }
  if (units == 1) troy = weight * 0.03215075;
  else if (units == 2) troy = weight * 14.583;
  else if (units == 3) troy = weight * 0.05;
  else if (units == 4) troy = weight;
  else if (units == 5) troy = weight * 0.9114375;

  troyper = new Array(
    0.375,
    0.415,
    0.5824,
    0.7488,
    0.9,
    1,
    0.8,
    0.925,
    0.999,
    1,
    1
  );
  weightofmetal = troy * troyper[metal];
  var thevalue = weightofmetal * price;
  document.getElementById("thevalue").innerHTML =
      formatCurrency(thevalue) + "*";
}
