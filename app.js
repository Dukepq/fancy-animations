/////////////////////////// animated text stuff /////////////////////////////////////////////

const headerAnimationSpan = document.querySelectorAll('.header-ani')
let wordArray = ["magical", "inspiring", "amazing", "incredible", "unseen", "stunning"] // ["magical", "inspiring", "amazing", "incredible", "unseen", "stunning"]

//simply traverse array
let i = 1
function traverseArray() {
    headerAnimationSpan[0].textContent = wordArray[i]
    i++
    if (i >= wordArray.length) i = 0
}
setInterval((() => {
    traverseArray()
}), 3500)

//random number generator for getting random words from the array
// let previous = null;
// function getRandomNumber() {
//     console.log('//////////////////////////////////////')
//     let selector = Math.floor((Math.random() * wordArray.length));
//     console.log('first number: ' + selector)
//     if (selector === previous) {
//         console.log("numbers were the same")
//         selector = Math.floor((Math.random() * wordArray.length))
//         console.log('numbers were the same. New number: ' + selector)
//     }
//     console.log('returned ' + selector)
//     previous = selector
//     return selector
// }


// let i = 1
// function traverseArray() {
//     headerAnimationSpan[0].textContent = wordArray[i]
//     i++
//     if (i >= wordArray.length) i = 0
// }
// setInterval(traverseArray, 3500)

//////////////////////////////////////// blob stuff ///////////////////////////////////////////
const blob = document.querySelector('.blob')
console.log(blob)

let frequency = 10
let wait = 0
document.body.onmousemove = (event) => {
    if (Date.now() > wait) {
        position = {x: event.clientX, y: event.clientY}
        blob.animate({
            left: `${position.x - 150}px`,
        }, {
            duration: 3500,
            fill: "forwards",
        })
        console.log('updating position')
        wait = Date.now() + 1000 / frequency
    }
}

document.body.ontouchmove = event => {
    if (Date.now() > wait) {
        position = {x: event.touches[0].clientX, y: event.touches[0].clientY}
        blob.animate({
            left: `${position.x - 150}px`,
        }, {
            duration: 3500,
            fill: "forwards",
        })
        console.log('updating position')
        wait = Date.now() + 1000 / frequency
    }
}