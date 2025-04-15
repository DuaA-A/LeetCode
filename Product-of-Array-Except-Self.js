/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var n = nums.length;
    var mul = 1, cnt0=0;
    var sol= new Array(n).fill(1);
    for(let i=0;i<n;i++){
        if (nums[i] !== 0)
            mul *= nums[i];
        else
            cnt0++;
    }
    for(let i=0;i<n;i++){
        if(cnt0>1)
            sol[i]=0;
        else if(cnt0===1)
            sol[i] = nums[i] === 0 ? mul : 0;
        else
            sol[i] =mul / nums[i];
    }
    return sol;
};