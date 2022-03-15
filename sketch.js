var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("THIS ONE.jpg");
  bg2 = loadImage("rick_astley.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("RED")
    textSize(60);
    text("GET RICK ROLLED NERD",250, 50);
  }

  drawSprites()
}