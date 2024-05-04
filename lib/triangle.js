import Shape from './shape'

class Triangle extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `<polygon points="100,10 150,190 50,190" fill="${fillColor}" />`
    }
}

export default Triangle