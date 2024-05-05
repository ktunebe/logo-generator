import fs from 'fs'
// import Shape from './shape'
// import Circle from './circle'
// import Square from './square'
// import Triangle from './triangle'

const writeSVG = (data) => {
    fs.writeFile('./examples/logo.svg', data, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg')
    })
}

export default writeSVG