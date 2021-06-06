var tom,tomImg,cat;
var jerry,jerryImg,rat;
var bg

function preload() {
    //load the images here
    tom = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg = loadAnimation("images/cat1.png");
    jerry = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg = loadAnimation("images/mouse1.png");
    bg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("sitting",tomImg);
    cat.scale=0.2;
    rat = createSprite(200,600);
    rat.addAnimation("standing",jerryImg);
    rat.scale=0.2;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-rat.x < cat.width/2-rat.width/2){
        cat.velocityX=0;
        cat.changeAnimation("sitting");
        rat.changeAnimation("standing");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.addAnimation("walking",tom);
    cat.changeAnimation("walking");
    cat.velocityX=-6;
    rat.addAnimation("teasing",jerry);
    rat.changeAnimation("teasing");
}

}
