function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random((height + width) / 2);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z + speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  };

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  };
}


// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

let stars = [];

let speed;

function setup() {
  load = 0;
  createCanvas(windowWidth, windowHeight);
  Bring_Your_Brolly = createImg("BYB.png");
  Bring_Your_Brolly.size(50, 50);
  Bring_Your_Brolly.position(width / 4 - Bring_Your_Brolly.width / 2, height / 4 - Bring_Your_Brolly.height / 2);
  Flavoball = createImg("FBlogo.png");
  Flavoball.size(50,50);
  Flavoball.position(width / 4 * 3 - Flavoball.width / 2, height / 4 - Flavoball.height / 2);
  Stick_war = createSelect()
  Stick_war.position(width / 2 - Stick_war.width / 2, height / 2)
  Stick_war.option("Pre-releases:");
  Stick_war.option("Stick war");
  
  for (let i = 0; i < (width+height)/1.5; i++) {
    stars[i] = new Star();
  }
}

function BYB_URL() {
  window.location.assign("https://tjb543.github.io/Bring-Your-Brolly/")
  load = 1;
}

function FLAVO_URL() {
  window.location.assign("https://lsiret.github.io/Flavoball/");
  load = 2;
}

function PR_URL() {
  let item = Stick_war.value();
  item = item.toLowerCase();
  item = item.replace(/\s/g,"-");
  if(item === "stick-war" || item === "repo-started-by-tjb543" || item === "repo-started-by-tjb543"){
  window.location.replace("https://tjb543.github.io/"+item+"/")
}
  load = 3;
}

function draw() {
  background(255);
  if (load == 0) {
    textAlign(CENTER);
    text("Welcome to Tobey & Louis gaming hub!", width / 2, height / 8)
    text("Please choose a game from below!", width / 2, height / 8 + 20)
    Bring_Your_Brolly.mousePressed(BYB_URL);
    Flavoball.mousePressed(FLAVO_URL);
    Stick_war.changed(PR_URL)
  }else{
  speed = -50;
  background(51);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  if (load == 1) {
    Bring_Your_Brolly.center()
    Flavoball.remove();
    Stick_war.remove();
  } else if (load == 2) {
    Bring_Your_Brolly.remove()
    Flavoball.center();
    Stick_war.remove();
  } else if (load == 3) {
    Bring_Your_Brolly.remove()
    Flavoball.remove();
    Stick_war.center();
  }
  }
}

function windowResized (){
    resizeCanvas (windowWidth, windowHeight);
    Bring_Your_Brolly.position(width / 4 - Bring_Your_Brolly.width / 2, height / 4 - Bring_Your_Brolly.height / 2);
    Flavoball.position(width / 4 * 3 - Flavoball.width / 2, height / 4 - Flavoball.height / 2);
    Stick_war.position(width / 2 - Stick_war.width / 2, height / 2);
}
