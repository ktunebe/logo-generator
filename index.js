import writeSVG from './lib/write-file.js'
import {runPrompt, questions} from './lib/questions.js'
import Circle from './lib/circle.js'
import Square from './lib/square.js'
import Triangle from './lib/triangle.js'

function chooseShape(text, textColor, shape, fillColor) {
    let newShape
    if (shape === 'Circle') {
        newShape = new Circle(text, textColor, fillColor)
    } else if (shape === 'Square') {
        newShape = new Square(text, textColor, fillColor)
    } else if (shape === 'Triangle') {
        newShape = new Triangle(text, textColor, fillColor)
    }
    return newShape
}

async function init() {
    const answers = await runPrompt(questions)
    const {text, textColor, shape, fillColor} = answers
    const newShape = chooseShape(text, textColor, shape, fillColor)
    
    const generatedSVG = newShape.render()
    writeSVG(generatedSVG)
}
init()