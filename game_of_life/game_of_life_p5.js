function make2DArray(cols, rows){
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

let grid 
let rows;
let resolution = 20;

function setup() {
	createCanvas(600, 400);
	cols = width/resolution;
	rows = height/resolution;
	grid = make2DArray(cols, rows);
	for (let col=0; col<cols; col++) {
		for (let row=0; row<rows; row++){
			grid[col][row] = floor(random(2));
		}
	}
}

function draw(){
	background(255);
	
	for (let col=0; col<cols; col++) {
		for (let row=0; row<rows; row++){
			let x = col*resolution;
			let y = row*resolution;
			
			if (grid[col][row] == 1){
				fill(0);
				stroke(255);
				rect(x, y, resolution-1, resolution-1);
			}
		}
	}
	
	
	let next = make2DArray(cols, rows);

	//next generation
	
	for (let col=0; col<cols; col++){
		for (let row=0; row<rows; row++){
			
			let state = grid[col][row];
			
			//"limpa" os lados
			
			if (col==0 || col==cols-1 || row==0 || row==rows-1){
				next[col][row] = state;
			}else {
			
				//count ngbh
					let sum = 0;
					let nghb = countNghb(grid, col, row);

					//rules

					if (state==0 && nghb==3){
						next[col][row] = 1;
					}else if (state==1 && (nghb<2 || nghb>3)){
						next[col][row] = 0;
					}else {
						next[col][row] = state;
					}
			}
			
		}
	}
	
	grid = next;
	
}

function countNghb(grid, x, y){
	let sum = 0;
	for (let col=-1; col<2; col++){
		for (let row=-1; row<2; row++) {
			sum += grid[x+col][y+row];
		}
	}
	sum -= grid[x][y];
	return sum;
}