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

//slice method when going through a string and checking every two letters in a str str.slice( i , i + 2);


//charAt(i) = present the char at that index 
//charAt(.length-1) = present the char at the  top of stack

//when creating an array starting at the first row of grid 
let startingGridFirstRow = new Array(grid.length)[grid[0].length];

//traverse through the array and go into each cell of the same array;
for (let i = 0; i < startingGridFirstRow.length; i++) {
    for (let j = 0; j < startingGridFirstRow[i].length; j++)
}
// find current peak or midpoint of an array 
const findPeak = (arr, l = 0, h = arr.length) => {
    let mid = Math.floor(h + 1) / 2;
    while (arr[mid - 1] > arr[mid] || arr[mid + 1] > arr[mid]) {
        arr[0] > arr[mid] ? (h = mid) : (l = mid);
        //find new mid
        mid = Math.floor(h + 1) / 2;
    }
    return mid;
}

//row  let row = arr.length; also known as length
//col let col = arr[0].length; also known as width

//create a binary search
const binarySearch = arr =>{
    let row = arr.length;
    let col = arr[0].length;
    let r = 0;
    let left= 0;
    let mid = Math.floor((row + col)/ 2);
    for (col < row){
        return -1;
    }
    if ( target == arr[mid]){
        return mid;
    } else if ( target <arr[mid]){
        return binarySearch(arr, low, mid-1, target)
    } else 
}