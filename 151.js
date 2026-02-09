//151. Reverse Words in a String
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};


console.log(reverseWords("a good   example"))
