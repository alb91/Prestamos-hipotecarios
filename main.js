
const houses = [
    {   
        "area": "beach",
        "bedrooms": 2,
        "bathrooms": 1,
        "price": 100000,
        "id": 1,
        "image": "<img src='./img/beachHouseId1.jpg' alt='house on the beach'"
    },
    {
        
        "area": "downtown",
        "bedrooms": 1,
        "bathrooms": 1,
        "price": 150000,
        "id": 2,
        "image": "<img src='./img/downtownHouseId2.jpg' alt='downtown house'"
    },
     {
        
        "area": "country",
        "bedrooms": 4,
        "bathrooms": 3,
        "price": 50000,
        "id": 3,
        "image": "<img src='./img/countryHomeId3.jpeg' alt='house on the country'"
    },
    {
        
        "area": "suburbs",
        "bedrooms": 4,
        "bathrooms": 3,
        "price": 250000,
        "id": 4,
        "image": "<img src='./img/suburbsHomeId4.jpg' alt='house on the suburbs'"

    },
    {   
        "area": "downtown",
        "bedrooms": 1,
        "bathrooms": 1,
        "price": 90000,
        "id": 5,
        "image": "<img src='./img/downtownHouseId5.jpg' alt='downtown house'"
    },
];

let homeIdSelection;


// Images
for (const house of houses) {

    let container = document.createElement("div");
    container.innerHTML = `
                            <p>${house.image}</p>
                            <p><button id="${house.id}" onclick="imageClick()">Select</button></p>
                            <p> Price: ${house.price} </p>
                            <p> Bedrooms: ${house.bedrooms} </p>
                            <p> Bathrooms: ${house.bathrooms} </p>
                            <p> Area: ${house.area} </p> `;


    function imageClick() {
        // Al momento de hacer click en la imagen no puedo pasar el valor de "house.id", 
        //Únicamente se guarda el último valor del loop que sería house.id = 5, 
        // pero este tampoco se pasa a "homeIdSelection", sino que queda como "null" 
        homeIdSelection = document.getElementById(`"${house.id}"`)
        debugger
        
        

    }

    document.body.appendChild(container);
    
};



console.log(homeIdSelection);


// //ID Search.
// let houseToBuy;
// let homeIdSelection = Number(prompt("Please select from 1 to 5 for the house you'd like to choose."))
// let downPayment = Number(prompt("Please enter the down payment amount you want to make."));
// let loanTerm = Number(prompt("Enter '10', '15', '20' or '25' for the amount of years you want to get the loan for."))


// //Interest Values
// let loanInterest = 0;
// let tenYearInterest = .07;
// let fifteenYearInterest = .09;
// let twentyYearInterest = .11;
// let twentyFiveYearInterest = .13;

// //Loan term by month amount. 
// let tenYearLoan = 120;
// let fifteenYearLoan = 180;
// let twentyYearLoan = 240;
// let twentyFiveYearLoan = 300;



// // ID search of the house. 
// function houseIdSearch() {
//     houseToBuy = houses.find(houseToBuy => houseToBuy.id === homeIdSelection);
//     if (houseToBuy == undefined) {
//         console.log("That house is not available.")
//     }
//     return houseToBuy 
//     }
    


// // Calculate loan amount.
// function loanAmount() {
//     return houseIdSearch().price - downPayment;
    
// }


// // Calculate loan interest.
// switch(loanTerm) {
//     case 10:
//         loanInterest = loanAmount() * tenYearInterest;
//         break;
//     case 15:
//         loanInterest = loanAmount() * fifteenYearInterest;
//         break;
//     case 20:
//         loanInterest = loanAmount() * twentyYearInterest;
//         break;
//     case 25:
//         loanInterest = loanAmount() * twentyFiveYearInterest;
//         break;

// }


// // Calculate total loan amount, including interest.
// function totalAmount() {
//     return loanAmount() + loanInterest

// }

// //Calculate monthly payment
// function monthlyPayment() {
//     if (loanTerm == 10) {
//             return totalAmount() / tenYearLoan;
//         } else if (loanTerm == 15) {
//             return totalAmount() / fifteenYearLoan;
//         } else if (loanTerm == 20) {
//             return totalAmount() / twentyYearLoan;
//         }  else if (loanTerm == 25) {
//             return totalAmount() / twentyFiveYearLoan;
//         }
// }

// // Console results.
// console.log("Your loan amount is $" + loanAmount() + " dollars.");
// console.log("Your interest will be $" + loanInterest.toFixed(2) + " dollars.");
// console.log("Your total loan amount will be $" + totalAmount() + " dollars.");
// console.log("Your monthly payment will be $" + monthlyPayment().toFixed(2) + " dollars.");