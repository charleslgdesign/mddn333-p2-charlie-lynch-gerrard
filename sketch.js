var img;

let xOff = -4
let yOff = 1
let zOff = 0

var xArray = []
var yArray = []
var zArray = []

let yAng = 0
let xAng = 0
let zAng = 0

var yVal
var xVal
var zVal

let currentPosY
let currentPosX
let currentPosZ

// rotation interface
let xButton
let yButton
let pauseButton

let gDPButton
let energyButton
let mentalButton

// data interface

// key
let key1
let key2
let key3
let key4
let key5

// states
let xOn
let yOn
let pauseOn

let gDPOn
let energyOn
let mentalOn

// styles
let minWidth = '120px'
let borderWidth = 'thin'
let borderStyle = 'solid'
let padding = '5px'
let borderRadius = '.25rem'
let backgroundColor = '#fff'

let key1Bg = 'rgba(225,0,0,1)'
let key2Bg = 'rgba(225,0,0,.8)'
let key3Bg = 'rgba(225,0,0,.6)'
let key4Bg = 'rgba(225,0,0,.4)'
let key5Bg = 'rgba(225,0,0,.2)'



function preload() {
  img = loadImage('earth.jpeg')
  gdpImg = loadImage('gdp.jpg')
  mentalImg = loadImage('mental.jpg')
  energyImg = loadImage('energy.jpg')
}

// draw a sphere with radius 200
function setup(){

  var cnv = createCanvas(1000, 700, WEBGL)

  var x = (windowWidth - width) / 2
  var y = (windowHeight - height) / 2
  cnv.position(x, height)

    
    xOn = true
    yOn = false
    gDPOn = false
    mentalOn = false
    energyOn = false

    xButton = createButton('rotate Y')
    xButton.position(20,20+height)
    xButton.mousePressed(handleY)

    yButton = createButton('rotate X')
    yButton.position(20,60+height)
    yButton.mousePressed(handleX)

    pauseButton = createButton('pause')
    pauseButton.position(20, 100+height)
    pauseButton.mousePressed(handlePause)

    gDPButton = createButton('top 5 GDP')
    gDPButton.position(160, 20+height)
    gDPButton.mousePressed(handleGDP)

    mentalButton = createButton('top 5 best reported mental health countries')
    mentalButton.position(160, 60+height)
    mentalButton.mousePressed(handleMental)

    energyButton = createButton('top 5 energy consumers')
    energyButton.position(160, 100+height)
    energyButton.mousePressed(handleEnergy)

        
    key1 = createButton('<br/>')
    key1.position(20,170+height)
    key2 = createButton('<br/>')
    key2.position(20,200+height)
    key3 = createButton('<br/>')
    key3.position(20,230+height)
    key4 = createButton('<br/>')
    key4.position(20,260+height)
    key5 = createButton('<br/>')
    key5.position(20,290+height)
    

    // --------- styles ---------- //
    
    // width
    yButton.style('min-width', minWidth)
    xButton.style('min-width', minWidth)
    pauseButton.style('min-width', minWidth)
    energyButton.style('min-width', minWidth)
    mentalButton.style('min-width', minWidth)
    gDPButton.style('min-width', minWidth)
    key1.style('min-width', '50px')
    key2.style('min-width', '50px')
    key3.style('min-width', '50px')
    key4.style('min-width', '50px')
    key5.style('min-width', '50px')
    
    // border
    yButton.style('border-width', borderWidth)
    xButton.style('border-width', borderWidth)
    pauseButton.style('border-width', borderWidth)
    energyButton.style('border-width', borderWidth)
    gDPButton.style('border-width', borderWidth)
    mentalButton.style('border-width', borderWidth)
    key1.style('border-width', borderWidth)
    key2.style('border-width', borderWidth)
    key3.style('border-width', borderWidth)
    key4.style('border-width', borderWidth)
    key5.style('border-width', borderWidth)
    

    // border style
    yButton.style('border-style', borderStyle)
    xButton.style('border-style', borderStyle)
    pauseButton.style('border-style', borderStyle)
    energyButton.style('border-style', borderStyle)
    gDPButton.style('border-style', borderStyle)
    mentalButton.style('border-style', borderStyle)
    key1.style('border-style', borderStyle)
    key2.style('border-style', borderStyle)
    key3.style('border-style', borderStyle)
    key4.style('border-style', borderStyle)
    key5.style('border-style', borderStyle)

    // padding
    yButton.style('padding', padding)
    xButton.style('padding', padding)
    pauseButton.style('padding', padding)
    energyButton.style('padding', padding)
    gDPButton.style('padding', padding)
    mentalButton.style('padding', padding)
    

    // border radius
    yButton.style('border-radius', borderRadius)
    xButton.style('border-radius', borderRadius)
    pauseButton.style('border-radius', borderRadius)
    energyButton.style('border-radius', borderRadius)
    gDPButton.style('border-radius', borderRadius)
    mentalButton.style('border-radius', borderRadius)
    key1.style('border-radius', borderRadius)
    key2.style('border-radius', borderRadius)
    key3.style('border-radius', borderRadius)
    key4.style('border-radius', borderRadius)
    key5.style('border-radius', borderRadius)

    // background color
    yButton.style('background-color', backgroundColor)
    xButton.style('background-color', backgroundColor)
    pauseButton.style('background-color', backgroundColor)
    energyButton.style('background-color', backgroundColor)
    gDPButton.style('background-color', backgroundColor)
    mentalButton.style('background-color', backgroundColor)
    key1.style('background-color', key1Bg)
    key2.style('background-color', key2Bg)
    key3.style('background-color', key3Bg)
    key4.style('background-color', key4Bg)
    key5.style('background-color', key5Bg)
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255)
}

