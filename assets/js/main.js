console.log('test');

const monate = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

const wochenTage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

const jahrAnzeige = document.getElementById('jahr');
const monatAnzeige = document.getElementById('monat');
const tagAnzeige = document.getElementById('tag');
const stundeAnzeige = document.getElementById('stunde');
const minuteAnzeige = document.getElementById('minute');
const sekundeAnzeige = document.getElementById('sekunde');
const milliAnzeige = document.getElementById('milisekunden');

const wochenTagAnzeige = document.getElementById('wochen-tag');
const monatsNameAnzeige = document.getElementById('monats-name');

const d = new Date();

const jahr = d.getFullYear();
const monat = d.getMonth();
const date = d.getDate();
const tag = d.getDay();
const stunde = d.getHours();
const minute = d.getMinutes();
const sekunde = d.getSeconds();
const milli = d.getMilliseconds();

console.log(tag);
console.log(wochenTage[tag]);
console.log(monate[monat]);
console.log(stunde);
console.log(minute);
console.log(sekunde);

if (stunde < 10) {
  stundeAnzeige.innerHTML = `0${stunde}`;
} else {
  stundeAnzeige.innerHTML = stunde;
}

if (minute < 10) {
  minuteAnzeige.innerHTML = `0${minute}`;
} else {
  minuteAnzeige.innerHTML = minute;
}

if (sekunde < 10) {
  sekundeAnzeige.innerHTML = `0${sekunde}`;
} else {
  sekundeAnzeige.innerHTML = sekunde;
}

jahrAnzeige.innerHTML = jahr;
monatAnzeige.innerHTML = monat;
tagAnzeige.innerHTML = date;
minuteAnzeige.innerHTML = minute;
milliAnzeige.innerHTML = milli;
wochenTagAnzeige.innerHTML = wochenTage[tag];
monatsNameAnzeige.innerHTML = monate[monat];

// console.log(jahr);
// console.log(monat);
// console.log(tag);
// console.log(stunde);
// console.log(minute);
// console.log(sekunde);
// console.log(milli);
