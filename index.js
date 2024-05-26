#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let wordsSentence = await inquirer_1.default.prompt([{
        name: "choices",
        type: "list",
        message: "Do you want to count alphabets or words??",
        choices: ['Alphabets', 'Words']
    }, {
        name: "sentence",
        type: "input",
        message: "Enter your sentence"
    }]);
if (wordsSentence.choices == 'Alphabets') {
    const alphabets = wordsSentence.sentence.trim().split("").filter(bets => bets != " ");
    console.log(alphabets.length);
}
else if (wordsSentence.choices == "Words") {
    const words = wordsSentence.sentence.trim().split(" ");
    console.log(words.length);
}
