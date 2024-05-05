import Shape from './shape.js'

class Square extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `<rect x="25" y="25" width="100" height="100" fill="${fillColor}" />`
    }
}

export default Square