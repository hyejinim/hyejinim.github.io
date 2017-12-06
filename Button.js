class Button {
  constructor(label) {
    this.button = document.createElement("input");
    this.button.setAttribute("type", "button");
    this.button.setAttribute("value", label);
    document.getElementById("buttonarea").appendChild(this.button);

    var self = this;
    this.button.onclick = function() {
      self.callback();
    }
  }
  callback() {
    var label = this.button.value;

    document.getElementById("statusmsg").innerHTML =
      "'" + this.button.value + "'" + " button" + " was pushed";

    if (label == "Start") {
      tick();
      setInterval(launchShape, 3000); // launch a new object every 4000ms
      console.log("call setInterval");
      this.button.blur();
    } else if (label == "Stop") {
      player.setJumped(true);
    }
  }
}
