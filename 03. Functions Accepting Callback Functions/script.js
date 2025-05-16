'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWords] = str.split(' ');
  return [first.toUpperCase(), ...otherWords].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Ephraim', 'Martha', 'Adam'].forEach(high5);
