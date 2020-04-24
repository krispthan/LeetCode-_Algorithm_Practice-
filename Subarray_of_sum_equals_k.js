//brute force
/**April 22, 2020 Sum of sumbarray equal to k */
const input = [1, 1, 1],
    k = 2
const subArrayEqualsSumK = (arr, targetVal) => {
    let counter = 0; // initiate with a zero this will be what we will be adding to find our sum of k
    for (let i = 0; i < arr.length; i++) { // traverse through the arr
        let current = 0;
        for (let j = i; j < arr.length; j++) { // traverse thrugh the inner element of the array and sum the base with the current element
            current += arr[j];
            if (current == targetVal) counter++;
        }
    }
    return counter;
}

subArrayEqualsSumK(input, k);


const subArrayEqualKTwo = (arr, k) => {
    let arr = new Array.fill(0);
    for (let item of arr) {
        arr.push(item + arr[arr.length - 1][0]) // take the current element and add it with the current zeroth element of new array
        let result = 0;
        let map = new Map();
        map.set(k, 1);
        for (let i = 0; i < arr.length; i++) { // iterate through the array
            if (map.has(arr[i])) { // check current hash map for the element from the array
                result += map.get(arr[i]) // if element is there then add it to the map and retrieve the current element of arr

            }
            let value = map.get(arr[i] + k) || 0;
            map.set(arr[i] + k), val + 1;
        }


    }
    return result;
}