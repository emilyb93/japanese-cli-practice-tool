const inquirer = require('inquirer')

function askForUserSelection(questionText, answers){
    return inquirer.prompt({type: "list", name: "answer", message: questionText, choices: answers})
}

function askForUserInput(questionText){
    return inquirer.prompt({name: "answer", message: questionText})
}


module.exports = {askForUserInput}