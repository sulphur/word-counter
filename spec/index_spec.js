let TextTools = require('../lib/index.js')

describe('word counting function', function(){

  it('for 3 letter phrase', function(){
    let aPhrase = "Hello how are you ?"
    expect(JSON.stringify(TextTools.wordCounter(aPhrase)))
      .toBe(JSON.stringify({"Hello":1,"how":1,"are":1,"you":1}));
  });

  it('for 3 line text with repeating words', function(){
    let aPhrase = "Hello do you do ? \
    Where are you living ? \
    Where are you from ?"
    expect(JSON.stringify(TextTools.wordCounter(aPhrase)))
      .toBe(JSON.stringify({"Hello":1,"you":3,"Where":2,"are":2,"living":1,"from":1}))
  });
});
