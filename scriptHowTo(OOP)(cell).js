// Declare JavaScript variables here...
var ellipseSize = 80;


/* 	setup() will run once at the beginning of the program.
	Use this to setup / initialize the drawing environment. */
var setup = function() {
	createCanvas(600, 600);
	document.getElementById("defaultCanvas").style.border = "5px solid whtie";
	document.getElementById("defaultCanvas").style.marginLeft = "350px";
	document.getElementById("defaultCanvas").style.marginTop = "-900px";
	
};


// 	draw() function that loops
var draw = function() {
	if (mouseIsPressed) {
		fill(0,0,0);
	}
	else {
		fill(255,255,255);
	}
	
	ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
};

// keyPressed function that executes on a key press
var keyPressed = function() {
	if (key === "C") {
		background(255,255,255);
	}
	else if (keyCode === UP_ARROW) {
		ellipseSize += 5;
	}
	else if ( (keyCode === DOWN_ARROW) && (ellipseSize > 5) ) {
		ellipseSize -= 5;
	}
};
