var btn_red;
var btn_green;


var r = 0;
var g = 0;
var b = 255;

function red_bg(){
 r = 255
 g = 0
 b = 0
}


function green_bg(){
  r = 0
  g = 255
  b = 0
 }
function setup() {
  createCanvas(400, 400);  
  input1 = createInput();
  input1.position(5,60);

  input2 = createInput();
  input2.position(200,60);

  btn_red = createButton("RED");
  btn_red.position(10,200);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(80,200);
  btn_green.mousePressed(green_bg);

}

function draw() {
  background(r,g,b);
}

