import Triangle from '../lib/triangle'

describe('Triangle class', () => {
    test('Triangle receives text and text color from parent and returns correct fill color and dimensions', () => {
        const fillColor = 'blue'
        const newTriangle = new Triangle('KRT', 'white', fillColor)
        expect (newTriangle.shape).toBe(`<polygon points="100,10 150,190 50,190" fill="blue" />`)
    })
})