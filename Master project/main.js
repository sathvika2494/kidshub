var at = 0;
var song;
let bg;
var bgImage
var mode
var bi
var locationx
var locationy

function preload()
{
  bg = loadImage('Tap here! (1400 × 700 px).png');
  song = loadSound("mainSong.mp3");
  bgImage = loadImage('Tap here! (1400 × 700 px) (1).png')
  bi = loadImage("res\\mainMenu\\button1.png")
}

function setup() 
{
  createCanvas(1400, 700);
  song.play();
}

function draw() 
{
  switch(at)
  {
    //Case 0 pulls up the first page.
    case 0:
      firstPage();
      break;
    
    //Case 1 pulls up the nevigator 
    case 1:
      menu();
      break;
      
    //Case 2 = exercise 1
    case 2:
      background(200);
      break;

    //Case 3 = exercise 2
    case 3:
      background(100);
    

      break;
    //Case 4 = exercise 3
    case 4:
      background(50);
    

      break;
    //Case 5 = exercise 4
    case 5:
      background(0);
    

      break;
    // default:
    //   at = 0;
  }
}

function firstPage()
{
  background(bg);
}

function mouseClicked()
{
  switch(at)
  {
    case 0:
      at = 1;
      break;

    case 1:
      if(mouseX>244 && mouseY>70 && mouseX<634 && mouseY<305)
      {
        at = 2
      }
        else if(mouseX>745 && mouseY>70  && mouseX<1134   && mouseY<305  )
      {
        at = 3
      }
       else if(mouseX>244 && mouseY>370 && mouseX<634 && mouseY<605)
      {
        at = 4
      }
      else if(mouseX>745 && mouseY>370 && mouseX<1134  && mouseY< 605)
      {
       at = 5
      }
      break;
  }

}

function menu()
{ 
  background(bgImage)
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
