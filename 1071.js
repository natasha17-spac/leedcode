//1071. Greatest Common Divisor of Strings
var gcdOfStrings = function(str1, str2) {
    let result = [];
    let string1 = str1 + str2;
    let string2 = str2 + str1;

    if(string1 !== string2){
        return ''
    }

    function gcd(a, b){
        if(b === 0) return a;
        return gcd(b, a % b)
    }

    const resultGCD = gcd(str1.length, str2.length)

    result.push(string1.slice(0, resultGCD))
    return result.join()
};
console.log(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX','TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'))