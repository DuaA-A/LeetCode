/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.trim().split(/\s+/).reverse();
    const sol = words.join(" ");
    return sol;
};