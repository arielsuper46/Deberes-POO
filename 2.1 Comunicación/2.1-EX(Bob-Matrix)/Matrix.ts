export class Matrix {
    private matrix: number[][];

    constructor(matrixString: string) {
        // Parse the input string to create the matrix
        this.matrix = matrixString.split("\n").map(row => row.split(" ").map(Number));
    }

    get rows(): number[][] {
        // Return a copy of the matrix
        return this.matrix.map(row => [...row]);
    }

    get columns(): number[][] {
        // Transpose the matrix to get the columns
        return this.matrix[0].map((_, columnIndex) => this.matrix.map(row => row[columnIndex]));
    }
}