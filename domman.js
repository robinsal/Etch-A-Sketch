const container = document.querySelector('body');
console.log(container);

// Create a 2D array of 16 div nodes
var grid = []
var i;
var j;
for (i = 0; i <= 15; i++) {
    grid[i] = []
    for (j = 0; j <= 15; j++) {
        grid[i].push(document.createElement('div'))
        //grid[i][j].
        container.appendChild(grid[i][j]);
    }
}

