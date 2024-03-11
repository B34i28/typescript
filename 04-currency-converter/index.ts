#! /usr/bin/env node
import inquirer from "inquirer";

let Convertion = {
    "PKR" : {
        "USD" : 0.0044,
        "GBP" : 0.0037,
        "PKR" : 1
    },
    "GBP" : {
        "USD" : 1.21,
        "PKR" : 271.79,
        "GBP" : 1
    },
    "USD" : {
        "PKR" : 225.50,
        "GBP" : 0.83,
        "USD" : 1
    }
}

interface AnswersType {
    from : "PKR" | "GBP"| "USD",
    to : "PKR" | "GBP"| "USD",
    amount : number
}

const answers : AnswersType = await inquirer.prompt([
    {
        type : "list",
        name : "from",
        choices : ["PKR","USD","GBP"],
        message : "Select Your Currency: "
    },
    {
        type : "list",
        name : "to",
        choices : ["PKR","USD","GBP"],
        message : "Select your Convertion Currency"
    },
    {
        type : "number",
        name : "amount",
        message : "Entre Your amount: "
    }
])

const { from , to , amount } = answers

if (from && to && amount) {
    let result = Convertion[from][to] * amount
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
    
} else {
    console.log("Invalid input");
    
}