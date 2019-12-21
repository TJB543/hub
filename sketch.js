

var player;
var world;
var world2;
var world3;
var world4;
var world5;
var world6;
var world7;
var world1b;
var world2b;
var level1_final;


var worlda;
var world2a;
var world3a;
var world4a;
var world5a;
var world6a;
var world7a;
var world1ba;
var world2ba;
var level2_final;
let rez = 1;
let level = 0;

function setup() {
    console.log(innerWidth);
    createCanvas(innerWidth-20, 605);
    player = new Player();
    world = new World();
    world2 = new World2();
    world3 = new World3();
    world4 = new World4();
    world5 = new World5();
    world6 = new World6();
    world7 = new World7();
    world1b = new World1b();
    world2b = new World2b();
    world3b = new World3b();
    world4b = new World4b();
    world5b = new World5b();
    world6b = new World6b();
    level1_final = new Level1_final();
    
    worlda = new Worlda();
    world2a = new World2a();
    world3a = new World3a();
    world4a = new World4a();
    world5a = new World5a();
    world6a = new World6a();
    world7a = new World7a();
    world1ba = new World1ba();
    world2ba = new World2ba();
    world3ba = new World3ba();
    world4ba = new World4ba();
    world5ba = new World5ba();
    world6ba = new World6ba();
    level2_final = new Level2_final();
}

function Keypressed_Walking() {
    if(keyIsPressed && keyCode === LEFT_ARROW || keyIsPressed && key === 'a' ) {
        player.xdir = -2.5;
    } else if (keyIsPressed && keyCode === RIGHT_ARROW || keyIsPressed && key === 'd' ) {
        player.xdir = 2.5;
    } else {
        player.xdir = 0;
    }
}

