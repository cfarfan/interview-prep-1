/**
 * time: O(n*l*log(l)) where l is max word length
 * space: O(n*l)
 * approach:
 * Sort chars of a word in asc order and use that as a key, then store an array
 * and add each word that matches this key.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = {};
  for (let word of strs) {
    const key = word.split("").sort();
    if (anagrams[key] === undefined) {
      anagrams[key] = [];
    }
    anagrams[key].push(word);
  }
  return Object.values(anagrams);
};
