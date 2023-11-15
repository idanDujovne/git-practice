'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    const increment = getRandomInt(20, 61)
    var size = +elBall.innerText + increment

    if (size > 400) size = 100
    elBall.style.height = size + 'px'
    elBall.style.width = size + 'px'
    elBall.innerText = size

    elBall.style.backgroundColor = getRandomColor()
}