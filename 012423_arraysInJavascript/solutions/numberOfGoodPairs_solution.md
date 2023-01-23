# Problem URL
https://leetcode.com/problems/number-of-good-pairs/description/

# Intuition
We are comparing elements in this array to see if they are equal. As long as the indices are different and we don't double count a pair then all we are really doing is counting how many pairs of elements are equal in value to each other.

# Approach
how do we make sure we don't double count?

```
let i = ith element, j = i+1

while j < array.length
    compare array[i] to array[j]
    IF they are equal 
    THEN pairs++

Afterwards, set i++ and j will continue to be j = i + 1
This assures it will never be the same pair and it will go through all elements as long as i starts at index 0
```

# Complexity
- Time complexity:
There are two for loops of counts array.length - 1. If n = array.length - 1 then the number of iterations is (n-1)(n-1) = n^2 - 2n + 1

We will ignore 1 since it is a constant and can't increase in value.

the limit of n^2/2n as n -> infinity is infinity, therefore n^2 will grow more rapidly than 2n, so the time complexity can be defined as O(n^2) 

- Space complexity:
since it is one array of length n, the memory usage complexity can be defined as O(n)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairs = 0;
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] == nums[j]){
                pairs++;
            }
        }
    }
    return pairs;
};
```