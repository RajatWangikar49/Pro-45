const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies

var engine, world;
var aliens, aliensImage;
var backgroundImage;
var soldier;
var ammos = [];
var alienss = [];

function preload(){

  backgroundImage = loadImage("./images/Background.jpg");
  aliensImage = loadImage("./images/Alien.png");

}

function setup(){

  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  soldier = createSprite(width/2, 600, 20, 20);

  imageMode(CENTER);

}

function draw(){
  
  background(20);
  image(backgroundImage, width/2, height/2, width, height);

  Engine.update(engine);

  soldier.x = mouseX;
  
  spawnAliens();

  for (var i = 0 ; i<ammos.length ; i++){
    for(var j = 0 ; j<alienss.length ; j++){
      if (ammos[i].isTouching(alienss[j])){
        ammos[i].destroy();
        alienss[j].destroy();
        ammos.splice(i, 1);
        alienss.splice(j, 1);
      }
    }
  }

  drawSprites();
  
}

function spawnAliens(){

  if (frameCount % 50 === 0){
    //aliens = new alien(random(10, 50), 10, 20, 20);
    //Matter.Body.setVelocity(aliens.body, {x : 0, y : 3});
    //aliens.display();
    var aliens = createSprite(random(20, width-20), 0, 50, 50);
    aliens.addImage(aliensImage);
    aliens.velocityY = 5;
    alienss.push(aliens);

  }

}

function mouseClicked(){

  var ammo = createSprite(soldier.x, soldier.y-10, 10, 10);
  ammo.velocityY = -7;
  ammos.push(ammo);

}