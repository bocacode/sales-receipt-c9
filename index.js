// Create a sales receipt summary given subtotal and taxRate

function calculateSalesTax(subtotal, taxRate) {
  const taxTotal = subtotal * taxRate;
  return taxTotal;
}

const TAX_RATE = 0.07; // For Palm Beach County, FL, US
const customerSubtotal = 17.25;

// calculate all the stuffs:
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE);
const roundedTaxTotal = Math.round(customerTaxTotal * 100) / 100;
const customerTotal = customerSubtotal + customerTaxTotal;
const roundedTotal = Math.round(customerTotal * 100) / 100;

// output all the stuffs:
console.log(`Subtotal       $${customerSubtotal}`);
console.log(`Tax            $ ${roundedTaxTotal}`);
console.log('----------------------');
console.log(`TOTAL          $${roundedTotal}`);
