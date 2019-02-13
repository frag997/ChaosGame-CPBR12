let counter = 0;

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}

function setup() {
	frameRate(10);
	createCanvas(windowWidth, windowHeight);
	console.log("All good");

	pointA = new Point(width/2, 0);
	pointB = new Point(0, height);
	pointC = new Point(width, height);

	x = random(width);
	y = random(height);

	background(0);
	stroke(255);
	strokeWeight(8);

	point(pointA.x, pointA.y);
	point(pointB.x, pointB.y);
	point(pointC.x, pointC.y);
}

function draw() {
	for (let i = 0; i < 100; i++){
		strokeWeight(2);
		point(x, y);

		let r = floor(random(3));

		if(r == 0){
			stroke(255, 0, 255);
			x = lerp(x, pointA.x, 0.5);
			y = lerp(y, pointA.y, 0.5);
		}
		else if (r == 1){
			stroke(0, 255, 255);
			x = lerp(x, pointB.x, 0.5);
			y = lerp(y, pointB.y, 0.5);
		}
		else if (r == 2){
			stroke(255, 255, 0);
			x = lerp(x, pointC.x, 0.5);
			y = lerp(y, pointC.y, 0.5);
		}
	}

}
