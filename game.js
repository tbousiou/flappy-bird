var bird;
var pipes = [];


// Setup code for p5.js framework
function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}

// Draw code for p5.js framework
function draw() {
	background(0);
	
	// Draw Pipes	
	for (var i = 0; i < pipes.length; i++) {
		pipes[i].show();
		pipes[i].update();
		
		if (pipes[i].hits(bird)) {
			console.log("HIT");
		}		
			
		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);		
		}
	}

	// Draw Bird	
	bird.update();
	bird.show();

	// Add new pipe	
	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}


}

function keyPressed() {
	if (key == ' ') {
		bird.up();
		//console.log('UP');	
	}

}
