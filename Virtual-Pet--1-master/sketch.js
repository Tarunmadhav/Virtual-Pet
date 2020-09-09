//Create variables here
var dog, happyDog,  foodS, foodStock;
var dogimg,happydogimg;
var database;
function preload()
{
  //load images here
  happydogimg=loadImage("images/dogImg1.png")
  dogimg=loadImage("images/dogImg.png")

}

function setup() {
  canvas=createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage("krish",dogimg)
  dog.scale=0.5
  foodStock=database.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage("krish",happydogimg)
}
  drawSprites();
 textSize(25) 
 fill("blue") 
text("Food:"+foodS,150,50) 
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  
  
  database.ref('/').update({
    Food:x
  })
}