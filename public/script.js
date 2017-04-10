// array is created
var products = ["Jordan Retro 12 $140", "Jordan Retro 11 $160", "Jordan Retro 10 $160", "Jordan Retro 6 $140"];

var labels = document.getElementsByTagName("label");
//function for the array 
function processProducts() {
  for (var i=0; i < 4; i++) {
    labels[i].innerHTML=products[i];
  }
}
if (window.addEventListener){
  window.addEventListener("load",processProducts, false);
}
else if (window.attachEvent) {
  window.attachEvent("onload", processProducts);
}
// creates the sales tax for use in the checkboxes
function calcTotal() {
  var itemTotal = 0;
  var salesTaxRate = .06;
  var items = document.getElementsByTagName("input");
for(var i=0; i<4; i++) {
  if(items[i].checked) {
    itemTotal += (items[i].value * 1);
  }
}
  itemTotal *= 1+ salesTaxRate;
  document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2);
}

var submitButton = document.getElementById ("sButton");
if(submitButton.addEventListener) {
  submitButton.addEventListener("click", calcTotal, false);
}
else if (submitButton.attachEvent) {
  submitButton.attachEvent("onclick", calcTotal)
}
