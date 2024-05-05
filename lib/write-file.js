import fs from 'fs'
// import Shape from './shape'
// import Circle from './circle'
// import Square from './square'
// import Triangle from './triangle'

const writeSVG = (data) => {
    fs.writeFile('shape.svg', data, (err) => {
        err ? console.error(err) : console.log('SVG file written to ./examples folder')
    })
}

export default writeSVG