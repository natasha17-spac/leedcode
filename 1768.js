var mergeAlternately = function(word1, word2) {
    let result = [];
    let biggerString = word1.length > word2.length ? word1 : word2;
    
    for (let i=0; i < biggerString.length; i++ ){
        if(word1[i]){
            result.push(word1[i])
        }
        if(word2[i]){
            result.push(word2[i])
        }
    } 
    return result.join('')
};

console.log(mergeAlternately("ab", "pqr"))