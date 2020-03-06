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

    grid = make2DArray(colums, rows);
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                rect(x, y, resolution, resolution);
            }
        }
    }
}