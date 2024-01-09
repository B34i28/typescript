#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout (res,2000)
    })
}

async function Welcome() {
    let rainbow = await chalkAnimation.rainbow('Lets start calculate')
    await sleep()
    rainbow.stop()
    console.log(`
    _________________________
    |   __________________  |
    |  | 30             0|  |
    |  |_________________|  |
    |   ___ ___ ___   ___   |
    |  | 7 | 8 | 9 | | + |  |
    |  |___|___|___| |___|  |
    |  | 4 | 5 | 6 | | - |  |
    |  |___|___|___| |___|  |
    |  | 1 | 2 | 3 | | * |  |
    |  |___|___|___| |___|  |
    |  | . | 0 | - | | / |  |
    |  |___|___|___| |___|  |
    _________________________
    `);
    console.log(`${chalk.green.bold(`Created by Bilal Afridi`)}`);
    
}

await Welcome()

async function askQuestion(){
    const answer = await inquirer
    .prompt([

        {   
            type:"list",
            name:"operator",
            message:"Which operation do want to perform? \n",
            choices:["Addition","Subtraction","Multiplication","Division"]
        },
        {
            type:"number",
            name:"num1",
            message:"Entre number 1: "
        },
        {
            type:"number",
            name:"num2",
            message:"Entre number 2: "
        },

    ]);
        if
        (answer.operator=="Addition"){
            console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`)); 
        }
        else if
        (answer.operator=="Subtraction"){
            console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`)); 
        }
        else if
        (answer.operator=="Multiplication"){
            console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`)); 
        }
        else if
        (answer.operator=="Division"){
            console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`)); 
        }

}

// askQuestion();

async function startAgain(){
    
    do{
        await askQuestion()
        var again =await inquirer
        .prompt({
            type:"input",
            name:"Restart",
            message:"Do You want to continue? Press y or n: "
        })
    }while(again.Restart=='y'||again.Restart=='Y'||again.Restart=='yes'||again.Restart=="YES")
}

startAgain()