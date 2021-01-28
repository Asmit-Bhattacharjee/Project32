const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;
var screen = (87);
var score = 0;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    textSize(35);
    fill("white");
    text("Score:"+score, 900, 50);

    ground1 = new Ground(380,250,200,20);
    ground2 = new Ground(660,360,100,20);
    box1 = new Box(630,320,30,40);
    box2 = new Box(660,320,30,40);
    box3 = new Box(690,320,30,40);
    box4 = new Box(630,280,30,40);
    box5 = new Box(660,280,30,40);
    box6 = new Box(690,280,30,40);
    box7 = new Box(660,240,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    polygon = Bodies.polygon(50, 200, 6, 20);

    
    World.add(world, polygon);
    //fill("blue");

    slingshot = new Slingshot(this.polygon, {x:200, y:100});
}

function draw(){
    background(screen);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();  
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    slingshot.display(); 
}
async function getBg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var dateTime = responseJson.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=18){
        screen = (255)
    }
    else{
        screen = (0);

    }
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}


