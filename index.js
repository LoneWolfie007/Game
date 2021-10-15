var colors = ["red", "green", "yellow", "blue"];
var gameSequence = [];

function animate(){
  $(this).fadeOut();
  makeSound($(this).attr("id"));
  $(this).fadeIn();
}

function animateColor(color){
  var idName = "#" + color;
  $(idName).fadeOut();
  $(idName).fadeIn();
}

function makeSound(color){
  var musicName = color + ".mp3";
  var musicPath = "sounds/" + musicName;

  var audio = new Audio(musicPath);
  audio.play();
}

function generateColor(){
  var randomNumber = Math.floor(Math.random() * 4);
  return colors[randomNumber];
}

function playTheGame()
{
  $("h1").text("Level " + level);
  var gameOn = true;
  while(gameOn){
    var color = generateColor();
    gameSequence.push(color);
    animateColor(color);
    takeInputFromUser();
  }
}

function handleClick(){
  $(this).fadeOut();
  $(this).fadeOut();
}

var level = 1;

function startGame()
{
  $("h1").text("Level " + level);

}

$(".btn").click(animate);
$(document).keypress(startGame);
