const HashSet = require('./HashSet');

function testHashSet() {
  const set = new HashSet();

  set.add('apple');
  set.add('banana');
  set.add('carrot');
  set.add('apple'); // Duplicate

  console.log('Set size:', set.length()); // Should be 3
  console.log('Has "banana":', set.has('banana')); // true
  console.log('Has "dog":', set.has('dog')); // false
  console.log('Remove "carrot":', set.remove('carrot')); // true
  console.log('After removal size:', set.length()); // Should be 2
  console.log('All keys:', set.keys());

  set.clear();
  console.log('After clear size:', set.length()); // Should be 0
}

testHashSet();
