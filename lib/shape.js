

class Shape {
    constructor(text, textColor) {
        this.text = text
        this.textColor = textColor
    }
}

Shape.prototype.render = function() {
    return( 
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${this.shape}
    <text x="75" y="87" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`)
}

export default Shape