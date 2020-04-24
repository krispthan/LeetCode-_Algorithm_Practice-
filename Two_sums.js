const input = [2, 7, 11, 15];
const target = 9;
const twoSums = (nums, target) => {
    //creat a hash map
    let map = new Map();
    //traverse through the list of nums
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i); // set the current nums[i] element and i to the hashmap

    }
    //traverse through the list of arrays again
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]; //check the diff from the target - nums[ i]
        if (map.has(diff) && map.get(diff) != i) {
            return (i, map.get(diff));
        }
    }
}

const twoSums(input, target);