class Mission {
  constructor(ctx, gameWidth, gameHeight, width, height, image) {
    this.ctx = ctx;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.image = new Image();
    this.image.src = image;

    this.width = width;
    this.height = height;

    this.posMax = this.gameWidth - this.width;
    this.posMin = this.width;

    this.posX = Math.floor(
      Math.random() * (this.posMax - this.posMin) + this.posMin
    );
    this.posY = 5;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  drawWin() {
    this.ctx.drawImage(this.image, this.posX, this.posY, 50, 50);
  }

  remove() {
    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
  }

  isCollision(player) {
    return (
      player.posX < this.posX + this.width &&
      player.posX + this.width >= this.posX &&
      player.posY <= this.posY
    );
  }
}
