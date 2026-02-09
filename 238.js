//238. Product of Array Except Self

var productExceptSelf = function(nums) {
    let answer = new Array(nums.length);
    
    let count = 1

    for (let i=0; i < nums.length; i++){
        answer[i]=count;
         count *= nums[i];
    }
       
    count = 1
    for (let i = nums.length-1; i >= 0; i--){
        answer[i] *= count;
         count *= nums[i];
    }

    return answer
};
console.log(productExceptSelf([1,2,3,4]))