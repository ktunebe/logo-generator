import writeSVG from './lib/write-file.js'
import {runPrompt, questions} from './lib/questions.js'
import Circle from './lib/circle.js'
import Square from './lib/square.js'
import Shape from './lib/shape.js'
import Triangle from './lib/triangle.js'

async function init() {
    const answers = await runPrompt(questions)
    const {text, textColor, shape, fillColor} = answers
    let newShape
    if (shape === 'Circle') {
        newShape = new Circle(text, textColor, fillColor)
    } else if (shape === 'Square') {
        newShape = new Square(text, textColor, fillColor)
    } else if (shape === 'Triangle') {
        newShape = new Triangle(text, textColor, fillColor)
    }
    
    const generatedSVG = newShape.render()
    writeSVG(generatedSVG)
}
init()