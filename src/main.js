function make2DArray(colums, rows) {
    let array = new Array(colums);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array;
}

let grid;
let colums;
let rows;
let resolution = 40;

function setup() {
    createCanvas(400, 400);

    colums = width / resolution;
    rows = height / resolution;

    // Assigns a random bit value to each grid
    grid = make2DArray(colums, rows);
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    // Make our background blue
    background('blue');

    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;

            // if one of the grids value == 1, make that grid red
            if (grid[i][j] == 1) {
                fill('red');
                rect(x, y, resolution, resolution);
            }
        }
    }
}