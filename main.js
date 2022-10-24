

// Questions.
let homeValue = Number(prompt("Please enter the value of the house you want to purchase."))
let downPayment = Number(prompt("Please enter the down payment amount you want to make."))
let loanTerm = Number(prompt("Enter '10', '15', '20' or '25' for the amount of years you want to get the loan for."))
let loanInterest = 0;


// Calculate loan amount.
function loanAmount() {
    return homeValue - downPayment;
    
}


// Calculate loan interest.
switch(loanTerm) {
    case 10:
        loanInterest = loanAmount() * .07;
        break;
    case 15:
        loanInterest = loanAmount() * .09;
        break;
    case 20:
        loanInterest = loanAmount() * .11;
        break;
    case 25:
        loanInterest = loanAmount() * .13;
        break;

}


// Calculate total loan amount, including interest.
function totalAmount() {
    return loanAmount() + loanInterest

}

//Calculate monthly payment
function monthlyPayment() {
    if (loanTerm == 10) {
            return totalAmount() / 120;
        } else if (loanTerm == 15) {
            return totalAmount() / 180;
        } else if (loanTerm == 20) {
            return totalAmount() / 240;
        }  else if (loanTerm == 25) {
            return totalAmount() / 300;
        }
}

// Console results.
console.log("Your loan amount is $" + loanAmount() + " dollars.");
console.log("Your interest will be $" + loanInterest.toFixed(2) + " dollars.");
console.log("Your total loan amount will be $" + totalAmount() + " dollars.");
console.log("Your monthly payment will be $" + monthlyPayment().toFixed(2) + " dollars.");