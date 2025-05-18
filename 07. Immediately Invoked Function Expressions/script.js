'use strict';

const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

(function () {
  console.log(`This will never run again`);
})();

(() => console.log(`This will ALSO never run again`))();

{
  const isPrivate = 23;
  var notPrivate = 99;
}
// console.log(isPrivate);
console.log(notPrivate);
