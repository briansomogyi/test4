function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("blue");
    stroke("black");
    fill("yellow");
    ellipse(50, 50, 70, 70);
    triangle(40, 15, 60, 15, 50, 0);
    triangle(15, 60, 15, 40, 0, 50);
    triangle(40, 85, 60, 85, 50, 100);
    triangle(85, 40, 85, 60, 100, 50);
    
    stroke("black");
    fill("green");
    rect(0, 375, 400, 25);
    stroke("black");
    fill("red");
    rect(100, 200, 200, 175);
    stroke("black");
    fill("gray");
    rect(250, 100, 50, 100);
    stroke("black");
    fill("black");
    triangle(100, 200, 300, 200, 200, 100);
    stroke("black");
    fill("black");
    rect(150, 300, 100, 75);
    stroke("black");
    fill("black");
    rect(125, 225, 50, 50);
    stroke("black");
    fill("black");
    rect(225, 225, 50, 50);
}