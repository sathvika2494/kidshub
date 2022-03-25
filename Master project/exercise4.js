var ex4At = 0;
var ex4_BGStartPage;
var ex4_BGPlayPage;
var ex4_BGScorePage;
var ex4_songFirstPage;
var ex4_songPalyPage;
var monster;
var house;
let fruits = [];
let garbages = [];

////////// Start Page //////////////
var ex4_playbutton;
var ex4_backbutton;
var ex4_buttonPlay1;
var ex4_buttonPlay2;
var ex4_buttonBack1;
var ex4_buttonBack2;

/////////// PlayPage ///////////////
var ex4_gameSpeed = 5;
var ex4_speedx1 = 0;
var ex4_speedx2;
var ex4_fruitShow;
var ex4_f0;
var ex4_f1;
var ex4_f2;
var ex4_f3;
var ex4_f4;
var ex4_f5;
var ex4_f6;
var ex4_f7;
var ex4_f8;
var ex4_f9;
var ex4_f10;
var ex4_f11;
var ex4_f12;
var ex4_f13;
var ex4_f14;
var ex4_f15;
var ex4_f16;
var ex4_f17;
var ex4_f;
var ex4_g1;
var ex4_g2;
var ex4_g3;
var ex4_g4;
var ex4_g5;
var ex4_g;

function preload()
{
  ex4_BGStartPage = loadImage('background.png')
  ex4_buttonPlay1 = loadImage('ButtonTest.png')
  ex4_buttonPlay2 = loadImage('ButtonTest1.png')
  ex4_buttonBack1 = loadImage('ButtonTest.png')
  ex4_buttonBack2 = loadImage('ButtonTest1.png')
  ex4_f0 = loadImage('1.png');
  ex4_f1 = loadImage('2.png');
  ex4_f2 = loadImage('3.png');
  ex4_f3 = loadImage('4.png');
  ex4_f4 = loadImage('5.png');
  ex4_f5 = loadImage('6.png');
  ex4_f6 = loadImage('7.png');
  ex4_f7 = loadImage('8.png');
  ex4_f8 = loadImage('9.png');
  ex4_f9 = loadImage('10.png');
  ex4_f10 = loadImage('11.png');
  ex4_f11 = loadImage('12.png');
  ex4_f12 = loadImage('13.png');
  ex4_f13 = loadImage('14.png');
  ex4_f14 = loadImage('15.png');
  ex4_f15 = loadImage('16.png');
  ex4_f16 = loadImage('17.png');
  ex4_g1 = loadImage('1g.png');
  ex4_g2 = loadImage('2g.png');
  ex4_g3 = loadImage('3g.png');
  ex4_g4 = loadImage('4g.png');
  ex4_g5 = loadImage('5g.png');
}

function setup() 
{
  createCanvas(1400, 700);
  ex4_speedx2 = width;
  monster = new Monster();
  house = new House();
  ex4_f = [ex4_f0,ex4_f1,ex4_f2,ex4_f3,ex4_f4,ex4_f5,ex4_f6,
    ex4_f7,ex4_f8,ex4_f9,ex4_f10,ex4_f11,ex4_f12,ex4_f13,ex4_f14,ex4_f15,ex4_f16];
  ex4_g = [ex4_g1,ex4_g2,ex4_g3,ex4_g4,ex4_g5]
}

function draw() 
{
  switch(ex4At)
  {
    case 0:
      startPage();
      break;
    case 1:
      playPage();
      break;
    case 2:
      scorePage();
      break;
    default:
      ex4At = 0;
  }
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This page is the first page the user will see
 * after clicking the 4th exercise on the main menu.
 * This page also contain the information and fuctionality such as
 * Blurry background,
 * Show the top score,
 * Start button, and
 * Return to MainPage button
 */
function startPage()
{
  background(ex4_BGStartPage);
  fill(0);
      rect(350,50,700,250);
  mouseOver1();

  if(ex4_playbutton == ex4_buttonPlay1)
  {
    image(ex4_playbutton,550,375,300,75);
  }
  else
  {
    image(ex4_playbutton,537.5,367.5,325,100);
  }

  if(ex4_backbutton == ex4_buttonBack1)
  {
    image(ex4_backbutton,550,475,300,75);
  }
  else
  {
    image(ex4_backbutton,537.5,467.5,325,100);
  } 
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description This page contains all of the implementation for the playPage
 * 
 */
function playPage()
{
  if(random(1) < (0.01))
  {
    fruits.push(new Fruits(ex4_gameSpeed,ex4_f[int(random([0],[17]))]));
  }

  if(random(1) < (0.005))
  {
    garbages.push(new Garbage(ex4_gameSpeed,ex4_g[int(random([0],[5]))]));
  }

  backgroundRunning();
  // house.show();
  monster.show();
  monster.move();

  for(let f of fruits)
  {
    f.move();
    f.show();
    if(monster.hits(f))
    {
      //noLoop(); 
    }
  }

  for(let g of garbages)
  {
    g.move();
    g.show();
    if(monster.hits(g))
    {
      noLoop(); 
    }
  }
  
}

function keyPressed()
{
  switch(ex4At)
  {
    case 0:
      break;
    case 1:
      if(key == ' ')
      {
        monster.jump();
      }
      break;
    case 2:
      break;   
    default:
      ex4At = 0;
  }
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description
 */
function scorePage()
{
  background(ex4_BGStartPage);
}

function mouseClicked()
{
  switch(ex4At)
  {
    case 0:
      if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
      {
        ex4At = 1;
      }
        else if(mouseX>550 && mouseY>475  && mouseX<850  && mouseY<550  )
      {
        at = 1;
      }
      break;
    case 1:

      break;
    case 2:
      
      break;
    default:
      ex4At = 0;
  }
}

function mouseOver1()
{
  switch(ex4At)
  {
    case 0:
      if(mouseX>550 && mouseY>375 && mouseX<850 && mouseY<450)
      {
        ex4_playbutton = ex4_buttonPlay2;
      }
      else
      {
        ex4_playbutton = ex4_buttonPlay1;
      }

      if(mouseX>550 && mouseY>475  && mouseX<850  && mouseY<550  )
      {
        ex4_backbutton = ex4_buttonBack2;
      }
      else
      {
        ex4_backbutton = ex4_buttonBack1;
      }
      break;
    default:
      ex4At = 0;
  }
}

function returnToMain(at)
{
  at = 1;
}

function returnToStart()
{
  ex4At = 0;
}

/**
 * @author Aphimon Sangmanee
 * 
 * @description
 */
function backgroundRunning()
{
  image(ex4_BGStartPage, ex4_speedx1, 0, width, height);
  image(ex4_BGStartPage, ex4_speedx2, 0, width, height);
  
  ex4_speedx1 -= ex4_gameSpeed;
  ex4_speedx2 -= ex4_gameSpeed;
  
  if (ex4_speedx1 < -width){
    ex4_speedx1 = width;
  }
  if (ex4_speedx2 < -width){
    ex4_speedx2 = width;
  }
}




