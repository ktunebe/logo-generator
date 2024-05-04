import Square from '../lib/square'

describe('Square class', () => {
    test('Square receives text and text color from parent and returns correct fill color and dimensions', () => {
        const fillColor = 'red'
        const newSquare = new Square('KRT', 'white', fillColor)
        expect (newSquare.shape).toBe(`<rect x="50" y="50" width="150" height="150" fill="red" />`)
    })
})
