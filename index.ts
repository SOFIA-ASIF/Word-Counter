#! /usr/bin/env node
import inquirer from "inquirer"
let wordsSentence  = await inquirer.prompt([{
    name: "choices",
    type: "list",
    message: "Do you want to count alphabets or words??",
    choices: ['Alphabets', 'Words']
},{
    name: "sentence",
    type:"input",
    message: "Enter your sentence"
}])
if(wordsSentence.choices == 'Alphabets'){

const alphabets = wordsSentence.sentence.trim().split("").filter(bets => bets != " ")
console.log(alphabets.length);

}else if(wordsSentence.choices == "Words"){
    const words = wordsSentence.sentence.trim().split(" ")
    console.log(words.length);
}