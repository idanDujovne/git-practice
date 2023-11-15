'use strict'

function onBallClick() {
    var elBall = document.querySelector('.ball')
    var size = +elBall.innerText + 50
    elBall.style.height = size + 'px'
    elBall.style.width = size + 'px'
    elBall.innerText =  size
}