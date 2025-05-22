const HashMap = require('./HashMap');

class HashSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.hashMap = new HashMap(initialCapacity, loadFactor);
  }

  add(key) {
    this.hashMap.set(key, true); // Value doesn't matter, we just store the key
  }

  has(key) {
    return this.hashMap.has(key);
  }

  remove(key) {
    return this.hashMap.remove(key);
  }

  length() {
    return this.hashMap.length();
  }

  clear() {
    this.hashMap.clear();
  }

  keys() {
    return this.hashMap.keys();
  }

  // Not part of standard Set interface but useful
  entries() {
    return this.hashMap.keys().map(key => [key, key]);
  }
}

module.exports = HashSet;
