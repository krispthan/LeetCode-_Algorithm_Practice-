/**April 26th 2020 */
const longestCommonSubsequence = (text1, text2) => {
    const n = text1.length;
    const m = text2.length;
    let matrix = [];
    let max = 0;
    for (let i = 0; i < n; i++) { //traverse through the text1 string
        matrix.push(new Array(n).fill(0)); //push the second string into the matrix array and fill with 0
    }
    for (let i = 0; i < n; i++) { // traverse through the first str
        for (let j = 0; j < m; j++) { // traverse through the second str
            if (text[i] === text[j]) {
                matrix[i][j] = (matrix[i - 1] && matrix[i - 1][j - 1] ? matrix[i - 1][j - 1] : 0) + 1; // curent matrix[i][j] will change based on tne conditions 

            } else {
                matrix[i][j] = Math.max(matrix[i - 1] ? matrix[i - 1][j] : 0, matrix[i][j - 1] || 0)
            }
            max = Math.max(max, matrix[i][j]);
        }
    }
    return max;
}