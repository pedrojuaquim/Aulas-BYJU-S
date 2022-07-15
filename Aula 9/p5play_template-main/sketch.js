var box;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,100);

}

function draw() 
{
  background(30);
  if(keyDown("left"))
  {
    box.x -= 20

  }
  if(keyDown("right"))
  {
    box.x += 20

  }
  if(keyDown("up"))
  {
    box.y -= 20

  }
  if(keyDown("down"))
  {
    box.y += 20

  }
  drawSprites();
  
}




