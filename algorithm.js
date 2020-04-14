/*Single Num*/
const arr = [2, 2, 1]
const singleNum = (arr) => {
    let newObj = {}; //create obj
    for (let i of arr) { // go through array
        if (newObj[i]) { // check if each element in the array is already in the obj
            newObj[i] += 1; //if not , then add 
        } else {
            newObj[i] = 1
        }
    } // check if the obj prop is more than 1 ,if it is return that prop:
    //iterate into the obj
    for (let v in newObj) {
        //check if the  newObj[i] > 1
        if (newObj[v] > 1) {
            return v;
        }
    }

    /*Remove Non-duplicates*/

    const arr2 = [2, 2, 4, 1];
    const removeArrNum = arr => {
        let newObj = {};
        let newArr = [];
        for (let i of arr) {
            if (newObj[i]) {
                newObj[i] += 1;
            } else {
                newObj[i] = 1;
            }
        }
        for (let v in newObj) {
            if (newObj[v] === 1) {
                newArr.push(v);
            }
        }
        return newArr;

    }

    removeArrNum(arr2);


    /*Remove elements that appear n times */
    //input: [1,1,3,2,2,4], 2;
    //output: [3,4]
    // newObj= {
    //     1:2
    //     2:2 
    //     3:1
    //     4:1
    // }
    //if the number is != num = push to new Arrr
    const arr3 = [1, 1, 3, 2, 2, 4];
    const int = 2;
    const removeNumAmountOfTimes = (arr, num) => {
        //create a frequency table  
        let newObj = {};
        let newArr = [];
        for (let i of arr) {
            if (newObj[i]) {
                newObj[i] += 1;
            } else {
                newObj[i] = 1;
            }
        }
        //iterate through the obj 
        for (let v in newObj) {
            if (newObj[v] != num) {
                newArr.push(v);
            }
        }
        return newArr;
    }
    removeNumAmountOfTimes(arr3, int);
}
/*Happy Number*/

var isHappy = function (n) {
    //create a boolean map
    let booleanMap = {};
    //check if n is !== 1 then let the booleanMap be true and proceed with the function
    while (n !== 1) {
        booleanMap[n] = true;
        let convertNum = n.toString().split("");
        n = convertNum.reduce((prev, next) => {
            return prev + parseInt(Math.pow(next, 2))
        }, 0)
        //if the n does work then we will convert the boolean map to false 
        if (booleanMap[n]) {
            return false;
        }
    }
    return true;
};

/**Add a number  recursively */
const sumOfRecursion = n => {
    if (n == 0) {
        return 0;
    }
    return n % 10 + sumOfRecursion(Math.floor(n / 10));
}
sumOfRecursion(432);

/**Maximum Subarray  */

// output :  6

/*April 4.2020 Quarantine 30 days in  */
/**iteratate the array take the first two elements and find the sum 
 *take the middle number of the array  let  middle = numArr[Math.round((arr.length - 1) / 2)];
 * loop the array and sum (i+1), 
 * for (let i in middle ){
 *  i + (i+1) 
 * }
 */

let numArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const findSumObj = (indexPos, sumArr) => {
    //create a object 
    let returnArray = []
    for (let i = indexPos; i < sumArr.length; i++) {
        let sumOfJ = 0;
        for (let j = indexPos; j <= i; j++) {
            sumOfJ += sumArr[j];
        }
        returnArray.push({
            index: indexPos,
            pos: i,
            sum: sumOfJ
        })
    };
    let max = returnArray[0].sum;
    let maxCounterPos = 0;
    let counter = 0
    for (let x of returnArray) {
        if (x.sum > max) {
            max = x.sum;
            maxCounterPos = counter;

        }
        counter++;
    }
    return returnArray[maxCounterPos];

}


const helpMe = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(findSumObj(i, arr))
    }
    let max = 0;
    for (let x of newArr) {
        if (x.sum > max) {
            max = x.sum;
        }
    }
    return max;
}
helpMe(numArr)

findSumObj(0, numArr);

/* Move Zeros  */
const checksZeroArr = [0, 1, 0, 3, 12];
//start from the last index of the array , check if the array is a 0, if it is, then move the zero to the back and push it 
const moveZeros = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

