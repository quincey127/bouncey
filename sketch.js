 var fixedrectangle,movingrectangle
 function setup() {
  createCanvas(800,600);

  fixedrectangle=createSprite(500,200,50,50)
fixedrectangle.shapeColor=("red")
fixedrectangle.velocityY=+1

movingrectangle=createSprite(500,400,60,60)
movingrectangle.shapeColor=("darkblue")
movingrectangle.velocityY=-1
}



 function draw() {
  background("pink"); 
  
  
 bounceOff(movingrectangle,fixedrectangle);
  drawSprites();

}

