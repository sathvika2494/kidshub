//to do:  document code
//        make directories for art, and then change file paths in the code


var bg1
var bg2
var bearBlow
var currentBG

//---Bubbles--- :D

var bubbleArray = []    //stores bubble sprites
var pos = []            //stores locations of each bubble. x1,y1,x2,y2,....
var num = 150     //number of bubbles to be spawned



//-------------

//--collision_Detection-
var active = []         // stores if a bubble is veing hovered over

var crosshair           //cursor

//---------

var score
var timer
var gameStatus = 1         //1 means main menu ,2 means load, 3 means game , 4 means game over

//---ui
var logo
var startGameButton
var retryButton
var exitButton
//------------
var currentGroup
var group1
var group2
var group3
var groupLoad

var timer2

var startSound
var popSound
var overSound
var ost

function preload() 
{
  bg1 = loadImage('art\\bg1.png')
  bg2 = loadImage('art\\bg2.png')
 // bg3 = loadImage('art\\bg3.png')

  bearBlow = createSprite(1400,700)
  bearBlow.addAnimation('blowing','art\\bearBlow1.png','art\\bearBlow6.png')

  //---ui

  logo = createSprite(400,200)
  logo.addAnimation('idle','art\\logo.png')

  startGameButton = createSprite(300,200)
  startGameButton.addAnimation('idle','art\\button1.png')

  exitButton = createSprite(300,200)
  exitButton.addAnimation('idle','art\\button2.png')

  retryButton = createSprite(300,200)
  retryButton.addAnimation('idle','art\\button3.png')
  //------------
  
  //bubbles
  for (var i = 0; i< num; i++) {

    bubbleArray[i] = createSprite(128,128)
    bubbleArray[i].addAnimation('normal','art\\bubbleAnim1.png')
    bubbleArray[i].addAnimation('popping','art\\bubbleAnim1.png','art\\bubbleAnim5.png')

    active[i] = false

    pos[i*2] = 0
    pos[i*2+1] = 0

  }
  
  //--------------

  //crosshair

  crosshair = createSprite(2,2)
  crosshair.addAnimation('normal', 'art\\crosshair.png')
  crosshair.changeAnimation('normal')
 
  startSound = loadSound('sounds\\tring.mp3')
  popSound = loadSound('sounds\\pop.mp3')
  overSound = loadSound('sounds\\wow.mp3')
  ost = loadSound('sounds\\theme.mp3')

  
}



function setup() {
  createCanvas(1400, 700);
  frameRate(24)

  group1 = new Group()
  group2= new Group()
  group3= new Group()
  groupLoad = new Group()

  timer = 30
  timer2 = 2.9
  score = 0


  group1.add(logo)
  group1.add(startGameButton)
  group1.add(exitButton)

  groupLoad.add(bearBlow)

  //assigning default animations for bubbles
  for (var i = 0; i< num; i++) {
    bubbleArray[i].changeAnimation('normal')   
    group2.add(bubbleArray[i]) 
  }



  //randomising bubble positions
  for (var i = 0; i< num*2; i+=2) {
    pos[i] = random(0,1400)
    pos[i+1] = random(0,4000)
  }


  group3.add(retryButton)

  logo.position.x = 1000
  startGameButton.position.y = 100

  startGameButton.position.x = 1000
  startGameButton.position.y = 400

  exitButton.position.x = 1000
  exitButton.position.y = 600

  bearBlow.position.x = 700
  bearBlow.position.y = 350



  retryButton.position.x = 600
  retryButton.position.y = 500

  ost.play()
  

}

function draw() {

  gameLoop()

  ui()

}

function ui()
{
  strokeWeight(15)
  stroke("#fec28c")
  fill("#920244")

  if(gameStatus == 2)
  {
    /*textSize(400)
    
    if (timer2 > 1)
    {
      text((int)(timer2),500,500)
    }
    else
    {
      
      text("GO!",300,500)
    }*/


  }

  else if(gameStatus == 3)
  {
    textSize(40)
    text("SCORE: "+ score,500,50)
    text((int)(timer),900,50)
  }

  else if(gameStatus == 4)
  {
    textSize(40)
    text("GAME OVER \nScore:"+ score,500,300)
  }
}

function gameLoop()
{
  
  if (gameStatus == 1)
  {
    startScreen()
    currentBG = bg1
    currentGroup = group1
  }

  else if(gameStatus == 2)
  {
    loadScreen()
    currentGroup = groupLoad
  }
  else if(gameStatus  == 3)
  {
   gameScreen()
   currentBG = bg2
   currentGroup = group2
  }
  else if(gameStatus  == 4)
  {
   endScreen()
   currentBG = "#fec28c"
   currentGroup = group3
  }

  crosshair.position.x = mouseX
  crosshair.position.y = mouseY

  background(currentBG)
 drawSprites(currentGroup)
}



function startScreen()
{
  if (crosshair.overlap(startGameButton))
  {
    startGameButton.scale = 1.15
    if(mouseWentDown(LEFT))
    {
      
      gameStatus = 2
      
    }

  }
  else
  {
    startGameButton.scale = 1
  }
  if (crosshair.overlap(exitButton))
  {
    exitButton.scale = 1.15
    if(mouseWentDown(LEFT))
    {
      
      mainMenu()
      
    }
  }
  else
  {
    exitButton.scale = 1
  }

}

function loadScreen()
{
  
  timer2-=1/24
  
  if (timer2 <0)
  {
    
    gameStatus = 3
  }
}

function gameScreen()
{
  for(i = 0; i < num ; i++)
  {
    pos[i*2+1]-=5
    bubbleArray[i].position.x = pos[2*i]
    bubbleArray[i].position.y = pos[2*i+1]

    if(bubbleArray[i].overlap(crosshair) && mouseWentDown(LEFT))
    {
      bubbleArray[i].changeAnimation('popping')
      bubbleArray[i].life = 10
      score+=1

      var t = random(0,1)
      popSound.play()
      

    }

  }

  timer-=1/24

  if (timer<0)
  {
    gameStatus = 4
    overSound.play()
  }
}


function endScreen()
{
  if ( retryButton.overlap(crosshair))
  {
    retryButton.scale = 1.15
    if(mouseWentDown(LEFT))
    { 

      ost.stop()
      for (var i = 0; i< num; i++) {
        bubbleArray[i].life = 0
        bubbleArray[i] = createSprite(128,128)
        bubbleArray[i].addAnimation('normal','art\\bubbleAnim1.png')
        bubbleArray[i].addAnimation('popping','art\\bubbleAnim1.png','art\\bubbleAnim5.png') 
        pos[i*2] = random(0,1400)
        pos[i*2+1] = random(0,4000)
        group2.add(bubbleArray[i]) 

      }

      ost.play()
    
    
      //randomising bubble positions
   
      timer = 30
      timer2 = 2.9
      score = 0
      gameStatus = 1

    }

  }
  else
  {
    retryButton.scale = 1
  }

}


function mainMenu()
{
  print("main menu")
}