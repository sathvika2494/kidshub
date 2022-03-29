
//TO DO
// rubbing the cat will play a soap applying animation and will add more bubbles to the screen. the user can sacrifice time for more bubble spawns
// for the potential of popping more bubbles

//---Bubbles--- :D

var bubbleArray = []    //stores bubble sprites
var pos = []            //stores locations of each bubble. x1,y1,x2,y2,....
var num = 40            //number of bubbles to be spawned

//-------------

//--collision_Detection-
var active = []         // stores if a bubble is veing hovered over

var crosshair           //cursor

//---------

var score = 0
var time = 30
function preload()
{
  
  //assigning sprites to every bubble and initialising other values
  for (var i = 0; i< num; i++) {
    bubbleArray[i] = createSprite(64,64)
    bubbleArray[i].addAnimation('normal','art\\bubble.png')
    bubbleArray[i].addAnimation('popping','art\\bubbleAnim1.png','art\\bubbleAnim5.png')

    active[i] = false

    pos[i*2] = 0
    pos[i*2+1] = 0
  }
  
  //assigning a sprite to the crosshair
  crosshair = createSprite(2,2)
  crosshair.addAnimation('normal', 'art\\crosshair.png')
 
}



function setup() {
  createCanvas(1400, 700);
  frameRate(24)

  //assigning default animations for bubbles
  for (var i = 0; i< num; i++) {
    bubbleArray[i].changeAnimation('normal')    
  }

  //randomising bubble positions
  for (var i = 0; i< num*2; i+=2) {
    pos[i] = random(0,1400)
    pos[i+1] = random(0,700)
  }

}

function draw() {
  time = time - 1/24
  background(220);

  crosshairDisplay()

  bubbleGenerator()

  checkCollision()
 
  burstBubble()

  scoreDisplay()

  drawSprites()

}


function bubbleGenerator()
{
  
  for (var i = 0; i< num; i++) {
    bubbleArray[i].position.x = pos[2*i]
    bubbleArray[i].position.y = pos[2*(i+1)]
  }  

}

function checkCollision()
{
  for(i = 0; i < num ; i++)
  {
    if(bubbleArray[i].overlap(crosshair))
    {
    active[i] = true
    
    }

    else
    {
      active[i] = false
    }
  }



}

function burstBubble()
{
  for(i = 0 ; i < num ; i++)
  {
    if (active[i] == true && mouseWentDown(LEFT))
   {
    
    bubbleArray[i].changeAnimation('popping')
    bubbleArray[i].life = 10
    score+=1

    }
  }
 

}

function scoreDisplay()
{
  textSize(40)
  text("SCORE: "+ score,500,50)
  text((int)(time),900,50)
}

function crosshairDisplay()
{
  crosshair.position.x = mouseX
  crosshair.position.y = mouseY
  crosshair.changeAnimation('normal')
}