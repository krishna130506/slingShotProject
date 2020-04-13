const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,pig2,pig3,pig4,pig5,pig6,pig7,pig8;
var platform,platform2,canvas;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,400,1200,20);
    platform = new Ground(135,195,90,10);
    platform2 = new Ground(1060,195,90,10);


    
   
   
    bird = new Bird(600,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:600, y:200});
}

function draw(){
    background(200);
    Engine.update(engine);
    for(var i = 100 ; i < 180 ; i=i+10){
        pig1=new Pig(i,180);
        pig1.display();

    }
    for (var i = 110; i < 170; i++ ){
        pig2=new Pig(i,160);
        pig2.display();

    }
    for (var i =120 ; i < 160; i++ ){
        pig3=new Pig(i,140);
        pig3.display();

    }
    for (var i = 130; i < 150; i++ ){
        pig4=new Pig(i,120);
        pig4.display();

    }
    for (var i=1020;i<1100;i++){
        pig5=new Pig(i,180); 
        pig5.display();

    }
    for (var i = 1030 ; i < 1090 ; i++ ){
        pig6=new Pig(i,160);
        pig6.display();

    }
    for (var i = 1040 ; i < 1080 ; i++ ){
        pig7=new Pig(i,140);
        pig7.display();

    }
    for (var i = 1050; i < 1070 ; i++ ){
        pig8=new Pig(i,120);
        pig8.display();

    }
    //strokeWeight(4);
    
    ground.display();

    bird.display();
    platform.display();
    platform2.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}