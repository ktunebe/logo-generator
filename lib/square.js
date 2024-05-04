import Shape from './shape'

class Square extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `< fill="${fillColor}" />`
    }
}

export default Square