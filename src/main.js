import { Platform } from "../src/platform.js"
import { Player } from "./Player.js";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let onGround = false;

// Platforms 

let platforms = []
for (let x = 0; x < 20; x++) {
  let newPlatform = new Platform(Math.random() * 1000, Math.random() * 1000, Math.random() * 50 + 10, Math.random() * 300 + 50)
  platforms.push(newPlatform);
}

// PLAYER

let player = new Player(500, 500, 0, 0);


function draw() {

  // BACKGROUND

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // PLATFORMS

  for (let x = 0; x < platforms.length; x++) {
    ctx.fillStyle = "white";
    ctx.fillRect(platforms[x].x, platforms[x].y, platforms[x].width, platforms[x].height);
  }

  // PLAYER
  ctx.drawImage(player.playerImg, player.x, player.y, player.height, player.width);

}

function update() {

  // ADD VELOCITY
  player.y = player.y + player.velocityY;
  player.x = player.x + player.velocityX;

  // ADD GRAVITY
  if (!onGround) {
    player.velocityY = player.velocityY + 0.5;
  }

  // DETECT COLLISION WITH GROUND
  for (let x = 0; x < platforms.length; x++) {
    if (player.x < platforms[x].x + platforms[x].width && player.x + player.width > platforms[x].x && player.y < platforms[x].y + platforms[x].height && player.y + player.height > platforms[x].y) {
      player.velocityY = 0;
      onGround = true;
    }
    else {
      onGround = false;
    }
  }
}

setInterval(function () {
  draw();
  update();
}, 1000 / 60);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(event) {
  if (event.keyCode == 37) {
    player.velocityX = -5;
  }
  if (event.keyCode == 39) {
    player.velocityX = 5;
  }
  if (event.keyCode == 32) {
    player.velocityY = -15;
  }
}

function keyUp(event) {
  if (event.keyCode == 37) {
    player.velocityX = 0;
  }
  if (event.keyCode == 39) {
    player.velocityX = 0;
  }
}