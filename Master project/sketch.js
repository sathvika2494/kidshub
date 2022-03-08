var bgImage
var mode
var bi
var locationx
var locationy
function preload()
{
  bgImage = loadImage("res\\mainMenu\\bg.png")
  bi = loadImage("res\\mainMenu\\button1.png")
}
function setup() //only executes once, executes first
{
  createCanvas(1400, 700);
  mode = 0
  menu()
}

function draw()  //executes after setup, 30 times a second
{ 
  background(bgImage)
  
  
  if (mode == 0)
  {
    menu()
  }
  else if (mode == 1)
  {
    excerciseOne()
  }
  else if (mode == 2)
  {
    excerciseTwo()
  }
  else if (mode == 3)
  {
    excerciseThree()
  }
  else if (mode == 4)
  {
    excerciseFour()
  }
}


function menu()
{ 
  
  fill("black")
  textSize(21)
  text1 = ["excercise 1","excercise 2","excercise 3","excercise 4"]
  textSize1 = 20
  locationx = [525,1025,525,1025]
  locationy = [350,350,650,650]


  offset = 280
  for(i = 0; i<4;i++)
  {
    image(bi,locationx[i] - offset,locationy[i] - offset)
    text(text1[i],locationx[i],locationy[i])
  }

}

function mouseClicked()
{
  print(mouseX + " " + mouseY)
  if(mode == 0)
  {
    if(mouseX>244 && mouseY>70 && mouseX<634 && mouseY<305)
    {
       mode = 1
    }
    else if(mouseX>745 && mouseY>70  && mouseX<1134   && mouseY<305  )
    {
       mode = 2
    }
    else if(mouseX>244 && mouseY>370 && mouseX<634 && mouseY<605)
    {
       mode = 3
    }
    else if(mouseX>745 && mouseY>370 && mouseX<1134  && mouseY< 605)
    {
       mode = 4
    }
   
  }
  
}
function excerciseOne()
{

  mode = 1
  background("red")
}

function excerciseTwo()
{
  mode = 2
  background("yellow")
}

function excerciseThree()
{
  mode = 3
  background("green")
}

function excerciseFour()
{
  mode = 4
  background("blue")
}
