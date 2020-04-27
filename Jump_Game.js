/**April 25 2020 */
const jumpGame = arr => {
    let prev = 1; //create a previous value 
    for (let i = 0; i < nums.length; i++) { //traverse through the array
        prev = Math.max(prev - 1, current); //replace the previous value with Math.max
        // find the Math.max ( of the prev -1 and the current index)
        //check if the current index is not the same as length of arr -1 && previous === 0 , if so  return false ,
        if (i != num.length - 1 && prev === 0) return false;

    }
    return true;
}