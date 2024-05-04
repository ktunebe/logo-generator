import Circle from '../lib/circle'

describe('Circle class', () => {
    test('Circle receives text and text color from parent and returns correct fill color and dimensions', () => {
        const fillColor = 'green'
        const newCircle = new Circle('KRT', 'white', fillColor)
        expect (newCircle.shape).toBe(`<circle cx="125" cy="125" r="75" fill="green" />`)
    })
})