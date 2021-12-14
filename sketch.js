var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var flower1Img , flower1 , flower2Img , flower2 , flower3Img , flower3 , flower4Img , flower4
var bgImg, bgSprite
function preload(){
  flower1Img = loadImage("flower_3.png")
  flower2Img = loadImage("flower_4.png")
  flower3Img = loadImage("flower_1.png")
  flower4Img = loadImage("flower_2.png")
  bgImg = loadImage("bg.jpg")
}

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  flower1 = createSprite(100,100)
  flower1.addImage(flower1Img)
  flower1.scale = 0.4
  flower1.visible = false
  flower2 = createSprite(750,100)
  flower2.addImage(flower2Img)
  flower2.scale = 0.4
  flower2.visible = false
  flower3 = createSprite(100,300)
  flower3.addImage(flower3Img)
  flower3.scale = 0.4
  flower3.visible = false
  flower4 = createSprite(750,300)
  flower4.addImage(flower4Img)
  flower4.scale = 0.4
  flower4.visible = false

  

}


function draw(){
  background("pink");
  if(contestantCount === 2){
    flower1.visible = true
    flower2.visible = true
    flower3.visible = true
    flower4.visible = true
   
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  drawSprites()
}
