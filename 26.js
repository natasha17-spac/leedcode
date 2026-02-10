var removeDuplicates = function(nums) {
    let read = 1;
    let write = 1;

    while(read < nums.length){
       if(nums[read]>nums[write-1]){
           nums[write] = nums[read]
           write++
       }
        read++;
    }

    return write;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));