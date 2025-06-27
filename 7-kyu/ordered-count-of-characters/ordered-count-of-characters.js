const orderedCount = function (text) {
  const splits = text.split('');
  const result = [];
  const seen = [];
​
  for (let i = 0; i < splits.length; i++) {
    const char = splits[i];
    if (!seen.includes(char)) {
      seen.push(char);
      const count = splits.filter(c => c === char).length;
      result.push([char, count]);
    }
  }
​
  return result;
}
​