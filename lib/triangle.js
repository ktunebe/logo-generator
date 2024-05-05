import Shape from './shape.js'

class Triangle extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `<polygon points="75,15 125,110 25,110" fill="${fillColor}" />`
    }
}

export default Triangle