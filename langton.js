let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')

let w = 400
let h = 400

canvas.width = w
canvas.height = h

canvas.style.backgroundColor = '#fff'

let pixArray = new Array(w).fill(new Array(h).fill(0))
console.log(pixArray)
let posX = 200
let posY = 200

const UP = 0
const RIGHT = 1
const DOWN = 2
const LEFT = 3

let state = UP

function forward(){
  console.log(`Got state ${state}`)
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
  if(posX < 0) pos = w - 1
  if(posY > h - 1) posY = 0
  if(posY < 0) posY = h - 1
  // posX = posX % w
  // posY = posY % h
}

function turnClockwise(){
  console.log(`called Clock with ${state}`)
  state = state + 1
  if(state > LEFT) state = UP
  // state = (state + 1) > LEFT ? UP : state + 1
}

function turnAntiClockwise(){
  console.log(`called Anti with ${state}`)
  state = state - 1
  if(state < UP) state = LEFT
  // state = (state - 1) < UP ? LEFT : state - 1
  // console.log(`sent with ${state}`)
}

pixArray[posX][posY] = 1

let pixPos
let col
function draw(){
  // console.log(`X is ${posX} and Y is ${posY}`)
  if(pixArray[posX][posY] == 0){
    turnClockwise()
    pixArray[posX][posY] = 1
    ctx.fillStyle = '#000'
  }
  if(pixArray[posX][posY] == 1){
    turnAntiClockwise()
    pixArray[posX][posY] = 0
    ctx.fillStyle = '#fff'
  }
  // pixPos = i + (w * j)
  ctx.fillRect(posX, posY, 1, 1)
  forward()

  // for(let i = 0; i < w; i++){
  //   for(let j = 0; j < h; j++){

  //   }
  // }

}

// let x = setInterval(function(){
//   requestAnimationFrame(draw)
// }, 60)
for(let k = 0; k < 10; k++){
  draw()
}
