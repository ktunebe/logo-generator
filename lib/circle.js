import Shape from './shape.js'

class Circle extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `<circle cx="75" cy="75" r="50" fill="${fillColor}" />`
    }
}

export default Circle