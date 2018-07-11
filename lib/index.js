let wordCounter = function(text) {
  let result = text.replace("\n", " ")
                   .split(" ")
                   .filter(word => word.length > 2)
                   .reduce((acc, word) => {
                     acc[word] ? acc[word]++ : acc[word] = 1
                     return acc;
                   }, {})
  return result;
}

exports.wordCounter = wordCounter
