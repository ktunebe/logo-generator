import Circle from '../lib/circle.js'

describe('Circle class', () => {
    test('Circle receives text and text color from parent and returns correct fill color and dimensions', () => {
        const fillColor = 'green'
        const newCircle = new Circle('KRT', 'white', fillColor)
        const shapeSVG = newCircle.render()
        expect(newCircle.shape).toBe(`<circle cx="75" cy="75" r="50" fill="green" />`)
        expect(shapeSVG).toBe(
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="75" cy="75" r="50" fill="green" />
    <text x="75" y="87" font-size="40" text-anchor="middle" fill="white">KRT</text>
</svg>`)
    })
})