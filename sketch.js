function setup() {
    createCanvas(windowWidth,windowHeight);
    Bring_Your_Brolly = createButton("Bring Your Brolly")
    Bring_Your_Brolly.position(width/4,height/4)
}

function BYB_URL() {
    window.open("https://tjb543.github.io/Bring-Your-Brolly/")
}

function draw() {
    background(0);
    Bring_Your_Brolly.mousePressed(BYB_URL);
}
