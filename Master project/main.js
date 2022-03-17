var at = 0;
var song;
let bgFirst;
var bgMainMenu;
var bi
var locationx
var locationy

/**
 * @author Aphimon Sangmanee, Abhyuday Srivastava
 * 
 * @description This function will preload all of the necessary files 
 * for the program.
 */
function preload()
{
  bgFirst = loadImage('firstPic.png');
  song = loadSound("mainSong.mp3");
  bgMainMenu = loadImage('nevigatorPic.png')
  bi = loadImage("res\\mainMenu\\button1.png")
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This function will setup the page to be 
 * ready to use.
 */
function setup() 
{
  createCanvas(1400, 700);
  song.setVolume(1);
  song.play();
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This function will execute 30 times a second.
 */
function draw() 
{
  switch(at)
  {
    //Case 0 pulls up the first page.
    case 0:
      firstPage();
      break;
    
    //Case 1 pulls up the mainMenu 
    case 1:
      mainMenu();
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

/**
 * @author Aphimon Sangmanee, Abhyuday Srivastava
 * 
 * @description This mouse clicked will first determine the page.
 * Once the page is identified, the program will behave according to 
 * the interface shown in the page.
 */
function mouseClicked()
{
  switch(at)
  {
    // Tab First page to go to Main menu
    case 0:
      at = 1;
      break;

    // Choose exercise
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

/**
 * @author Aphimon Sangmanee
 * 
 * @description This is the function that will bring up the first page.
 * Users need to click on the first page in order to go to the main manu.
 * 
 */
function firstPage()
{
  background(bgFirst);
}

/**
 * @author Abhyuday Srivastava
 * 
 * @description This is the main menu that will bring users to each exercises.
 */
function mainMenu()
{ 
  background(bgMainMenu)
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


