var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  
    redBox = createSprite(130,570,125,15)
    redBox.shapeColor = "red"

    blueBox = createSprite(270,570,125,15)
    blueBox.shapeColor = "blue"

    greenBox = createSprite(410,570,125,15)
    greenBox.shapeColor = "green"

    yellowBox = createSprite(550,570,125,15)
    yellowBox.shapeColor = "yellow"

    BouncingBox = createSprite(random(70,750) , 300 , 30,30)
    BouncingBox.shapeColor = "white"
    BouncingBox.velocityX = 0.5;
    BouncingBox.velocityY = 0.5



    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   edges = createEdgeSprites()
    BouncingBox.bounceOff(edges)
    drawSprites()

    if(redBox.isTouching(BouncingBox) && BouncingBox.bounceOff(redBox)) {
        BouncingBox.shapeColor = "red";
    }
    if(blueBox.isTouching(BouncingBox) && BouncingBox.bounceOff(blueBox)) {
        BouncingBox.shapeColor = "blue";
    }
    if(greenBox.isTouching(BouncingBox) && BouncingBox.bounceOff(greenBox)) {
        BouncingBox.shapeColor = "green";
    }
    if(yellowBox.isTouching(BouncingBox) && BouncingBox.bounceOff(yellowBox)) {
        BouncingBox.shapeColor = "yellow";
    }

    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
