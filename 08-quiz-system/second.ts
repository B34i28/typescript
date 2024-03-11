#! /usr/bin/env node
import inquirer from "inquirer";
// Import node-fetch for fetching data
import chalk from "chalk";

const apiLink: string = "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple";

let fetchData = async (data:string) => {
    let fetchQuiz: any = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};

let startQuiz = async () => {
    try {
        let data = await fetchData(apiLink);
        let score: number = 0;

        // for user name
        let name = await inquirer.prompt({
            type: "input",
            name: "fname",
            message: "Enter Your Name: ",
        });

        for (let i = 0; i < data.length; i++) {
            let answers = [...data[i].incorrect_answers, data[i].correct_answer];

            let ans = await inquirer.prompt({
                type: "list",
                name: "quiz",
                message: data[i].question,
                choices: answers.map((val:any) => val),
            });
            if (ans.quiz == data[i].correct_answer) {
                ++score;
            }
        }

        console.log(`Dear ${chalk.green.bold(name.fname)}, your Score is ${score}`);
    } catch (error) {
        console.error("Error fetching or processing quiz data:", error);
    }
};

startQuiz();