function handleY() {

  if (pauseOn) {
    pauseOn = !pauseOn
  }

  if (xOn) {
    xOn = false
  }
  yOn = !yOn
}

function handleX() {

  if (pauseOn) {
    pauseOn = !pauseOn
  }

  if (yOn) {
    yOn = false
  }
  xOn = !xOn
}

function handlePause() {
  pauseOn = !pauseOn
}

function handleGDP() {

  if (mentalOn) {
    mentalOn = !mentalOn
  }

  if (energyOn) {
    energyOn = !energyOn
  }

  gDPOn = !gDPOn

}

function handleMental() {

  if (gDPOn) {
    gDPOn = !gDPOn
  }

  if (energyOn) {
    energyOn = !energyOn
  }

  mentalOn = !mentalOn
}

function handleEnergy() {

  if (gDPOn) {
    gDPOn = !gDPOn
  }

  if (mentalOn) {
    mentalOn = !mentalOn
  }

  energyOn = !energyOn

}

function draw(){

  xArray.shift()
  yArray.shift()
  zArray.shift()


  background(255)
  noStroke();


  if (xOn == true && 
      yOn == false ) {

      if (pauseOn) {

        translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);
        
        if (gDPOn) {
          texture(gdpImg)
        } else if (mentalOn) {
          texture(mentalImg) 
        } else if (energyOn) {
          texture(energyImg)
        } else {
          texture(img)
        }

      sphere(300)

      rotateY(currentPosY);

      } else {

  translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);
  
  rotateY(yAng/2000);
  
  if (gDPOn) {
    texture(gdpImg)
  } else if (mentalOn) {
    texture(mentalImg) 
  } else if (energyOn) {
    texture(energyImg)
  } else {
    texture(img)
  }


  sphere(300)

yAng = yAng + 10

      }

  }

  if (yOn == true && 
      xOn == false) {

        if (pauseOn) {

          translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);
          
          if (gDPOn) {
            texture(gdpImg)
          } else if (mentalOn) {
            texture(mentalImg) 
          } else if (energyOn) {
            texture(energyImg)
          } else {
            texture(img)
          }

          rotateX(currentPosX);
  
        sphere(300)
  
        
  
        } else {

    translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);
    rotateX(xAng/2000);

    if (gDPOn) {
      texture(gdpImg)
    } else if (mentalOn) {
      texture(mentalImg) 
    } else if (energyOn) {
      texture(energyImg)
    } else {
      texture(img)
    }

    sphere(300)

    xAng = xAng + 10

  }
  
    }

    if (yOn == false && 
        xOn == false ) {

          if (pauseOn) {

            translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);
            
            if (gDPOn) {
              texture(gdpImg)
            } else if (mentalOn) {
              texture(mentalImg) 
            } else if (energyOn) {
              texture(energyImg)
            } else {
              texture(img)
            }
    
          sphere(300)
    
          rotateX(currentPosX);
    
          } else {


    translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*200);

    if (gDPOn) {
      texture(gdpImg)
    } else if (mentalOn) {
      texture(mentalImg) 
    } else if (energyOn) {
      texture(energyImg)
    } else {
      texture(img)
    }

    sphere(300)

  }

    }

   

    if (xAng > 12400) {
      xAng = 0
    }

    if (yAng > 12400) {
      yAng = 0
    }

    if (zAng > 12400) {
      zAng = 0
    }

    xArray.push(xAng)
    yArray.push(yAng)
    zArray.push(zAng)

    yVal = yArray.values()
    
    if (yVal > 12400) {
      yVal = 0
    }

    currentPosY = yVal.next()

    xVal = xArray.values()

    if (xVal > 12400) {
      xVal = 0
    }

    currentPosX = xVal.next()

    zVal = zArray.values()

    if (zVal > 12400) {
      zVal = 0
    }

    currentPosZ = zVal.next()

    




}