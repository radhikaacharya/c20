var movingrect,fixedrect
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(400, 200, 80, 50);
  movingrect.shapeColor = "green";
}

function draw() {
  background(0,0,0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
      
  if (movingrect.x-fixedrect.x <movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x <movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y <movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y-movingrect.y <movingrect.height/2+fixedrect.height/2   ) {
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red"; 
    
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green"; 

  }
  drawSprites();
}