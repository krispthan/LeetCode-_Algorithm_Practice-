const arr = [1, 2, 3, 4, 5];
//sort in descending order  
arr.sort((a, b) => {
    return b - a;
})
// sort in ascending order 
arr.sort((b, a) => {
    return a - b;
})

//create a hash map by using built in Map Object
let hashMap = new Map();
let hashMap = {
    0: -1
};
hashMap.firstProp = "1";
hashMap.twoProp = "2";
console.log(Object.keys(hashMap).length);
for (let i in hashMap) {
    console.log(`There are ${hashMap}.length in the hashMap`);
}

// hashMap.hasOwnProperty[x] check if the current hashMap has the current prop


/**April 14, 2020 Performance String Shift */
//create a shift Count identifier  to initiate the count 
//traverse through the shift.length and check if the current direction is Zero
//if zero, then add the current Amount , if 1, then add curent amount -1;
//then check for effective rotation:
// set the shiftCount = shiftCount by % of string.length
//check if the shiftCount is more > 0, if its positive, move the string to the left 
//check if the shiftcount is less < 0, negative move the string to the right 

const performanceStringShift = (s, shift) => {
    let shiftCount = 0;
    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0] === 0) {
            shiftCount += shift[i][1];
        } else {
            shiftCount -= shift[i][1];
        }
    }
    let result = null;
    if (shiftCount > 0) { // move the char of string to the right append to the beginning
        shiftCount %= s.length;
        let firstString = s.substr(0, shiftCount);
        let backString = s.substr(shiftCount);
        result = backString + firstString;

    } else { // nregative move the char of string to the back
        shiftCount = Math.abs(shiftCount) % s.length;
        let len = s.length;
        firstString = s.substr(0, len - shiftCount);
        backString = s.substr(len - shiftCount);
        result = backString + firstString;

    }
    return result;

}