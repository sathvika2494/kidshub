//Trees object

let trees = {
    ex: 2,
    ey: 20,
    ew: 150,
    eh: 200,
    esp: 5,
   //left Tree head drawing
    drawE: function (){
      //noStroke();
        fill("#1e704a");
        image(ex3_tree, this.ex, this.ey, this.ew, this.eh);
    },
  //moving the trees head
    moveE: function(){
      this.ey+=this.esp;
      if(this.ey>height){
        this.ey = -100;
        //this.ry = -70;
      }
    },
    
    drawR: function(){
     
    },
      moveR: function(){
      this.ry+=this.rsp;
    }
}

let trees2 = {
    ex: 1250,
    ey: 820,
    ew: 150,
    eh: 200,
    esp: 5,
  //right tree head
    drawE: function (){
      //noStroke();
        fill("#1e704a");
        image(ex3_tree, this.ex, this.ey, this.ew, this.eh);
    },
  //right tree head is moving
    moveE: function(){
      this.ey+=this.esp;
      if(this.ey>height){
        this.ey = -100;
        //this.ry = -70;
      }
    },
   
    drawR: function(){
     
    },//right tree trunk is moving
      moveR: function(){
      this.ry+=this.rsp;
    }
}