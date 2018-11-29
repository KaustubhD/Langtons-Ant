let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')

let w = 400
let h = 400

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
console.log(pixArray)
let posX = w / 2
let posY = h / 2

const UP = 0
const RIGHT = 1
const DOWN = 2
const LEFT = 3

let state = UP

function forward(){
  // console.log(`Got state ${state}`)
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
  // posX = posX % w
  // posY = posY % h
}

function turnClockwise(){
  // console.log(`called Clock with ${state}`)
  state = state + 1
  if(state > LEFT) state = UP
  // state = (state + 1) > LEFT ? UP : state + 1
}

function turnAntiClockwise(){
  // console.log(`called Anti with ${state}`)
  state = state - 1
  if(state < UP) state = LEFT
  // state = (state - 1) < UP ? LEFT : state - 1
  // console.log(`sent with ${state}`)
}

// pixArray[posX][posY] = 1

let acInac = 0
let col = true
function draw(){
  // console.log(pixArray)
  // console.log(`\n\nX is ${posX} and Y is ${posY}`)
  acInac = pixArray[posX][posY]
  // console.log(acInac)
  if(acInac == 0){
    // console.log(`Found White ${posX} and Y is ${posY} and current state is ${state}`)
    turnClockwise()
    
    pixArray[posX][posY] = 1
    // console.log(`X is ${posX} and Y is ${posY}`)
    ctx.fillStyle = '#fff'
    forward()
  }
  else if(acInac == 1){
    // console.log(`Found Black ${posX} and Y is ${posY}  and current state is ${state}`)
    turnAntiClockwise()
    pixArray[posX][posY] = 0
    ctx.fillStyle = '#000'
    forward()
  }
  // console.log(pixArray[posX][posY])
  // pixPos = i + (w * j)
  ctx.fillRect(posX, posY, 1, 1)
  
  
  // for(let i = 0; i < w; i++){
  //   for(let j = 0; j < h; j++){

  //   }
  // }


}

let x = setInterval(function(){
  requestAnimationFrame(draw)
}, 60)
// let limit = 11000
// for(let k = 0; k < limit; k++){
//   draw()
// }