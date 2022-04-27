//driving car

let myCar = {
    x: 400,
    sp: 10,
    y: 425,
    w: 50,
    h: 65,
    //carIm: loadImage("ex3_car.png"),
    
     draw: function(c){
    //   noStroke();
       fill(0,0,200);
      image(c,this.x, this.y, this.w, this.h);
      //rect(this.x, this.y, this.w, this.h);
      // stroke("white");
      //  line(this.x+10, this.y, this.x+10, this.y+55);
      //  line(this.x+30, this.y, this.x+30, this.y+55);
       fill(0,0,255);
       stroke(0);
       //rect(this.x+5, this.y+10,this.w-10, this.h-20);
     },

    //this is move function
    move: function(){
        //while right arrow keyispreesed move the car right and car is not of the road
        if((keyIsPressed) && (keyCode===39) &&     (this.x+this.w!==width-150)){
      this.x+=this.sp;
    }
    ////while right arrow keyispreesed move the car to the left and car is not out of the road
    if((keyIsPressed) && (keyCode===37) && (this.x!==150)){
      this.x-=this.sp;
    }
    },

    resetPosition: function(){
      this.x = 400;
      this.sp = 10;
      this.y = 425;
      this.w = 50;
      this.h = 65;
    }
  }
  //enemies car1
  let car1 = {
    x: 200,
    sp: 8,
    y: -50,
    w: 50,
    h: 75,
   // col: [255, 0, 0],
    draw: function(){
     // fill(this.col[0], this.col[1], this.col[2]);
      image(ex3Car1Im, this.x, this.y, this.w, this.h);
    },
    move: function(){
      //move the car1
        this.y+=this.sp;
      //if the car1 is out of the canvas bring it back to the top
    if(this.y>height){
      //car1 y value initialize to -50; 
      this.y=-50;
      ex3score++;
      }
    },
    resetPosition: function(){
      this.x = 200;
      this.sp = 8;
      this.y = -50;
      this.w = 50;
      this.h = 75;
    }
  }
  //enemies car2
  let car2 = {
    x: 400,
    sp: 8,
    y: -150,
    w: 50,
    h: 75,
    //col: [255, 0, 0],
    draw: function(){
      //fill(this.col[0], this.col[1], this.col[2]);
      image(ex3Car2Im, this.x, this.y, this.w, this.h);
    },
    move: function(){
      //move the car2
        this.y+=this.sp;
      //if the car2 is out of the canvas bring it back to the top
    if(this.y>height){
      this.y=-50;
      ex3score++;
      }
    },
    resetPosition: function(){
      this.x = 400;
      this.sp = 8;
      this.y = -150;
      this.w = 50;
      this.h = 75;
    }
  }
  
  let car3 = {
    x: 600,
    sp: 8,
    y: -350,
    w: 50,
    h: 75,
    //col: [255, 0, 0],
    draw: function(){
      //fill(this.col[0], this.col[1], this.col[2]);
      image(ex3Car3Im, this.x, this.y, this.w, this.h);
    },
    move: function(){
      //move the car3
        this.y+=this.sp;
      //if the car3 is out of the canvas bring it back to the top
    if(this.y>height){
      this.y=-50;
      ex3score++;
      }
    },
    resetPosition: function(){
      this.x = 600;
      this.sp = 8;
      this.y = -350;
      this.w = 50;
      this.h = 75;
    }
  }

  let car4 = {
    x: 800,
    sp: 8,
    y: -550,
    w: 50,
    h: 75,
    //col: [255, 0, 0],
    draw: function(){
     // fill(this.col[0], this.col[1], this.col[2]);
      image(ex3Car4Im, this.x, this.y, this.w, this.h);
    },
    move: function(){
      //move the car3
        this.y+=this.sp;
      //if the car3 is out of the canvas bring it back to the top
    if(this.y>height){
      this.y=-50;
      ex3score++;
      }
    },
    resetPosition: function(){
      this.x = 800;
      this.sp = 8;
      this.y = -550;
      this.w = 50;
      this.h = 75;
    }
  }
  let car5 = {
    x: 1000,
    sp: 8,
    y: -750,
    w: 50,
    h: 75,
   // col: [255, 0, 0],
    draw: function(){
      //fill(this.col[0], this.col[1], this.col[2]);
      image(ex3Car5Im, this.x, this.y, this.w, this.h);
    },
    move: function(){
      //move the car3
        this.y+=this.sp;
      //if the car3 is out of the canvas bring it back to the top
    if(this.y>height){
      this.y=-50;
      ex3score++;
      }
    },
    resetPosition: function(){
      this.x = 1000;
      this.sp = 8;
      this.y = -750;
      this.w = 50;
      this.h = 75;
    }
  }
  let car6 = {
    x: 1200,
    sp: 8,
    y: -1000,
    w: 50,
    h: 75,
    //col: [255, 0, 0],
    draw: function(){
     // fill(this.col[0], this.col[1], this.col[2]);
      image(ex3Car6Im, this.x, this.y, this.w, this.h);
    },
    move: function(){
      //move the car3
        this.y+=this.sp;
      //if the car3 is out of the canvas bring it back to the top
    if(this.y>height){
      this.y=-50;
      ex3score++;
      }
    },
    resetPosition: function(){
      this.x = 970;
      this.sp = 8;
      this.y = -1000;
      this.w = 50;
      this.h = 75;
    }
  }