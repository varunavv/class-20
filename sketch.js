var  movingbox,fixedbox



function setup() {
  createCanvas(800,400);
movingbox= createSprite(400, 200, 50, 50);
fixedbox= createSprite(400,200,50,40);
movingbox.shapeColor="red"
fixedbox.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  movingbox.x=World.mouseX
  movingbox.y=World.mouseY;
if(movingbox.x-fixedbox.x<=fixedbox.width/2+movingbox.width/2&&fixedbox.x-movingbox.x<fixedbox.width/2+movingbox.width/2&&movingbox.y-fixedbox.y<=fixedbox.height/2+movingbox.height/2&&fixedbox.y-movingbox.y<fixedbox.height/2+movingbox.height/2)

{
  
  movingbox.shapeColor="green"
  fixedbox.shapeColor="green"


}else{
movingbox.shapeColor="red"
fixedbox.shapeColor="red"
}
  
  drawSprites();
}