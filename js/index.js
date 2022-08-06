// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span")
  let subtotalVal = price * quantity

  subtotal.innerText = subtotalVal


  console.log(price)
  console.log(quantity)
  console.log(subtotal)
  return subtotalVal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // comment -> const singleProduct = document.querySelector('.product');
  // comment -> updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName("product");
  let sum = 0;

  for (let product of products){
    sum += updateSubtotal(product)
  }

  const total = document.querySelector("#total-value span");

  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
