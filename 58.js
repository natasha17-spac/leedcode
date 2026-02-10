var lengthOfLastWord = function(s) {
    const tr = s.trim().split(' ');
    return tr.at(-1).length
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))