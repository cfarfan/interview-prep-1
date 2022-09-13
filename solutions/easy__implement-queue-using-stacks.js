var MyQueue = function () {
  this.main = [];
  this.temp = [];
};

/**
 *
 * time: O(n)
 * space: O(n)
 * approach:
 * Use two stacks, move all items to temp stack using pop(). Add x to main
 * stack using push(). Fill main stack by pop() items out from temp stack and
 * push() to main stack.
 */
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.main.length) {
    const item = this.main.pop();
    this.temp.push(item);
  }
  this.main.push(x);
  while (this.temp.length) {
    const item = this.temp.pop();
    this.main.push(item);
  }
};

/**
 * time: O(1)
 * space: O(1)
 * approach:
 * Use stack pop() on main stack.
 */
/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.main.pop();
};

/**
 * time: O(1)
 * space: O(1)
 * approach:
 * Return last item of the array.
 */
/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.main[this.main.length - 1];
};

/**
 * time: O(1)
 * space: O(1)
 * approach:
 * Return true only if array length is 0.
 */
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.main.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
