var isSameTree = function(p, q) {
  
    function recursiveThree(node1,node2){
        if(node1 === null && node2 === null) return true;
        if(node1 === null || node2 === null || node1.val !== node2.val) return false
        return recursiveThree(node1.left, node2.left) && recursiveThree(node1.right, node2.right)
    }
    return recursiveThree(p,q)
};

const pNode={
val: 1,
left: { val: 2, left: null, right: null },
right: { val: 3, left: null, right: null }
}
const pNode2 = {
val: 1,
left: { val: 2, left: null, right: null },
right: { val: 3, left: null, right: null }
}
console.log(isSameTree(pNode,pNode2))