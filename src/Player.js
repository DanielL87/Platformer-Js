export class Player {
    constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.height = 125;
        this.width = 125;
        this.playerImg = new Image();
        this.playerImg.src = 'https://pngimage.net/wp-content/uploads/2018/06/8-bit-characters-png-1.png';
    }

}