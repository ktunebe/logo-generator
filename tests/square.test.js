import Square from '../lib/square'

describe('Square class', () => {
    test('Square receives text and text color from parent and returns correct fill color and dimensions', () => {
        const fillColor = 'red'
        const newSquare = new Square('KRT', 'white', fillColor)
        const shapeSVG = newSquare.render()
        expect(newSquare.shape).toBe(`<rect x="25" y="25" width="100" height="100" fill="red" />`)
        expect(shapeSVG).toBe(
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" width="100" height="100" fill="red" />
    <text x="75" y="87" font-size="40" text-anchor="middle" fill="white">KRT</text>
</svg>`)
    })
})
