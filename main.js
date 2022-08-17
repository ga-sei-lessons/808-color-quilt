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

document.addEventListener('DOMContentLoaded', () => {
    addH2()
    changeH2()
    makeQuilt(500)
})