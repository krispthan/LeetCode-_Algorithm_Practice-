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