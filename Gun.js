class Gun {

  constructor() {
    this.type = 'Rectangle -->';
    this.size = 25;
    this.x = c.width * 1.5/7;
    this.y = (c.height-15) * 3.2/4;
    this.shot = false;
    this.hit = false;
  }
  draw(context) {
    context.fillStyle = "#000000";
    context.font = (this.size) + "px Helvetica";
    context.fillText(this.type, this.x, this.y);

    console.log("shot draw");
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  doShot(isShot) {
    this.shot = isShot;
    // this.hit = true;
    console.log('shot doShot' + this.hit);
  }
  tick() {
    if (this.shot) {
      this.x += 10;
      // if (!this.hit) {
        // this.x = this.x + 10;
        console.log('shot tick')

      // }
      // else {

      // }
    }
    // this.shot = false;
  }
}

// if (this.jumped) {
//   // Jumping animation
//   if (this.y = (c.height-15) * 2.3/4) {
//     this.image.src = 'images/monkey_jump_2.png';
//     this.y = this.y - 300;
//     console.log("player position: ", this.y);
//   }
//   this.jumped = false;
// } else {
//   if (this.y < (c.height-15) * 2.3/4) {
//     this.y = this.y + 20;
//     console.log("player position: ", this.y);
//     this.image.src = 'images/monkey_jump_2.png';
//   }
// }
