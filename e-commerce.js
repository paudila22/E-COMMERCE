var productTotalAmt = document.getElementById("product-total-amt"); //shipping_charge
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amt = document.getElementById("total_cart_amt");

function checkOut() {
  alert("Hey Your Total Amout is $" + total_cart_amt.innerHTML);
}

const decreaseNumber = (event) => {
  const productId = event.target.dataset.itemId;
  var itemval = document.getElementById(`textbox-${productId}`);
  var itemprice = document.getElementById(productId);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative Not Allowed");
  } else {
    itemval.value = itemval.value - 1;
    productTotalAmt.innerHTML = productTotalAmt.innerHTML - 499;

    total_cart_amt.innerHTML =
      productTotalAmt.innerHTML - shipping_charge.innerHTML;

    itemval.style.backgroundColor = "white";
    itemval.style.color = "black";
  }
};

const increaseNumber = (event) => {
  const productId = event.target.dataset.itemId;
  var itemval = document.getElementById(`textbox-${productId}`);
  var itemprice = document.getElementById(productId);

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Max 5 items are allowed");
    itemval.style.backgroundColor = "red";
    itemval.style.color = "white";
  } else {
    console.log(itemval.value);
    itemval.value = Number(itemval.value) + 1;
    productTotalAmt.innerHTML = Number(productTotalAmt.innerHTML) + 499;

    total_cart_amt.innerHTML =
      Number(productTotalAmt.innerHTML) + Number(shipping_charge.innerHTML);
  }
};

const decreaseButtons = document.getElementsByClassName("decreaseNumber");
[...decreaseButtons].map((button) => {
  button.addEventListener("click", (event) => decreaseNumber(event));
});

const increaseButtons = document.getElementsByClassName(
  "increaseNumberButtons"
);
[...increaseButtons].map((button) => {
  button.addEventListener("click", (event) => increaseNumber(event));
});

// obtener el boton que van a realizar el checkout del carrito de compras final
const botoncheckOut = document.getElementById("checkOut");
botoncheckOut.addEventListener("click", checkOut);