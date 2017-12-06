<!-- Class -->
class Cloud {
  constructor() {
    this.emoji = '☁️';
    this.size = getRandomValue(40, 70);
    this.x = Math.random() * c.width;
    this.y = Math.random() * (c.height/3);
  }
  draw(context) {
    context.font = (this.size) + "px Helvetica";
    context.fillText(this.emoji, this.x, this.y);
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  tick() {
    if (this.x < c.width) {
    this.x = this.x - 1;
    } else {
    this.x = 0;
    }
  }
}
