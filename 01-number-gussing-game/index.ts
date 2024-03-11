#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Guess the number between 1 to 10");
let ranNum = Math.floor(Math.random() * 10 + 1);
// console.log(ranNum);

let actualAnswer: number = ranNum;
let numTries: number = 3;
let play: boolean = true;

interface AnswersType {
  myGuess: number;
}
interface PlayAgainAnswerType {
  playAgain: boolean;
}

while (play) {
  while (numTries > 0) {
    const answers: AnswersType = await inquirer.prompt([
      {
        type: "number",
        name: "myGuess",
        message: "Enter your guess",
      },
    ]);

    // console.log(answers);

    if (answers.myGuess == actualAnswer) {
      console.log("You guessed the right number");
      numTries = 0;
    } else {
      console.log("Sorry, you guessed the wrong number");
      if (actualAnswer > answers.myGuess) {
        console.log("Think higher");
      } else {
        console.log("Think lower");
      }
      console.log(`You have ${numTries - 1} tries left`);
    }
    numTries--;
  }
  const playAgainAnswer : PlayAgainAnswerType = await inquirer.prompt([{
    name: "playAgain",
    message: "Do you want to play again?",
    type: "confirm",
  }])
//   console.log(playAgainAnswer);
  if (playAgainAnswer.playAgain == true){
    numTries = 3;
    ranNum = Math.floor(Math.random() * 10 + 1);
    actualAnswer = ranNum;
  } else {
    console.log("Exciting Game....");
    play = false
  }
  
}
