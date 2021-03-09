var garden, gardenImg;
var catImg, catAnime, catImg4, catGroup, cat;
var mouseImg, mouseAnime, mouse4, mouseGroup, mouse;


function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");

    catImg = loadImage("images/cat1.png");
    catAnime = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg4 = loadImage("images/cat4.png");

    mouseImg = loadImage("images/mouse1.png");
    mouseAnime = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500, 400);
    garden.addImage(gardenImg);

    cat = createSprite(650, 550, 10, 10);
    cat.addImage(catImg);
    cat.scale = 0.2


    mouse = createSprite(150, 550, 10, 10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2
    mouse.setCollider("circle",0,0,20);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown(LEFT_ARROW)){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catAnime);
        cat.changeAnimation("catRunning")
        }
        if(cat.isTouching(mouse)){
            cat.velocityX = 0;
            cat.changeAnimation(catImg4);
          }
    drawSprites();
}


