import Shape from '../lib/shape'

describe('Shape class', () => {
    test('Shape receives correct text and text color', () => {
        const text = 'KRT'
        const textColor = 'black'

        const newShape = new Shape(text, textColor)

        expect(newShape.text).toBe('KRT')
        expect(newShape.textColor).toBe('black')
    })
})