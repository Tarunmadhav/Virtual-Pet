//Create variables here
var dog, happyDog,  foodS, foodStock;
var dogimg,happydogimg;
var database;
var foodobj,fedtime,lastfed;
function preload()
{
  //load images here
  happydogimg=loadImage("images/dogImg1.png")
  dogimg=loadImage("images/dogImg.png")

}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg)
  dog.scale=0.2
 
  var dog = database.ref('Food');
  dog.on("value", readPosition);
  feed = createButton("FeedTheFood")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)
}

function draw() {  
background(46,139,87);
/*if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage("krish",happydogimg)
}*/
  drawSprites();
 textSize(15) 
 fill(255,255,254) 
//text("Food:"+foodS,150,50) 
if(lastfed>=12){
  text("Last Feed: "+ lastfed%12+"PM",350,30);
}else if(lastfed==0){
  text("Last Feed : 12AM",350,30);
}else{
  text("Last Feed : "+lastfed+ "AM",350,30)
}
}
fedtime=datbase.ref('FeedTime');
fedtime.on("value",function(data){
lastfed=data.val();
})


function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(foodS)
}

function showError(){
  console.log("Error in writing to the database");
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


function AddFood(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

function FeedDog(){

  //dog.addImage(happydogimg)
  foodobject.updateFoodStock(foodobj.getFoodStock()-1);
   database.ref('/').update({
     Food:foodObj.getFoodStock(),
     FeedTime:hour ()
   })
  }
  