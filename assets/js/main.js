/* eslint-disable no-console */
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

const clockContainer = document.querySelector('.clock');
const uhrKasten = document.querySelector('.uhr-anzeige');
const clockKasten = document.querySelector('.clock-display');
const datumKasten = document.querySelector('.datum-anzeige');

const counter = document.getElementById('counter');
const anzeige = [clockContainer, uhrKasten, clockKasten, datumKasten];
// Zufallszahl von 0 bis 255
const generateRandom = () => Math.floor(Math.random() * 255);
// drei zufallsZahlen von 255 in Array [R,G,B]
const randomZahl = function () {
  const containerRGB = [generateRandom(), generateRandom(), generateRandom()];
  return containerRGB.join();
};

// counter
let count = 0;
function counting() {
  count += 1;
  console.log(count);
  counter.innerText = count;
  if (count % 3 === 0) {
    anzeige.map((x) => x.classList.toggle('selected1'));
    anzeige.map((x) => (x.style.fontSize = '3rem'));
  } else {
    anzeige.map((x) => (x.style.fontSize = '2rem'));
  }
}

function handler(ev) {
  const e = ev || window.Event;
  const target = e.target || e.srcElement;
  this.classList.toggle('selected');
  console.log(`geklickt auf Knoten mit TARGET ID ${target.id}`);
  console.log(`geklickt auf Knoten mi ID ${this.id}`);
  console.log(target.classList);
  console.log(this);
  target.style.backgroundColor = `rgb(${randomZahl()})`;
  target.classList.toggle('selected1');
  counting();
  // target.style.transform = 'rotate(-180deg)';
}

function init() {
  const elements = document.querySelectorAll('.level1');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', handler, false);
  }
}

const schwarzKasten = function () {
  const anzeige1 = [clockContainer, uhrKasten, clockKasten, datumKasten];
  anzeige1.map((x) => (x.style.backgroundColor = `red`));
  anzeige1.map((x) => x.classList.toggle('selected1'));
  // const test2 = document.querySelectorAll('.level3', '.level4', '.level2', '.level1', 'level0');
  // test2.forEach((element) => {
  //   element.style.backgroundColor = 'red';
  //   element.style.color = 'white';
  // });
  // test2.map((x) => x.classList.toggle('selected1'));
};

const isTeiler = (num) => num % 13 === 0;
const start = function () {
  const x = `rgb(${randomZahl()})`;
  const y = `rgb(${randomZahl()})`;
  const z = `rgb(${randomZahl()})`;
  const anzeigeX = [jahrAnzeige, wochenTagAnzeige];
  const anzeigeY = [
    datumAnzeige,
    uhrKasten,
    datumKasten,
    sekundeAnzeige,
    minuteAnzeige,
    stundeAnzeige,
    tagAnzeige,
    monatsNameAnzeige,
  ];
  const anzeigeZ = [
    tagAnzeige,
    stundeAnzeige,
    minuteAnzeige,
    sekundeAnzeige,
    milliAnzeige,
    monatsNameAnzeige,
    clockKasten,
  ];

  anzeigeX.map((el) => (el.style.backgroundColor = x));
  anzeigeY.map((el) => (el.style.backgroundColor = y));
  anzeigeZ.map((el) => (el.style.backgroundColor = z));

  clockContainer.style.backgroundColor = `rgb(${randomZahl()})`;
  document.querySelector('#zeit').style.color = `rgb(${randomZahl()})`;
  datumAnzeige.style.color = '#fff';
  jahrAnzeige.style.color = z;
  wochenTagAnzeige.style.color = z;
  counter.style.color = z;
};

function clock() {
  const d = new Date();

  const jahr = d.getFullYear();
  const monat = d.getMonth();
  const date = d.getDate();
  const tag = d.getDay();
  const stunde = d.getHours();
  const minute = d.getMinutes();
  const sekunde = d.getSeconds();
  const milli = d.getMilliseconds();

  const kleinerZehn = (num) => (num < 10 ? `0${num}` : num);
  const kleinerHundert = (num) => {
    let x;
    if (num < 10) {
      x = `00${num}`;
    } else if (num < 100) {
      x = `0${num}`;
    } else {
      x = num;
    }
    return x;
  };

  jahrAnzeige.innerHTML = jahr;
  datumAnzeige.innerHTML = `${date}.${monat + 1}.${jahr}`;
  tagAnzeige.innerHTML = date;
  stundeAnzeige.innerHTML = `${kleinerZehn(stunde)}:`;
  minuteAnzeige.innerHTML = `${kleinerZehn(minute)}:`;
  sekundeAnzeige.innerHTML = kleinerZehn(sekunde);
  milliAnzeige.innerHTML = kleinerHundert(milli);
  wochenTagAnzeige.innerHTML = wochenTage[tag];
  monatsNameAnzeige.innerHTML = monate[monat];

  const testColor = function () {
    if (sekunde % 10 === 0) {
      start();
    } else if (isTeiler(sekunde)) {
      schwarzKasten();
    } else {
      sekundeAnzeige.style.fontSize = '10rem';
      document.querySelector('.clock-display').style.filter = 'brightness(150%)';
    }
  };

  testColor();
}

// testColor2();
const inter = setInterval(clock, 400);
console.log(inter);
// clock();

document.addEventListener('DOMContentLoaded', init);
