let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')

let w = 450
let h = 450

canvas.width = w
canvas.height = h

canvas.style.backgroundColor = '#fff'

let pixArray = Array.from({ length: w }, () => new Array(h).fill(0))

// let pixArray = new Array(w).fill(new Array(h).fill(0))

// let pixArray = new Array(w)
// for(let i = 0; i < w; i++){
//   pixArray[i] = new Array(h).fill(0)
// }
// pixArray = pixArray.map(el => { el = new Array(h).fill(0) })
let posX = w / 2
let posY = h / 2

const UP = 0
const RIGHT = 1
const DOWN = 2
const LEFT = 3

let state = UP

function forward(){
  switch(state){
    case 0:
      posY--
      break
    case 1:
      posX++
      break
    case 2:
      posY++
      break
    case 3:
      posX--
      break
  }
  if(posX > w - 1) posX = 0
  else if(posX < 0) posX = w - 1
  if(posY > h - 1) posY = 0
  else if(posY < 0) posY = h - 1
}

function turnClockwise(){
  state = state + 1
  if(state > LEFT) state = UP
}

function turnAntiClockwise(){
  state = state - 1
  if(state < UP) state = LEFT
}

let currentPixel = 0
function draw(){
  currentPixel = pixArray[posX][posY]
  if(currentPixel == 0){
    turnClockwise()
    
    pixArray[posX][posY] = 1
    ctx.fillStyle = '#fff'
    forward()
  }
  else if(currentPixel == 1){
    turnAntiClockwise()
    pixArray[posX][posY] = 0
    ctx.fillStyle = '#000'
    forward()
  }
  ctx.fillRect(posX, posY, 1, 1)
}


let x = setInterval(function(){
  for(let i = 0; i < 150; i++){
    draw()
  }
}, 60)
// let limit = 200
// for(let k = 0; k < limit; k++){
//   for(let i = 0; i < 150; i++){
//         draw()
//       }
// }