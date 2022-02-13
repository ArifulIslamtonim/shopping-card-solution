function updateProductNumber (product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumberCount = productInput.value;
    if (isIncreasing == true) {
        productNumberCount = parseInt (productNumberCount) + 1;
    }
    else if (productNumberCount > 0) {
        productNumberCount = parseInt(productNumberCount) - 1;
    }
     productInput.value = productNumberCount;

    //update total
     const productTotal = document.getElementById(product + '-total');
     productTotal.innerText = productNumberCount * price;
     
    //calculate total
    calculate();
};
function getInputValue (product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculate() {
    const phoneTotal = getInputValue ('phone') * 1219;
    const caseTotal = getInputValue ('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10 ;
    const totalPrice = subTotal + tax;
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText = totalPrice;
};
//phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

//handle cse increase decrease event
document.getElementById('case-plus').addEventListener('click', function()
 {
   updateProductNumber ('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
   updateProductNumber ('case', 59, false);
});