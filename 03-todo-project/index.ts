#! /usr/bin/env node
import inquirer from "inquirer";

interface AnswersType {
    TODO : string
    addMore : boolean
}

let todos : string[] = []
let loop = true

while (loop) {
    const answers : AnswersType = await inquirer.prompt([
        {
            type : "input",
            name : "TODO",
            message : "What do you want to Add?: "
        },
        {
            type : "confirm",
            name : "addMore",
            message : "Want to Add More?: "
        }
    ]);

    const { TODO , addMore } = answers;

    loop = addMore;
    if (TODO) {
        todos.push(TODO)
    } else {
        console.log("Add valid input");
        
    }
}

if (todos.length > 0 ) {
    console.log("Your Todos list is: ");
    todos.forEach(todo => {
        console.log(todo);
    }
    )
    
} else {
    console.log("No Todo Found here:");
    
}