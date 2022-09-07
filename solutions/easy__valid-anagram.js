/**
 * time: O(n+m)
 * space: O(n+m)
 * approach:
 * Store char frequency of each word and compare those frequencies.
 * If frequencies between words are not equal, return false. After compare
 * frequencies check if the length of both words are equal, this is because
 * second word can have same chars frequencies as the first word but can have
 * additional and distinct chars.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const frequencyS = {};
  const frequencyT = {};

  const storeFreq = (word, frequency) => {
    for (let i = 0; i < s.length; i++) {
      frequency[word[i]] = (frequency[word[i]] || 0) + 1;
    }
  };
  storeFreq(s, frequencyS);
  storeFreq(t, frequencyT);

  const chars = Object.keys(frequencyS);
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (frequencyS[char] !== frequencyT[char]) {
      return false;
    }
  }

  return s.length === t.length;
};
