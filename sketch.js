//Create variables here
var dog, happyDog, database, foodS, foodStock;
var happyDogImage;

function preload(){
  happyDogImage=loadImage("dogImg1");
  dogImage=loadImage("dogImg");
}

function setup() {
	createCanvas(500, 500);
  var database = firebase.database();
  var dog = createSprite(200, 450, 100, 100);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  dog.display();
  happyDog.display();
  database.display();
  foodS.display();
  foodStock.display();
  //add styles here

}



