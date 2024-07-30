#!/usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    PKR: 278.25,
    INR: 83.64,
    AED: 3.67,
};
let convert = await inquirer.prompt([
    { name: "from",
        type: "list",
        message: "Enter from amount",
        choices: ["USD", "EUR", "GBP", "PKR", "INR", "AED"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to amount",
        choices: ["USD", "EUR", "GBP", "PKR", "INR", "AED"]
    },
    {
        name: "amount",
        type: "number",
        message: "please Enter your amount",
    }
]);
let fromAmount = currency[convert.from];
let toAmount = currency[convert.to];
let Amount = convert.amount;
let baseamount = Amount / fromAmount;
let convertedAmount = baseamount * toAmount;
console.log(convert);
console.log(convertedAmount);
