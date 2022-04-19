//scores array initialized 
let scores = [];
let i = 0;
let score = 0; 
let test = 0;
//songs array initialized
// let songs = [];
// let mode;

//game over text object
let txt = {
  _text: "GAME OVER!!!",
  _textScore: "Your score is: ",
  color: 255,
  stroke: 255,
  size: 58,
  size1: 24,
  x: 400,
  y: 350,
  x1: 1400,
  y1: 700,
}

let bordL;
let bordR;
//  function preload() {
//    myCar = loadImage("ex3_car.png");
//  }

function setup() {
  //storing the scores to use it later for //levelup function
  mode=0;
  for(let i=0; i<100;i++){
    test += 10;
    scores[i] = test;
 }
 
  //creating instance of Border class
  bordL = new Borders();
  bordR = new Borders();
  bordR.x = 1250;
  createCanvas(canv.w, canv.h);
  background(canv.col);
}
 
function draw() {
  //it will display the text until player hits //the ENTER
  if(mode===0){
    fill(txt.color);
    textSize(txt.size);
    text("Press the enter to start", txt.x, txt.y);
  }
  if(mode===1){
  background(canv.col);
  moveLines();
  moveTrees();
  design();
  moveCars();
  levelUp();
  fill(0);
  rect(0,0,1400,40);
  displayScore();
  }
  
}
//design function, drawing the objects, by //calling their draw methods
function design(){
  bordL.draw();
  bordR.draw();
  trees.drawE();
  myCar.draw();
  trees.drawR();
  trees2.drawE();
  trees2.drawR();
}
//car moving function
function moveCars(){

    //if the car3 in initial position randomize //the appearance by changing x value
  if(car1.y<0){
    car1.x = random(155,410);
    //color of cars randomized
    car1.col[1] = random(255);
    car1.col[2] = random(255);
    car1.col[3] = random(255);
  }
  
  if(car1.y===-50 || car2.y===-50 || car3.y===-50){
      score++;
  }
    //if the car3 in initial position randomize //the appearance by changing x value
  if(car2.y<0){
    car2.x = random(355,410);
    car2.col[1] = random(255);
    car2.col[2] = random(255);
    car2.col[3] = random(255);
    //console.log("debuging");
  }
  //if the car3 in initial position randomize //the appearance by changing x value
  if(car3.y<0){
    car3.x = random(655,410);
    car3.col[1] = random(255);
    car3.col[2] = random(255);
    car3.col[3] = random(255);
    //console.log("debuging");
  }
  if(car4.y<0){
    car4.x = random(755,410);
    car4.col[1] = random(255);
    car4.col[2] = random(255);
    car4.col[3] = random(255);
    //console.log("debuging");
  }
  if(car5.y<0){
    car5.x = random(1055,410);
    car5.col[1] = random(255);
    car5.col[2] = random(255);
    car5.col[3] = random(255);
    //console.log("debuging");
  }
  if(car6.y<0){
    car6.x = random(1255,410);
    car6.col[1] = random(255);
    car6.col[2] = random(255);
    car6.col[3] = random(255);
    //console.log("debuging");
  }
  //moving and drawing the cars, by using cars //methods
  myCar.move();
  car1.draw();
  car1.move();
  car2.draw();
  car2.move();
  car3.draw();
  car3.move();
  car4.draw();
  car4.move();
  car5.draw();
  car5.move();
  car6.draw();
  car6.move();

  //assigning colideCar function for car1, //passing arguement
  let collide = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car1.x, car1.y, car1.w, car1.h);
  //if colide returns true calls the stop function
  if(collide){
    //plays the crash song
    //songs[1].play();
    stop();
  }
  //assigning colideCar function for car2, //passing arguement
  let collide2 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car2.x, car2.y, car2.w, car2.h);
  //if colide returns true calls the stop function
  if(collide2){
    //plays the crash song
    //songs[1].play();
    stop();
  }
  //assigning colideCar function for car3, //passing arguement
    let collide3 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car3.x, car3.y, car3.w, car3.h);
  //if colide returns true calls the stop function
  if(collide3){
    //plays the crash song
    //songs[1].play();
    stop();
  }
  //assigning colideCar function for car4, //passing arguement
  let collide4 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car4.x, car4.y, car4.w, car4.h);
  //if colide returns true calls the stop function
  if(collide4){
    //plays the crash song
    //songs[1].play();
    stop();
  }
   //assigning colideCar function for car4, //passing arguement
   let collide5 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car5.x, car5.y, car5.w, car5.h);
   //if colide returns true calls the stop function
   if(collide5){
     //plays the crash song
     //songs[1].play();
     stop();
   }
   let collide6 = collideCar(myCar.x, myCar.y, myCar.w, myCar.h, car6.x, car6.y, car6.w, car6.h);
   //if colide returns true calls the stop function
   if(collide6){
     //plays the crash song
     //songs[1].play();
     stop();
   }
}

function collideCar(x, y, w, h, x2, y2, w2, h2) {
  //2d
  //add in a thing to detect rectMode CENTER
  if (x + w >= x2 &&    // r1 right edge past r2 left
      x <= x2 + w2 &&    // r1 left edge past r2 right
      y + h >= y2 &&    // r1 top edge past r2 bottom
      y <= y2 + h2) {    // r1 bottom edge past r2 top
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
//stops the game and displays the Game over
//and the final score
function stop(){
    background(0);
    stroke(txt.stroke);
    fill(txt.color);
    textSize(txt.size);
    text(txt._text, txt.x, txt.y);
    textSize(txt.size1);
    noStroke();
    text(`${txt._textScore}${score}`, txt.x1, txt.y1);
     noLoop();
     songs[0].stop()
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
    fill(txt.color);
    textSize(16);
  //displaying the score
    text(`YOUR SCORE: ${score}`, 50, 20);
  //displaying the speed 
    fill(txt.color);
    textSize(16);
    text(`YOUR SPEED: ${car1.sp}0 km/h `, 1200, 20);
}


//this function for increase the speed 
function levelUp(){
  //score is equal to the number in array speed //up
    if(score === scores[i])
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
      score++;
    }
}

function keyPressed(){
    if(keyCode===ENTER && mode===0){
        mode=1;
        //playing the first song;
       //songs[0].play();

    }
}