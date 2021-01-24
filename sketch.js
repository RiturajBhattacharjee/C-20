function setup() {
  createCanvas(800,400);
  target=createSprite(400, 200, 50, 50);
  target1=createSprite(350, 150, 50, 50);
}

function draw() {
  background("yellow");  
  target1.x=mouseX
  target1.y=mouseY
  if(abs(target.x-target1.x)<=target.width/2+target1.width/2 &&
  abs(target.y-target1.y)<=target.height/2+target1.height/2){
    target.shapeColor="red"
    target1.shapeColor="red"
  }else{
    target.shapeColor="green"
    target1.shapeColor="green"
  }
  drawSprites();
}