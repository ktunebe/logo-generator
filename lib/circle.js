import Shape from './shape'

class Circle extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `< fill="${fillColor}" />`
    }
}

export default Circle