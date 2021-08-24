var sea,ship;
var seaimg,shipImg;
function preload(){
  seaimg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-1.png",
                          "ship-2.png","ship-1.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");


  //Moving background
  sea=createSprite(400,200);
  sea.addImage(seaimg);
  sea.veloCityX= -5;
  sea.scale=0.3;

   

    
     ship=createSprite(130,200,30,30);
     ship.addAnimation("movingship",shipImg);
     ship.scale=0.25;

}

function draw() {
  background(0);
  sea.veloCityX = -3;


  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
 drawSprites();
}

