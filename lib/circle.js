import Shape from './shape'

class Circle extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `<circle cx="125" cy="125" r="75" fill="${fillColor}" />`
    }
}

export default Circle