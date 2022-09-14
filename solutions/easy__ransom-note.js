/**
 * time: O(n)
 * space: O(n)
 * Approach:
 * Use a hash-table to keep track of char frequencies.
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const getFrequency = (s) => {
    const frequency = {};
    for (let i = 0; i < s.length; i++) {
      frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }
    return frequency;
  };
  const ransomCharsFreq = getFrequency(ransomNote);
  const magazineCharsFreq = getFrequency(magazine);

  const ransomChars = Object.keys(ransomCharsFreq);
  for (let i = 0; i < ransomChars.length; i++) {
    const char = ransomChars[i];
    const ransomCharFreq = ransomCharsFreq[char];
    const magazineCharFreq = magazineCharsFreq[char];
    if (!magazineCharFreq || ransomCharFreq > magazineCharFreq) {
      return false;
    }
  }
  return true;
};
