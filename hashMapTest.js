const HashMap = require('./HashMap');

function testHashMap() {
  const test = new HashMap(16, 0.75);

  // Initial population
  test.set('apple', 'red');
  test.set('banana', 'yellow');
  test.set('carrot', 'orange');
  test.set('dog', 'brown');
  test.set('elephant', 'gray');
  test.set('frog', 'green');
  test.set('grape', 'purple');
  test.set('hat', 'black');
  test.set('ice cream', 'white');
  test.set('jacket', 'blue');
  test.set('kite', 'pink');
  test.set('lion', 'golden');

  console.log('Initial size:', test.length()); // Should be 12
  console.log('Current capacity:', test.capacity); // Should be 16
  console.log('Load factor:', test.size / test.capacity); // Should be 0.75

  // Test overwriting
  test.set('apple', 'green');
  test.set('banana', 'brown');
  console.log('After overwriting size:', test.length()); // Should still be 12
  console.log('Updated apple color:', test.get('apple')); // Should be 'green'

  // Trigger resize
  test.set('moon', 'silver');
  console.log('After resize size:', test.length()); // Should be 13
  console.log('New capacity:', test.capacity); // Should be 32
  console.log('New load factor:', test.size / test.capacity); // Should be ~0.406

  // Test other methods
  console.log('Has "carrot":', test.has('carrot')); // true
  console.log('Has "sun":', test.has('sun')); // false
  console.log('Get "dog":', test.get('dog')); // 'brown'
  console.log('Remove "frog":', test.remove('frog')); // true
  console.log('After removal size:', test.length()); // Should be 12

  // Test collection methods
  console.log('All keys:', test.keys());
  console.log('All values:', test.values());
  console.log('All entries:', test.entries());

  // Test clear
  test.clear();
  console.log('After clear size:', test.length()); // Should be 0
}

testHashMap();
