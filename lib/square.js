import Shape from './shape'

class Square extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `<rect x="50" y="50" width="150" height="150" fill="${fillColor}" />`
    }
}

export default Square