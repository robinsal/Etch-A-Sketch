const body = document.querySelector('body');
const container = document.createElement('div');
container.style.top = '15px';
container.style.left = '320px';
container.style.position = 'absolute';
container.style.visibility = 'show';
body.appendChild(container);

// Create a 2D array of 16 div nodes
var grid = []
var i, j;
for (i = 0; i < 30; i++) {
    grid[i] = []
    const row = document.createElement('div');
    row.style.display = 'inline-block';
    container.appendChild(row);

    for (j = 0; j < 30; j++) {
        grid[i].push(document.createElement('div'));
        curr = grid[i][j];
        curr.class = 'cell'
        curr.style.border = '1px solid';
        curr.style.width = '20px';
        curr.style.height = '20px';
        curr.style.backgroundColor = 'white';

        row.appendChild(curr); 
        curr.onmouseover = setColor;
    }
}

function setColor() {
    this.style.backgroundColor === 'white' ?
        this.style.backgroundColor = 'black' :
        this.style.backgroundColor = 'white';
}