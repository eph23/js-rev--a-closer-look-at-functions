'use strict';

const flight = 'LH234';

const eph = {
  name: 'Ephraim',
  passport: 245678909878,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);

  if (passenger.passport === 245678909878) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, eph);
// console.log(flight);
// console.log(eph);

// const flightNum = flight;
// const passenger = eph;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(eph);
checkIn(flight, eph);
