// adds an h2 element to the page
const addH2 = () => {
    // create the new element 
    const h2Element = document.createElement('h2')
    // set the properties of the new element
    h2Element.innerText = 'Just gettin started!'
    // apend the new element to the DOM (this will make it seen by the user)
    document.querySelector('body').append(h2Element)
}

const changeH2 = () => {
    // select the element we wish to change
    const h2 = document.querySelector('h2')    
    // edit the properties of the element
    h2.innerText = 'Color Quilt'
}

const randomRGB = () => {
    // Math.random returns a random float between 0 and 1
    // console.log(Math.floor(Math.random() * 256))
    // console.log(Math.floor(1.5)) // 1
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

// console.log(randomRGB())

const makeQuilt = numberOfSquares => {

    let i = 0
    const squareInterval = setInterval(() => {
        // create the new DOM element
        const div = document.createElement('div')
        // set the properties of the new El
        div.innerText = i
        div.classList.add('square')
        div.style.backgroundColor = randomRGB()
        // append the new El to a node in the DOM Tree
        document.querySelector('body').appendChild(div)
        // increment i and check to make sure we haven't exceed the number of square to make
        i++
        if (i >= numberOfSquares) {
            clearInterval(squareInterval)
        }
    }, 25)
    // for (let i = 0; i <= numberOfSquares; i++) {
    //     // create the new DOM element
    //     const div = document.createElement('div')
    //     // set the properties of the new El
    //     div.innerText = i
    //     div.classList.add('square')
    //     div.style.backgroundColor = randomRGB()
    //     // append the new El to a node in the DOM Tree
    //     document.querySelector('body').appendChild(div)
    // }
}

const makePalette = () => {
    const colorPalette = document.querySelector('#color-palette')

    // while something is in the element, remove it
    while (colorPalette.firstChild) {
        // console.log('colorPalette.firstChild:', colorPalette.firstChild)
        colorPalette.removeChild(colorPalette.firstChild)
    }

    for (let i = 0; i < 150; i++) {
        // create the element
        const square = document.createElement('div')
        // set the properties
        square.classList.add('square')
        square.style.backgroundColor = randomRGB()
        square.addEventListener('click', event => {
            console.log(event.target.style.backgroundColor)
            const color = event.target.style.backgroundColor
            // make a new sqaure
            const newSquare = document.createElement('div')
            // set the props of the square
            newSquare.classList.add('square')
            newSquare.style.backgroundColor = color
            // append sqaure to the dom treem
            document.querySelector('#my-palette').appendChild(newSquare)
        })
        // append the element to the DOM tree
        colorPalette.appendChild(square)
    }
}

const alternate = () => {
    const board = document.querySelector('#board')
    // iterate 64 times to create 64 squares
    for (let i = 0; i < 64; i++) {
        // create a new sqaure
        const square = document.createElement('div')
        // add the class of .square
        square.classList.add('square')
        // check if i is odd or even and assign the square's color that way
        if (i % 2 === 0) {
            square.style.backgroundColor = 'red'
        } else {
            square.style.backgroundColor = 'black'
        }
        // mount on dom tree
        board.appendChild(square)

    }
}

document.addEventListener('DOMContentLoaded', () => {
    // addH2()
    // changeH2()
    // makeQuilt(500)
    // const generate = document.querySelector('#generate')
    // generate.addEventListener('click', makePalette)
    alternate()
})

