/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[j]=nums[i];
            j++;
        }
    }
    for(let i=j;i<nums.length;i++){
        nums[i]=0;
    }
};