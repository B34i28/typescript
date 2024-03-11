#! /usr/bin/env node
import inquirer from "inquirer";

interface UserType {
  name: string;
  pin: number;
  balance: number;
}

let user: UserType = {
  name: "john Doe",
  pin: 4444,
  balance: 100000,
};

console.log("You can find pin in readme.md");

const resp = await inquirer.prompt([
  {
    message: "Enter your pin",
    name: "pin",
    type: "password",
  },
]);
// console.log(resp);
let continueTransction: boolean = true;
if (Number(resp.pin) !== user.pin) {
  console.log("You have entered incorrect pin");
} else {
  while (continueTransction === true) {
    const resp = await inquirer.prompt([
      {
        name: "selectedType",
        message: "Select an option",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Balance Inquiry"],
      },
      {
        name: "amount",
        message: "Selecnt your amount",
        type: "list",
        choices: [1000, 2000, 3000, 4000, 5000],
        when(resp) {
          return resp.selectedType === "Fast Cash";
        },
      },
      {
        name: "amount",
        message: "Please Enter your amount",
        when(resp) {
          return resp.selectedType === "Withdraw";
        },
      },
    ]);

    if (resp.selectedType === "Balance Inquiry") {
      console.log("Your Balance is:", user.balance);
      const toRepeat = await inquirer.prompt([
        {
            name: "repeat",
            message: "Do you want to Repeat? ",
            type: "confirm",
        }
      ])
      if (toRepeat.repeat == true){
        continueTransction = true
      } else{
        continueTransction = false
      }
    } else {
    //   console.log("Selected option", resp);
      user.balance = user.balance - resp.amount;
      console.log("Your new Balance is: ", user.balance);
      continueTransction = false
    }
  }
}
