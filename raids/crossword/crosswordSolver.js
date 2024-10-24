function crosswordSolver(gridString, words) {
    if (typeof gridString !== 'string' || !Array.isArray(words)) {
        console.log('Error: Invalid input types');
        return;
    }

    if (!/^[.\n012]+$/.test(gridString)) {
        console.log('Error: Invalid grid format');
        return;
    }

    const allWordsAreStrings = words.every(word => typeof word === 'string');
    if (!allWordsAreStrings) {
        console.log('Error: words should be strings');
        return;
    }

    words.sort((a, b) => b.length - a.length);
    const shortestWordLength = words[words.length - 1].length;
    const grid = gridString.split('\n').map(line => line.split(''));
    const rowCount = grid.length;
    const colCount = grid[0].length;
    const startPositions = [];
  
    let totalMarkedCells = 0;

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            const cell = grid[row][col];

            // Count cells ('1' || '2')
            if (cell === '1' || cell === '2') {
                totalMarkedCells += parseInt(cell);

                // Check for horizontal w place
                if (col === 0 || grid[row][col - 1] === '0' || grid[row][col - 1] === '.') {
                    let endCol = col;
                    while (endCol < colCount && ['0', '1', '2'].includes(grid[row][endCol])) {
                        endCol++;
                    }
                    if (endCol - col >= shortestWordLength) {
                        startPositions.push({ row, col, direction: 'horizontal' });
                    }
                }

                // Check for vertical wp
                if (row === 0 || grid[row - 1][col] === '0' || grid[row - 1][col] === '.') {
                    let endRow = row;
                    while (endRow < rowCount && ['0', '1', '2'].includes(grid[endRow][col])) {
                        endRow++;
                    }
                    if (endRow - row >= shortestWordLength) {
                        startPositions.push({ row, col, direction: 'vertical' });
                    }
                }
            }
        }
    }

    // Check markcells === words
    if (totalMarkedCells !== words.length) {
        console.log('Error:cells != words count');
        return;
    }

    // Try placing words recursively aka the MAIN FUNCTION
    function placeWordsRecursively(index) {
        if (index === words.length) return true;

        const word = words[index];
        for (const position of startPositions) {
            if (canFitWord(word, position)) {
                placeWord(word, position);
                if (placeWordsRecursively(index + 1)) return true;
                removeWord(word, position);  // Backtrack
            }
        }
        return false;
    }

    // Check if a word fits at this position
    function canFitWord(word, position) {
        const { row, col, direction } = position;
        for (let i = 0; i < word.length; i++) {
            const newRow = row + (direction === 'vertical' ? i : 0);
            const newCol = col + (direction === 'horizontal' ? i : 0);
            if (newRow >= rowCount || newCol >= colCount) return false;
            const cell = grid[newRow][newCol];
            if (!['0', '1', '2'].includes(cell) && cell !== word[i]) return false;
        }
        return true;
    }

    // Place a word on the grid at thisposition
    function placeWord(word, position) {
        const { row, col, direction } = position;
        for (let i = 0; i < word.length; i++) {
            const newRow = row + (direction === 'vertical' ? i : 0);
            const newCol = col + (direction === 'horizontal' ? i : 0);
            grid[newRow][newCol] = word[i];
        }
    }

    // Remove a word from the grid (backtracking)
    function removeWord(word, position) {
        const { row, col, direction } = position;
        for (let i = 0; i < word.length; i++) {
            const newRow = row + (direction === 'vertical' ? i : 0);
            const newCol = col + (direction === 'horizontal' ? i : 0);
            grid[newRow][newCol] = '0';
        }
    }

    // Solve the puzzle and print the grid or error
    if (placeWordsRecursively(0)) {
        console.log(grid.map(row => row.join('')).join('\n'));
    } else {
        console.log('Error: Unable to place all words');
    }
}

// test
// const emptyPuzzle = `200
// 0..
// 0..`;
// const words = [
//   'crt', 'cat'
// ].reverse();

// crosswordSolver(emptyPuzzle, words) 