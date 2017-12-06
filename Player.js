class Player {

  constructor() {
    this.emoji = '🐵'; //😈👶🙅🙆🤦‍🙋‍
    this.size = 70;
    this.x = c.width * 1/7;
    this.y = (c.height-15) * 2.3/4;
    this.moved = false;
    this.jumped = false;
    this.image = new Image();
    this.image.src = 'images/monkey_run_1.png';


    // this.runStart = new Image();
    // this.runStart.src = "images/monkey_run_1.png";

    // let image = new Image();
    // let _this = this;
    // image.onload = function(e){
    //   _this.runStart = e.target;
    // }
    // image.src = "images/monkey_run_1.png";
    //
    // image = new Image();
    // // let _this = this;
    // image.onload = function(e){
    //   _this.runEnd = e.target;
    // }
    // image.src = "images/monkey_run_2.png";
  }
  draw(context) {
    // context.font = (this.size) + "px Helvetica";
    // context.fillText(this.emoji, this.x, this.y);
    let x = this.x;
    let y = this.y;
    let image = this.image;

    image.onload = function(){
      context.drawImage(image, x, y);
    }
    console.log("draw player");
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setJumped(jumped) {
    this.jumped = jumped;
  }
  tick() {
    if (!this.moved) {
      // this.emoji = '🙉';
      // this.x = c.width * 1/7 - 30;

      this.image.src = 'images/monkey_run_2.png';
      this.moved = true;
      console.log("draw run 2")
    } else if (this.moved) {
      // this.emoji = '🐵';
      // this.x = c.width * 1/7;

      this.image.src = 'images/monkey_run_1.png';
      this.moved = false;
    }
    if (this.jumped) {
      // Jumping animation
      if (this.y = (c.height-15) * 2.3/4) {
        this.image.src = 'images/monkey_jump_2.png';
        this.y = this.y - 300;
        console.log("player position: ", this.y);
      }
      this.jumped = false;
    } else {
      if (this.y < (c.height-15) * 2.3/4) {
        this.y = this.y + 20;
        console.log("player position: ", this.y);
        this.image.src = 'images/monkey_jump_2.png';
      }
    }
  }
}