/*Maximum Subarray */
/*April 5.2020 Quarantine 30 days in  */
/**find the middle ponint of the element arr(Math.round(arr.length -1/2));
 * 1)split the array in half : left and right  MaxLeftSum  , MaxRightSum , TotalSum, MaxValues
 * maxSubArray (sum === midPoint )
 * Merge the left subArray = subLeft = max (LeftSum + TotalSum + MaxRight);
 * Merge the right subArray = subRight = max (RightSum + TotalSum + MaxLeft);
 * TotalSum = (sumLeft + sumRight)
 */
const subArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const maximumSubArray = arr => {
    let currentMax = 0;
    let maxSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        currentMax = Math.max(0, currentMax + arr[i]);
        maxSoFar = Math.max(currentMax, maxSoFar)
    }
    return maxSoFar;

}

maximumSubArray(subArr)


/*Best Time to Buy and Sell Stock II*/
const input = [7, 1, 5, 3, 6, 4]
const sellAndBuy = arr => {
    let profit = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
            if (arr[i] < arr[i + 1]) {
                profit += arr[i + 1] - arr[i];
            }
        }

    }
    return profit;
}
sellAndBuy(input);

/*Group Anagrams */
/*April 6.2020 Quarantine 30 days in  */
let inputs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupAnagrams = strs => {
    let hash = {}; //create a hashtable to store the str
    let newArr = [];
    strs.forEach(str => {
        //loop through the arr and for each string , we will split the str and sort it and set it to a variable "letters"
        let letters = str.split("").sort(); //eat => "ate"
        //check if the letter is already in the hash table, if not push the str, 
        if (hash[letters]) {
            hash[letters].push(str)
        } else {
            hash[letters] = [str];
        }
        //if is , add the str as the value of the letter property

    })
    for (let v in hash) {
        newArr.push(hash[v]);
    }
    return newArr;


}
groupAnagrams(inputs)

/*Count Elements*/
/*April 7.2020 Quarantine 30 days in  */
// create a hash table 
// create a counter 
//loop through the arr - check if the current element 
const arr1 = [1, 2, 3];
const countElements = arr => {
    let hash = {};
    let counter = 0;
    arr.forEach(element => {
        if (hash[element]) {
            hash[element] += 1

        } else {
            hash[element] = 1
        }
    })
    for (let i in hash) {
        let futureKey = parseInt(i) + 1 // check if the future key is 1 more than the previous by converting it to number in order to add it 
        if (hash.hasOwnProperty(futureKey.toString())) { //check if the current obj key is what the future key is and convert num back to string
            counter += hash[i]
        }

    }
    return counter;
};
countElements(arr1);
/*April 8.2020 Quarantine 30 days in  */
/**Linked List**/
const Node = (data, nex) => {
    this.data = data;
    this.next = next;
}
let n1 = new Node("Hello", null);
let n2 = new Node("21", n1);
let n3 = new Node("Green", n2)

//assign a node to the head which function as the entry into our linked list 
let head = n3;
//set up pointer to both start at the head of the linked list 
let fastPointer = head; // skips two nodes at a time , will reach the end of the list first 
let slowPointer = head; // skips one node at a time , while reach the middle of the list 

while (fastPointer.next != null && fastPointer.next.next != null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
}
//slowpointer is now at the middle node of the linked list 
slowPointer.data;

