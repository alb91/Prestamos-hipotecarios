

// Questions.
let homeValue = Number(prompt("Please enter the value of the house you want to purchase."))
let downPayment = Number(prompt("Please enter the down payment amount you want to make."))
let loanTerm = Number(prompt("Enter '10', '15', '20' or '25' for the amount of years you want to get the loan for."))


//Interest Values
let loanInterest = 0;
let tenYearInterest = .07;
let fifteenYearInterest = .09;
let twentyYearInterest = .11;
let twentyFiveYearInterest = .13;

//Loan term by month amount. 
let tenYearLoan = 120;
let fifteenYearLoan = 180;
let twentyYearLoan = 240;
let twentyFiveYearLoan = 300;


// Calculate loan amount.
function loanAmount() {
    return homeValue - downPayment;
    
}


// Calculate loan interest.
switch(loanTerm) {
    case 10:
        loanInterest = loanAmount() * tenYearInterest;
        break;
    case 15:
        loanInterest = loanAmount() * fifteenYearInterest;
        break;
    case 20:
        loanInterest = loanAmount() * twentyYearInterest;
        break;
    case 25:
        loanInterest = loanAmount() * twentyFiveYearInterest;
        break;

}


// Calculate total loan amount, including interest.
function totalAmount() {
    return loanAmount() + loanInterest

}

//Calculate monthly payment
function monthlyPayment() {
    if (loanTerm == 10) {
            return totalAmount() / tenYearLoan;
        } else if (loanTerm == 15) {
            return totalAmount() / fifteenYearLoan;
        } else if (loanTerm == 20) {
            return totalAmount() / twentyYearLoan;
        }  else if (loanTerm == 25) {
            return totalAmount() / twentyFiveYearLoan;
        }
}

// Console results.
console.log("Your loan amount is $" + loanAmount() + " dollars.");
console.log("Your interest will be $" + loanInterest.toFixed(2) + " dollars.");
console.log("Your total loan amount will be $" + totalAmount() + " dollars.");
console.log("Your monthly payment will be $" + monthlyPayment().toFixed(2) + " dollars.");