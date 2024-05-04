import Shape from './shape'

class Trinagle extends Shape{
    constructor(text, textColor, fillColor) {
        super(text, textColor)
        this.shape = `< fill="${fillColor}" />`
    }
}

export default Trinagle