function On_Platform_Level_1() {
    if(player.y > world.y-(world.h*world.h) && player.y < world.y &&player.x > world.x-20 && player.x <world.x+world.w) {
        player.y=world.y-(world.h*world.h);
        player.v = 0;
        player.ydir = 0;
    } else if (player.y > world2.y-(world2.h*world2.h) && player.y < world2.y &&player.x > world2.x-20 && player.x <world2.x+world2.w){
        player.y=world2.y-(world2.h*world2.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world2.s;
    } else if (player.y > world3.y-(world3.h*world3.h) && player.y < world3.y &&player.x > world3.x-20 && player.x <world3.x+world3.w){
        player.y=world3.y-(world3.h*world3.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world3.s;
    } else if (player.y > world4.y-(world4.h*world4.h) && player.y < world4.y &&player.x > world4.x-20 && player.x <world4.x+world4.w){
        player.y=world4.y-(world4.h*world4.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world4.s;
    } else if (player.y > world5.y-(world5.h*world5.h) && player.y < world5.y &&player.x > world5.x-20 && player.x <world5.x+world5.w){
        player.y=world5.y-(world5.h*world5.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world5.s;
    } else if (player.y > world6.y-(world6.h*world6.h) && player.y < world6.y &&player.x > world6.x-20 && player.x <world6.x+world6.w){
        player.y=world6.y-(world6.h*world6.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world6.s;
    } else if ((player.y > world7.y-(world7.h*world7.h) && player.y < world7.y &&player.x > world7.x-20 && player.x <world7.x+world7.w)){
        player.y=world7.y-(world7.h*world7.h);
        player.v = 0;
        player.ydir = 0;
    } else if ((player.y > world1b.y-(world1b.h*world1b.h) && player.y < world1b.y &&player.x > world1b.x-20 && player.x <world1b.x+world1b.w)){
        player.y=world1b.y-(world1b.h*world1b.h);
        player.v = 0;
        player.ydir = 0;
    } else if (player.y > world2b.y-(world2b.h*world2b.h) && player.y < world2b.y &&player.x > world2b.x-20 && player.x <world2b.x+world2b.w){
        player.y=world2b.y-(world2b.h*world2b.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world2b.s;
    } else if (player.y > world3b.y-(world3.h*world3b.h) && player.y < world3b.y &&player.x > world3b.x-20 && player.x <world3b.x+world3b.w){
        player.y=world3b.y-(world3b.h*world3b.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world3b.s;
    } else if (player.y > world4b.y-(world4b.h*world4b.h) && player.y < world4b.y &&player.x > world4b.x-20 && player.x <world4b.x+world4b.w){
        player.y=world4b.y-(world4b.h*world4b.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world4b.s;
    } else if (player.y > world5b.y-(world5b.h*world5b.h) && player.y < world5b.y &&player.x > world5b.x-20 && player.x <world5b.x+world5b.w){
        player.y=world5b.y-(world5b.h*world5b.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world5b.s;
    } else if (player.y > world6b.y-(world6b.h*world6b.h) && player.y < world6b.y &&player.x > world6b.x-20 && player.x <world6b.x+world6b.w){
        player.y=world6b.y-(world6b.h*world6b.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world6b.s;
    } else if (player.y > level1_final.y-(level1_final.h*level1_final.h) && player.y < level1_final.y &&player.x > level1_final.x-20 && player.x <level1_final.x+level1_final.w){
        player.y=level1_final.y-(level1_final.h*level1_final.h);
        player.v = 0;
        player.ydir = 0;
        player.x += level1_final.s;
    }
}

function On_Platform_Level_2() {
    if(player.y > worlda.y-(worlda.h*worlda.h) && player.y < worlda.y &&player.x > worlda.x-20 && player.x <worlda.x+worlda.w) {
        player.y=worlda.y-(worlda.h*worlda.h);
        player.v = 0;
        player.ydir = 0;
    } else if (player.y > world2a.y-(world2a.h*world2a.h) && player.y < world2a.y &&player.x > world2a.x-20 && player.x <world2a.x+world2a.w){
        player.y=world2a.y-(world2a.h*world2a.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world2a.s;
    } else if (player.y > world3a.y-(world3a.h*world3a.h) && player.y < world3a.y &&player.x > world3a.x-20 && player.x <world3a.x+world3a.w){
        player.y=world3a.y-(world3a.h*world3a.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world3a.s;
    } else if (player.y > world4a.y-(world4a.h*world4a.h) && player.y < world4a.y &&player.x > world4a.x-20 && player.x <world4a.x+world4a.w){
        player.y=world4a.y-(world4a.h*world4a.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world4a.s;
    } else if (player.y > world5a.y-(world5a.h*world5a.h) && player.y < world5a.y &&player.x > world5a.x-20 && player.x <world5a.x+world5a.w){
        player.y=world5a.y-(world5a.h*world5a.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world5a.s;
    } else if (player.y > world6a.y-(world6a.h*world6a.h) && player.y < world6a.y &&player.x > world6a.x-20 && player.x <world6a.x+world6a.w){
        player.y=world6a.y-(world6a.h*world6a.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world6a.s;
    } else if ((player.y > world7a.y-(world7a.h*world7a.h) && player.y < world7a.y &&player.x > world7a.x-20 && player.x <world7a.x+world7a.w)){
        player.y=world7a.y-(world7a.h*world7a.h);
        player.v = 0;
        player.ydir = 0;
    } else if ((player.y > world1ba.y-(world1ba.h*world1ba.h) && player.y < world1ba.y &&player.x > world1ba.x-20 && player.x <world1ba.x+world1ba.w)){
        player.y=world1ba.y-(world1ba.h*world1ba.h);
        player.v = 0;
        player.ydir = 0;
    } else if (player.y > world2ba.y-(world2ba.h*world2ba.h) && player.y < world2ba.y &&player.x > world2ba.x-20 && player.x <world2ba.x+world2ba.w){
        player.y=world2ba.y-(world2ba.h*world2ba.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world2ba.s;
    } else if (player.y > world3ba.y-(world3ba.h*world3ba.h) && player.y < world3ba.y &&player.x > world3ba.x-20 && player.x <world3ba.x+world3ba.w){
        player.y=world3ba.y-(world3ba.h*world3ba.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world3ba.s;
    } else if (player.y > world4ba.y-(world4ba.h*world4ba.h) && player.y < world4ba.y &&player.x > world4ba.x-20 && player.x <world4ba.x+world4ba.w){
        player.y=world4ba.y-(world4ba.h*world4ba.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world4ba.s;
    } else if (player.y > world5ba.y-(world5ba.h*world5ba.h) && player.y < world5ba.y &&player.x > world5ba.x-20 && player.x <world5ba.x+world5ba.w){
        player.y=world5ba.y-(world5ba.h*world5ba.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world5ba.s;
    } else if (player.y > world6ba.y-(world6ba.h*world6ba.h) && player.y < world6ba.y &&player.x > world6ba.x-20 && player.x <world6ba.x+world6ba.w){
        player.y=world6ba.y-(world6b.h*world6ba.h);
        player.v = 0;
        player.ydir = 0;
        player.x += world6ba.s;
    } else if (player.y > level2_final.y-(level2_final.h*level2_final.h) && player.y < level2_final.y &&player.x > level2_final.x-20 && player.x <level2_final.x+level2_final.w){
        player.y=level2_final.y-(level2_final.h*level2_final.h);
        player.v = 0;
        player.ydir = 0;
        player.x += level2_final.s;
    }
}
function Keypressed_Jumping() {
    if (keyIsPressed && keyCode === UP_ARROW || keyIsPressed && key === ' '  || keyIsPressed && key === 'w' ){
        player.ydir = -7.5;
    } else if (keyIsPressed && keyCode === DOWN_ARROW || keyIsPressed && keyCode === SHIFT || keyIsPressed && key === 's' ) {
        player.ydir = 25;
    }
}

function draw() {
    background(0);
    Keypressed_Walking();
    Keypressed_Jumping();
    scale (rez , rez);
    player.update();
    player.show();
    if (level<1) {
        world.show();
        world2.show();
        world2.update();
        world3.show();
        world3.update();
        world4.show();
        world4.update();
        world5.show();
        world5.update();
        world6.show();
        world6.update();
        world7.show();
        world1b.show();
        world2b.show();
        world2b.update();
        world3b.show();
        world3b.update();
        world4b.show();
        world4b.update();
        world5b.show();
        world5b.update();
        world6b.show();
        world6b.update();
        level1_final.show();
        level1_final.update();
        On_Platform_Level_1();
    } else if (level >= 1 && level < 2) {
        worlda.show();
        world2a.show();
        world2a.update();
        world3a.show();
        world3a.update();
        world4a.show();
        world4a.update();
        world5a.show();
        world5a.update();
        world6a.show();
        world6a.update();
        world7a.show();
        world1ba.show();
        world2ba.show();
        world2ba.update();
        world3ba.show();
        world3ba.update();
        world4ba.show();
        world4ba.update();
        world5ba.show();
        world5ba.update();
        world6ba.show();
        world6ba.update();
        level2_final.show();
        level2_final.update();
        On_Platform_Level_2()
    }
    if (player.y < height-595) {
        level += 1;
        player.y = height-20
        print(level)
        
    }
    
    
}