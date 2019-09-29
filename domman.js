const body = document.querySelector('body');

// Create a 2D array of 16 div nodes
var grid = []
var i;
var j;
for (i = 0; i <= 15; i++) {
    grid[i] = []
    const row = document.createElement('div');
    row.style.display = 'inline-block';
    body.appendChild(row);

    for (j = 0; j <= 15; j++) {
        grid[i].push(document.createElement('div'));
        curr = grid[i][j];
        curr.style.border = '1px solid';
        curr.style.width = '50px';
        curr.style.height = '50px';
        curr.style.backgroundColor = 'white';
        function hoverColor(ele) {
            if (ele.style.backgroundColor === 'white') {
                ele.style.backgroundColor = 'black';
            } else {
                ele.style.backgroundColor = 'white';
            }
        }
        //curr.addEventListener('mouseover', hoverColor(curr));

        row.appendChild(curr);
    }
}

