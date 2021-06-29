var canvas, backgroundImage
var gameState = 0;
var form, player, game;
var dataBase;

function setup(){
Canvas = createCanvas(400,400);
dataBase = fireBase.dataBase();
game = new game();
game.gameState();
game.start();
}

function draw(){

}