/***3Sum */
//first sort the array Given array nums = [-1, 0, 1, 2, -1, -4] // 
/*April 8.2020 Quarantine 30 days in  */
//brute force
const check3Sum = (nums) => {
    let newArr = [];
    nums = nums.sort((a, b) => {
        return a - b;
    })
    let numLength = nums.length;
    //creat an array , create i , j , k , create numsLength =nums.length;
    for (let i = 0; i < numsLength; i++) {
        //check if i is bigger than 0 and if the nums arr[i]  === nums(i-1)
        if (i > 0 && nums[i] === nums[i - 1]) continue // if the next element is the same as the current jump over to next interation

        for (j = i + 1; i < numsLength; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            for (k = j + 1; k < numsLength; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) continue;

                if (nums[i] + nums[j] + nums[k] === 0) { //check if the sum is equal to zero
                    newArr.push(nums[i], nums[j], nums[k])
                }
            }

        }

    }
    return newArr;
}
//alternate solution
const check3Sum = arr => {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let start = i + 1;
        let end = arr.length - 1;
        if (i < 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        while (start < end) {
            if (end < arr.length && arr[end] == arr[end + 1]) {
                end--;
                continue;
            }
            if (arr[i] + arr[start] + arr[end] === 0) {
                newArr.push(arr[i], arr[start], arr[end]);
                start++;
                end--;
            } else if (arr[i] + arr[start] + arr[end] < 0) {
                start++;
            } else {
                end--;
            }

        }
    }
    return newArr;
}

/*Backspace String Compare  */
//input: two stirngs and output:boolean */
/*April 9 ,2020 Quarantine 1 Month  */
const backSpaceCompare = (S, T) => {
    return createSt(S) === createSt(T) ? true : false
}

const createSt = (S) => {
    let str = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "#") {
            str.pop();
        } else {
            str.push(S[i]);
        }
    }
    return str = str.join("");
}


/*April 10.2020 Min Stack */
// Have two stacks , first stack is where push(), pop(), method . second stack keeps track of the min and top num

//create identifier for two stacks 
const minStack = () => {
    this.stackOne = [];
    this.minStack = [];
}

const push = (x) => {
    //push the val into the first stack
    //check the second min stack to see if its empty || if the firstStack (x) is smaller than the current min stack 
    //if so, push the (x), if not return 
    this.stackOne.push();
    if (minStack.length === 0 || x <= this.minStack[this.minstack.length - 1]) {
        this.minStack.push(x)
    }
}
const pop = () => {
    let x = this.stackOne.pop(); // pop the first val of  stackOne off
    //check if the current x val is equal to the top stack val of the minStack, if so , pop the ()
    if (x === this.minStack[minStack.length - 1]) {
        this.minStack.pop();
    }
}
const top = () => { //check the top value of the firststack and return that value 
    return this.stackOne[stackOne.length - 1];
}
const getMin = () => {
    //check the minstack min top value of the stack and return that value 
    return tthis.minStack(this.minStack.length - 1);
}


/**April 12, 2020  Last Stone Weight  */
const stoneWeightArr = [2, 7, 4, 1, 8, 1];
const lastStoneWeight = stones => {
    //check if the array is there 
    while (stones.length > 1) {
        let sortedArr = stones.sort((a, b) => {
            b - a;
        }) // sort the array from descending order 
        let diff = sortedArr[0] - sortedArr[1]; // check the difference of the sorted index [0] - sorted index[1];
        if (diff != 0) { // if the diff is not eqaul to zero , then push the difference to sorted arr
            sortedArr.push[diff];
        }
        stones = sortedArr.slice(2) // takes the first of the two indexes of the arr
    }
    if (stones.length === 0) {
        return 0;
    } else {
        return stones[0];
    }
}
lastStoneWeight(stoneWeightArr);


/* April 13.2020 Contiguous Array : Find the max length of conti subaway with equal # of 0 and 1 */
const contigInput = [0, 1];
const contiguousArr = arr => {
    //create a hash Map
    let hashMap = {
        0: -1
    } // save initial count of zeros and -1
    //create a max_length = 0;
    let max_length = 0;
    let count = 0;
    // iterate through the array and if there is a hashMap[i]  equal, decrement
    //if there is a hashMap[i] == 1, increment
    for (let i = 0; i < arr.length; i++) {
        //check if the current arr[i] is equal to the value of 1 or zero 
        //if 1: then increment 1 , if 0: then decrement;
        let currentVal = arr[i] === 1 ? 1 : -1;
        count += currentVal; // running the totall current count

        //put the count and index into the hashtable when looping through  it
        if (hashMap.hasOwnProperty(count)) { //  if current hashtable has the same count
            max = Math.max(max, i - hashMap[count]) // the diff between the current and current hashMap[count]
        } else {
            hashMap[count] = i; // store the count
        }
    }
    return max_length;
}

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