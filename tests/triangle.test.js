import Triangle from '../lib/triangle'

describe('Triangle class', () => {
    test('Triangle receives text and text color from parent and returns correct fill color and dimensions', () => {
        const fillColor = 'blue'
        const newTriangle = new Triangle('KRT', 'white', fillColor)
        const shapeSVG = newTriangle.render()
        expect(newTriangle.shape).toBe(`<polygon points="75,15 125,110 25,110" fill="blue" />`)
        expect(shapeSVG).toBe(
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="75,15 125,110 25,110" fill="blue" />
    <text x="75" y="87" font-size="40" text-anchor="middle" fill="white">KRT</text>
</svg>`)
    })
})