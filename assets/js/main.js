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

const wochenTage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

const jahrAnzeige = document.getElementById('jahr');
const datumAnzeige = document.getElementById('datum');
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

// console testing
console.groupCollapsed('uhr');
console.log(stunde);
console.log(minute);
console.log(sekunde);
console.groupEnd('uhr end');

console.groupCollapsed('datum');
console.log(wochenTage[tag]);
console.log(date);
console.log(monate[monat]);
console.log(`${date}.${monat + 1}.${jahr}`);
console.groupEnd('datum end');

const x = monate.map((ele, index) => [ele, index + 1]);
const y = wochenTage.map((ele, index) => [ele, index]);
const z = wochenTage.map((abk) => abk.slice(0, 2).toUpperCase());
const w = wochenTage.map((ele) => ele);

console.log(z);
console.log('%c%s', 'color: white; font-size: 1.1em; font-weight: bold; background: red; padding: 10px', `📅 ${w}`);

const animals = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'];

console.log(
  '%c%s%c%s',
  'color: white; font-size: 1.1em; font-weight: bold; background: red; padding: 10px',
  `${animals[monat]} ${monate[monat].toUpperCase()}`,
  'color: gray; font-size: 3em; padding-left: 15px',
  `${animals[tag]} ${wochenTage[tag]}`
);
console.warn(x);
console.error(y);
console.log('%cSomething to style', 'color: white; padding: 10px; background: dodgerblue');
console.trace(monate);

const kleinerZehn = (test) => {
  let m;
  if (test < 10) {
    m = `0${test}`;
  } else {
    m = test;
  }
  return m;
};

console.log(kleinerZehn(stunde));
console.log(kleinerZehn(minute));
console.log(kleinerZehn(sekunde));

jahrAnzeige.innerHTML = jahr;
datumAnzeige.innerHTML = `${date}.${monat + 1}.${jahr}`;
tagAnzeige.innerHTML = date;
stundeAnzeige.innerHTML = `${kleinerZehn(stunde)}:`;
minuteAnzeige.innerHTML = `${kleinerZehn(minute)}:`;
sekundeAnzeige.innerHTML = kleinerZehn(sekunde);
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
