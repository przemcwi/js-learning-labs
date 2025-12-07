function countOccurrences(array) {
  const obj = {}; // lokalny obiekt
  for (const item of array) {
    obj[item] = (obj[item] || 0) + 1;
  }
  return obj;
}

module.exports = countOccurrences;