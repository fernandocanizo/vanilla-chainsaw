'use strict';

const shuffleArray = require('./shuffleArray');

const createRgbColor = () => {
	const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f',
  ];

  let color = '#';
  for (let i = 0; i < 6; i++) {
    let sArray = shuffleArray(hex);
    // Append first hex value to the string
    color += sArray[0];
  }

	return color;
};


module.exports = createRgbColor;
