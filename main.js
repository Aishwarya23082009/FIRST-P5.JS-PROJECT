function preload(){

}

function setup(){
    canvas = createCanvas(480,320);
    canvas.position(110,270);
    video = createCapture(50,50);
    video.hide();
    
    tint_color = "";
}

function draw(){
    image(video, 120,80,240,150);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,50);
    circle(420,50,50);
    circle(50,270,50);
    circle(420,270,50);
    fill(0,120,0);
    stroke(0,120,0);
    rect(75,40,320,20);
    rect(75,261,320,20);
    rect(40,72,20,174);
    rect(410,72,20,174);
}

function take_snapshot(){
    save("Student_name.jpeg")
}

