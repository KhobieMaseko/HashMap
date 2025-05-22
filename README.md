# HashMap and HashSet Implementation

A JavaScript implementation of HashMap and HashSet data structures for [The Odin Project](https://www.theodinproject.com) curriculum.

## Features

### HashMap Implementation

- **Dynamic resizing** - Automatically grows when load factor (default 0.75) is reached
- **Collision handling** - Uses separate chaining with linked lists
- **Complete API**:
  - `set(key, value)` - Inserts key-value pair
  - `get(key)` - Retrieves value by key
  - `has(key)` - Checks if key exists
  - `remove(key)` - Deletes key-value pair
  - `length()` - Returns number of entries
  - `clear()` - Removes all entries
  - `keys()` - Returns all keys
  - `values()` - Returns all values
  - `entries()` - Returns all [key, value] pairs

### HashSet Implementation (Extra Credit)

- Built on top of HashMap
- Similar API with set-specific operations:
  - `add(key)` - Inserts key
  - `has(key)` - Checks membership
  - `remove(key)` - Deletes key
  - `length()` - Returns count
  - `clear()` - Clears set
  - `keys()` - Returns all keys
  - `entries()` - Returns all [key, key] pairs

## Installation

```bash
git clone https://github.com/KhobieMaseko/HashMap.git
cd HashMap
```

## Testing

```bash
node hashMapTest.js
node hashSetTest.js
```
