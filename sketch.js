function setup() {
    createCanvas(windowWidth,windowHeight);
    Bring_Your_Brolly = createImg("BYB.png");
    Bring_Your_Brolly.size(50,50);
    Bring_Your_Brolly.position(width/4-Bring_Your_Brolly.width/2,height/4-Bring_Your_Brolly.width/2);
    Flavoball = createButton("Flavoball");
    Flavoball.position(width/4*3-Flavoball.width/2,height/4);
    Stick_war = createButton("Pre-release: Stick war")
    Stick_war.position(width/2-Stick_war.width/2,height/2)
}

function BYB_URL() {
    window.open("https://tjb543.github.io/Bring-Your-Brolly/")
}

function FLAVO_URL() {
    window.open("https://lsiret.github.io/Flavoball/");
}

function SW_URL(){
    window.open("https://tjb543.github.io/stick-war/")
}

function draw() {
    background(255);
    textAlign(CENTER);
    text("Welcome to Tobey & Louis gaming hub!",width/2,height/8)
    text("Please choose a game from below!",width/2,height/8+20)
    Bring_Your_Brolly.mousePressed(BYB_URL);
    Flavoball.mousePressed(FLAVO_URL);
    Stick_war.mousePressed(SW_URL)
}
