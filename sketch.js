var helicopterIMG,helicopterSprite;
var packageSprite,package1Sprite,package2Sprite,packageIMG,package1IMG,package2IMG;
var packageBody,packageBody1,packageBody2,ground;
var line1,line2,line3;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

function preload()
{
  helicopterIMG=loadImage("helicopter.png")
  packageIMG=loadImage("package.png")
  package1IMG=loadImage("package1.png")
  package2IMG=loadImage("package2.png")


}

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);


  packageSprite=createSprite(width/2,80,10,10);
  packageSprite.addImage(packageIMG)
  packageSprite.sclae=0.2

   package1Sprite=createSprite(480, 80, 10, 10);
   package1Sprite.addImage(packageIMG)
   package1Sprite.scale=0.2

   package2Sprite=createSprite(330,80,10,10);
   package2Sprite.addImage(package2IMG)
   package2Sprite.scale=0.2


   helicopterSprite=createSprite(width/2,200,10,10);
   helicopterSprite.addImage(helicopterIMG)
   helicopterSprite.scale=0.6

   groundSprite=createSprite(width/2,height-35,width,10);
   ground.sprite
}

function draw() {
  background(255,255,255);  
  drawSprites();
}