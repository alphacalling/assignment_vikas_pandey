const readline = require('readline');
const levenshtein = require('fast-levenshtein');

// Approximate Search 

// predefined keywords 
const strings = [
  'absolutely',
  'active',
  'activist',
  'activity',
  'absolutly',
  'actv',
  'activ',
  'activity'
];

const k = 5; //no of suggestion to return

// function 
const findSimilarStrings = (input, strings) => {
  return strings
    .map(str => ({ str, distance: levenshtein.get(input, str) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k)
    .map(entry => entry.str);
};

// function to handle input & output 
const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('enter words for similar search:');

  rl.on('line', (input) => {
    const suggestions = findSimilarStrings(input, strings);
    console.log(`Suggestions: ${suggestions.join(', ')}`);
    console.log('enter another word or press Ctrl+C to exit:');
  });
};

// calling main function 
main();
