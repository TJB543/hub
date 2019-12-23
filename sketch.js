function setup() {
  load = 0;
  createCanvas(windowWidth, windowHeight);
  Bring_Your_Brolly = createImg("BYB.png");
  Bring_Your_Brolly.size(50, 50);
  Bring_Your_Brolly.position(width / 4 - Bring_Your_Brolly.width / 2, height / 4 - Bring_Your_Brolly.height / 2);
  Flavoball = createImg("FBlogo.png");
  Flavoball.size(50,50);
  Flavoball.position(width / 4 * 3 - Flavoball.width / 2, height / 4 - Flavoball.height / 2);
  Stick_war = createButton("Pre-release: Stick war")
  Stick_war.position(width / 2 - Stick_war.width / 2, height / 2)
}

function BYB_URL() {
  window.location.assign("https://tjb543.github.io/Bring-Your-Brolly/")
  load = 1;
}

function FLAVO_URL() {
  window.location.assign("https://lsiret.github.io/Flavoball/");
  load = 2;
}

function SW_URL() {
  window.location.assign("https://tjb543.github.io/stick-war/")
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
    Stick_war.mousePressed(SW_URL)
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

function windowResized (){
    resizeCanvas (windowWidth, windowHeight);
    Bring_Your_Brolly.position(width / 4 - Bring_Your_Brolly.width / 2, height / 4 - Bring_Your_Brolly.height / 2);
    Flavoball.position(width / 4 * 3 - Flavoball.width / 2, height / 4 - Flavoball.height / 2);
    Stick_war.position(width / 2 - Stick_war.width / 2, height / 2);
}
