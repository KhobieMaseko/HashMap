class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  // Hash function with modulo applied during iteration
  hash(key) {
    if (typeof key !== 'string') {
      throw new Error('Keys must be strings');
    }

    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // Set key-value pair
  set(key, value) {
    const index = this.hash(key);
    this._checkBounds(index);

    const bucket = this.buckets[index];
    const existingEntryIndex = bucket.findIndex(entry => entry.key === key);

    if (existingEntryIndex >= 0) {
      // Update existing key
      bucket[existingEntryIndex].value = value;
    } else {
      // Add new entry
      bucket.push({ key, value });
      this.size++;

      // Check if resize is needed
      if (this._shouldResize()) {
        this._resize();
      }
    }
  }

  // Get value by key
  get(key) {
    const index = this.hash(key);
    this._checkBounds(index);

    const bucket = this.buckets[index];
    const entry = bucket.find(entry => entry.key === key);

    return entry ? entry.value : null;
  }

  // Check if key exists
  has(key) {
    const index = this.hash(key);
    this._checkBounds(index);

    return this.buckets[index].some(entry => entry.key === key);
  }

  // Remove key-value pair
  remove(key) {
    const index = this.hash(key);
    this._checkBounds(index);

    const bucket = this.buckets[index];
    const entryIndex = bucket.findIndex(entry => entry.key === key);

    if (entryIndex >= 0) {
      bucket.splice(entryIndex, 1);
      this.size--;
      return true;
    }

    return false;
  }

  // Get number of stored keys
  length() {
    return this.size;
  }

  // Clear the hash map
  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  // Get all keys
  keys() {
    return this.buckets.flatMap(bucket => bucket.map(entry => entry.key));
  }

  // Get all values
  values() {
    return this.buckets.flatMap(bucket => bucket.map(entry => entry.value));
  }

  // Get all entries
  entries() {
    return this.buckets.flatMap(bucket =>
      bucket.map(entry => [entry.key, entry.value])
    );
  }

  // Helper methods
  _checkBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  _shouldResize() {
    return this.size / this.capacity >= this.loadFactor;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    // Rehash all entries
    oldBuckets.forEach(bucket => {
      bucket.forEach(entry => {
        this.set(entry.key, entry.value);
      });
    });
  }
}

module.exports = HashMap;
