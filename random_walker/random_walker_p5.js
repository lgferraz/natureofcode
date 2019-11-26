let walkerr;

class walker{
	constructor(size){
		this.size = size;
		this.x = width/2;
		this.y = height/2;
	}
	
	walk(direction){
		switch (direction){
			case 1:
				this.y = this.y+1;
				break;
			case 2:
				this.y = this.y-1;
				break;
			case 3:
				this.x = this.x+1;
				break;
			case 4:
				this.x = this.x-1;
		}
	}
	
	display(){
		fill(0);
		rect(this.x, this.y, this.size, this.size);
	}
	
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	walkerr = new walker(1);
}

function draw() {
	var direction = Math.floor(Math.random() * 4) + 1 
	walkerr.walk(direction);
	walkerr.display();
}