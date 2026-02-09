//334. Increasing Triplet Subsequence

var increasingTriplet = function(nums) {
 let first = nums[0];
 let second = null;

 for (let i=1; i < nums.length; i++){
    debugger
    let item = nums[i];

    if(item > second && typeof second === 'number' && second > first){
        return true
    }

    if(item < first ){
        debugger
        first = item
    }

    if(item > first){
        debugger
        second = item
    }
 }

    return false
    
};
console.log(increasingTriplet([1,0,-1,0, 1000])) // должно быть true
console.log(increasingTriplet([1,5,0,2,6]))     // должно быть true
console.log(increasingTriplet([1,6,2,5,1]))     // должно быть true
console.log(increasingTriplet([5,4,3,2,1]))     // должно быть false


var foo = 1;
function bar() {
  foo = 10;
  return;
  function foo() {}
}
bar();
console.log(foo);