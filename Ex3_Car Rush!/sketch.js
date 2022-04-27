//initialising variables
let ex3scores = [];
let i = 0;
let ex3score = 0; 
let ex3test = 0;
let ex3mode;
var ex3carIm;
var ex3buttonStart;
var ex3buttonBack;
var ex3buttonMainMenu;
var ex3Instructions;
var ex3Title;
var ex3Car1Im;
var ex3Car2Im;
var ex3Car3Im;
var ex3Car4Im;
var ex3Car5Im;
var ex3Car6Im;
var ex3GameOver;
var ex3restart = false;
var ex3restart1 = false;
let ex3collide = false;
let ex3collide2 = false;
let ex3collide3 = false;
let ex3collide4 = false;
let ex3collide5 = false;
let ex3collide6 = false;
let ex3count =100001;


//Display Game Over
 let ex3txt = {
   ex3_textScore: "Your score is: ",
   color: 255,
   stroke: 255,
   size: 58,
   size1: 24,
   x: 400,
   y: 350,
   x1: 1400,
   y1: 700,
 }


 //Loading images
let bordL;
let bordR;
function preload()
{
  ex3carIm = loadImage("ex3_car.png");
  ex3buttonStart = loadImage("ex3Start.png");
  ex3buttonBack = loadImage("ex3BackToStart.png");
  ex3buttonMainMenu = loadImage("ex3MainMenu.png");
  ex3_tree = loadImage("ex3Tree.png")
  ex3GameOver = loadImage("GameOverex3.png");
  ex3Car1Im = loadImage("Car1Ex3.png");
  ex3Car2Im = loadImage("Car2Ex3.png");
  ex3Car3Im = loadImage("Car3Ex3.png");
  ex3Car4Im = loadImage("Car4Ex3.png");
  ex3Car5Im = loadImage("Car5Ex3.png");
  ex3Car6Im = loadImage("Car6Ex3.png");
  ex3Title =  loadImage("Ex3Title.png");
  ex3Instructions = loadImage("Ex3Instructions.png");
}

function setup() {
  //storing the scores
  ex3mode=0;
  for(let i=0; i<100;i++){
    ex3test += 10;
    ex3scores[i] = ex3test;
 }
 
  
  bordL = new Borders();
  bordR = new Borders();
  bordR.x = 1250;
  createCanvas(canv.w, canv.h);
  background(canv.col);
}
 
//Start page
function draw() 
{
  
  if(ex3mode===0)
  {
    
    background(canv.col);
    image(ex3buttonStart,820,125,350,150);
    image(ex3buttonMainMenu,750,400,500,150);
    image(ex3Title, 150, 90, 450, 350);
    image(ex3Instructions,150, 485, 450, 150);
    

  }
  if(ex3mode===1)
  {
  background(canv.col);
  moveLines();
  moveTrees();
  design();
  moveCars();
  levelUp();
  fill(0);
  rect(0,0,1400,80);
  displayScore();
  }

  if(ex3mode===2)
  {
    /*if(ex3restart1)
    {
      ex3mode === 1;
    }*/
    background(0);

    image(ex3buttonBack,370,440,650,150);
    displayScore();
    image(ex3GameOver, 500, 150, 400, 240);

  }
  
}

//////////////////////////// common action ////////////////////
function mouseClicked()
{
  switch(ex3mode)
  {
    case 0:
      if(mouseX > 820 && mouseY > 125 && mouseX < 1170 && mouseY < 275)
      {
        ex3mode = 1;
      }
      if(mouseX > 750 && mouseY > 400 && mouseX < 1250 && mouseY < 550)
      {
        at = 1;
      }
      break;

    case 1:

      break;

    case 2:
      if(mouseX > 370 && mouseY > 440 && mouseX < 1020 && mouseY < 590)
      {
        ex3restart = true;
        //ex3count = 0;
        ex3mode = 0;
        ex3score = 0;
        ex3collide = false;
        ex3collide2 = false;
        ex3collide3 = false;
        ex3collide4 = false;
        ex3collide5 = false;
        ex3collide6 = false;
        myCar.resetPosition();
        car1.resetPosition();
        car2.resetPosition();
        car3.resetPosition();
        car4.resetPosition();
        car5.resetPosition();
        car6.resetPosition();
        i = 0;
        _line.sp = 5;
      _line1.sp = 5;
      }
      break;
  }
}

