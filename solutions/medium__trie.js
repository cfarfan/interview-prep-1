var Trie = function () {
  this.trieNode = new TrieNode();
};

var TrieNode = function () {
  this.children = {};
  this.isLast = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentNode = this.trieNode;
  for (let c of word) {
    if (!currentNode[c]) {
      currentNode[c] = new TrieNode();
    }
    currentNode = currentNode[c];
  }
  currentNode.isLast = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentNode = this.trieNode;
  for (let c of word) {
    if (!currentNode[c]) return false;
    currentNode = currentNode[c];
  }
  return currentNode.isLast;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentNode = this.trieNode;
  for (let c of prefix) {
    if (!currentNode[c]) return false;
    currentNode = currentNode[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
