var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
var tipArray = [];
var paidAmount = [];

function tipCalculator(bill) {
  return bill <= 50
    ? 0.2 * bill
    : bill > 50 && bill <= 200
    ? 0.15 * bill
    : 0.1 * bill; //the use of ternary operator 'chain if else'
}
console.log(tipCalculator(10));

tipArray.push(tipCalculator(bill1));
tipArray.push(tipCalculator(bill2));
tipArray.push(tipCalculator(bill3));
console.log("Calculated tip on each bill: " + tipArray);
paidAmount.push(bill1 + tipCalculator(bill1));
paidAmount.push(bill2 + tipCalculator(bill2));
paidAmount.push(bill3 + tipCalculator(bill3));
console.log("Total amount paid on each bill: " + paidAmount);
