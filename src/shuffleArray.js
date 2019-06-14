'use strict';

// Randomly shuffle an array
// https://stackoverflow.com/a/2450976/1293256
// Fisher-Yates (aka Knuth) Shuffle algorithm

const shuffleArray = (array) => {
  const arrayCopy = [ ... array ];
  let currentIndex = arrayCopy.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrayCopy[currentIndex];
    arrayCopy[currentIndex] = arrayCopy[randomIndex];
    arrayCopy[randomIndex] = temporaryValue;
  }

  return arrayCopy;
};


module.exports = shuffleArray;
