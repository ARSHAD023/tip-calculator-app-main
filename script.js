'use strict';

var mac = document.querySelector('.tipvalue');
var max = document.querySelector('.tipTotal');

mac.textContent = '$0.00';
max.textContent = '$0.00';

const input = document.querySelector('.value');
input.addEventListener('input', function () {
  const money = Number(document.querySelector('.value').value);

  console.log(money);

  const persons = document.querySelector('.persons');
  persons.addEventListener('input', function () {
    const people = Number(document.querySelector('.persons').value);
    console.log(people);
  });

  if (persons == 5);
  var totalTip = money + (money * 5) / 100;
  console.log(totalTip);
});

console.log();
