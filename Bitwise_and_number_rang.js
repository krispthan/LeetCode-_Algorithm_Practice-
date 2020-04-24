/**April 23, 2020 Bitwise and Number Range */
/* Create a place holder that will allow you to go thrugh the list of bits and get the result,
if the 0 is shown, then need to flip the 0 to a 1, vice versa, if there is a 0, the result will be a zero*/
const bitwiseNumRange = (m, n) => {
    let answer = 0;
    while (m != n) {
        answer++;
        m >>= 1;
        n >>= 1;
    }
    m << answer;
}

