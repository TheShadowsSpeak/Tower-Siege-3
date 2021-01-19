const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;
var BG,IMG;
var ground;
var box1, box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var polygon;
var launcher;
var gameState;
var backgroundIMG;
var time;
//var a;
var circles=[];
function preload()
{
  function Night(){
  if(time<06){
  backgroundIMG=loadImage("MoonBG.png"); 
  }
  else{
    backgroundIMG=loadImage("SunBG.jpg")
  }
}
}


  

function setup() {
  createCanvas(1400,800);
  stroke(255)
 
  engine=Engine.create();
  world=engine.world; 
  //BG=createSprite(400,400,800,800)
  //BG.addImage(IMG)
  //BG.scale=3;
  gameState="Rest";
  ground=new Ground(600,500,300,20);

  box1=new Box(500,465,50,50);
  box2=new Box(550,465,50,50);
  box3=new Box(600,465,50,50);
  box4=new Box(650,465,50,50);
  box5=new Box(700,465,50,50);
  box6=new Box(525,415,50,50);
  box7=new Box(575,415,50,50);
  box8=new Box(625,415,50,50);
  box9=new Box(675,415,50,50);
  box10=new Box(550,365,50,50);
  box11=new Box(600,365,50,50);
  box12=new Box(650,365,50,50);
  box13=new Box(625,315,50,50);
  box14=new Box(575,315,50,50)
  box15=new Box(600,265,50,50);
  polygon=new Polygon(200,500,30)
  launcher=new SlingShot(polygon.body,{x:300,y:300})
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(backgroundIMG);  
  Engine.update(engine)
  
 // a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  //for (i=0;i<circles.length;i++)
//{
//	circle(circles[i], height/2,20)
//}
//if(camera.position.x%width===0)
//{
//	circles.push(camera.position.x+width/2)
//}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 ground.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 polygon.display()
 launcher.display()
 box1.score()
 box2.score()
 box3.score()
 box4.score()
 box5.score()
 box6.score()
 box7.score()
 box8.score()
 box9.score()
 box10.score()
 box11.score()
 box12.score()
 box13.score()
 box14.score()
 box15.score()
 keyPressed()
 Night()
 drawSprites();
 //text()
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  if(gameState=="Rest"){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  launcher.fly();
  gameState="Launched"; 
}
function keyPressed(){
  if(keyCode===32){
    launcher.attach(polygon.body);
    
  }
}
async function Night(){
  var time=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var J=await time.json();
  time=J.datetime.slice(11,13);
}
