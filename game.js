var bird;

// Setup code for p5.js framework
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
}

// Draw code for p5.js framework
function draw() {
	background(0);
	bird.update();
	bird.show();
}