function design(){
  bordL.draw();
  bordR.draw();
  trees.drawE();
  myCar.draw(ex3carIm);
  trees.drawR();
  trees2.drawE();
  trees2.drawR();
}
//car moving function
function moveCars(){

   //generating random cars

  if(car1.y<0){
    car1.x = random(255,310);
  }
  
  
   
  if(car2.y<0){
    car2.x = random(455,310);
  }

  
  if(car3.y<0){
    car3.x = random(655,610);
  }

   
  if(car4.y<0){
    car4.x = random(855,610);
  }

   
  if(car5.y<0){
    car5.x = random(1055,910);
  }

  
  if(car6.y<0){
    car6.x = random(1150,910);
  }

  //moving and drawing the cars
  myCar.move();
    car1.draw(ex3Car1Im);
    car1.move();
    car2.draw(ex3Car2Im);
    car2.move();
    car3.draw(ex3Car3Im);
    car3.move();
    car4.draw(ex3Car4Im);
    car4.move();
    car5.draw(ex3Car5Im);
    car5.move();
    car6.draw(ex3Car6Im);
    car6.move();

  ex3collide = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car1.x, car1.y, car1.w, car1.h);
  ex3collide2 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car2.x, car2.y, car2.w, car2.h);
  ex3collide3 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car3.x, car3.y, car3.w, car3.h);
  ex3collide4 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car4.x, car4.y, car4.w, car4.h);
  ex3collide5 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car5.x, car5.y, car5.w, car5.h);
  ex3collide6 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car6.x, car6.y, car6.w, car6.h);

  if( ex3collide || ex3collide2 || ex3collide3 || ex3collide4 || ex3collide5 || ex3collide6 ){
    ex3mode = 2;
    ex3restart = false;
    console.log("collided: ", ex3collide, ex3collide2, ex3collide3, ex3collide4, ex3collide5, ex3collide6);
  }  
}

function collideCar(x, y, w, h, x2, y2, w2, h2) {

  //adding in conditions to detect main car
  if (x + w >= x2 &&    
      x <= x2 + w2 &&    
      y + h >= y2 &&    
      y <= y2 + h2) {    
        return true;
  }
  return false;
}
//moves the lines
function moveLines(){
  _line.draw();
  _line.move();
  _line1.draw();
  _line1.move();
}
//stops the game and displays final score and final speed

function stop()
{
    background(0);
    stroke(ex3txt.stroke);
    fill(ex3txt.color);
    textSize(ex3txt.size);

    image(ex3buttonBack,500,400,400,100);
    // text(txt._text, txt.x, txt.y);
    // textSize(txt.size1);
    // noStroke();
    // text(`${txt._textScore}${score}`, txt.x1, txt.y1);
    noLoop();
}
//trees moving function
function moveTrees(){
  trees.moveE();
  trees.moveR();
  trees2.moveE();
  trees2.moveR();
}

function displayScore(){
    noStroke();
    fill(ex3txt.color);
    textSize(32);
  //displaying the score
    text(`YOUR SCORE: ${ex3score}`, 50, 50);
  //displaying the speed 
    fill(ex3txt.color);
    textSize(32);
    text(`YOUR SPEED: ${car1.sp}0 km/h `, 1000, 50);
}


//this function for increase the speed 
function levelUp(){
  
    if(ex3score === ex3scores[i])
    {
      
      console.log("speeding");
      //increment every objects speed by 1
      car1.sp++;
      car2.sp++;
      car3.sp++;
      car4.sp++;
      car5.sp++;
      car6.sp++;

      trees.esp++;
      trees.rsp++;
      trees2.esp++;
      trees2.rsp++;
      _line.sp++;
      _line1.sp++;
      i++;
      //ex3score++;
    }
}

function keyPressed(){
    if(keyCode===ENTER && ex3mode===0){
        ex3mode=1;
        
    }
}