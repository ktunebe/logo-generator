import inquirer from 'inquirer'

const questions = [
    {
        message: 'Enter up to 3 characters to be displayed on the logo:',
        name: 'text',
        validate: (input) => {
            if (input.length <= 3) {
                return true
            } else {
                return 'Please use only up to 3 characters'
            }
        }
    },
    {
        message: 'What color text would you like?',
        name: 'textColor',
        default: 'black',
        filter: (input) => input.toLowerCase()
    },
    {
        message: 'What shape would you like to generate?',
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        loop: false
    },
    {
        message: 'What color would you like the shape to be?',
        name: 'fillColor',
        default: 'white',
        filter: (input) => input.toLowerCase()
    }

]

export default questions