import inquirer from 'inquirer'
import questions from './questions.js'

const runPrompt = async(questions) => {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
    return answers
  }

runPrompt(questions)