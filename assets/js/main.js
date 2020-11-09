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

// Zufallszahl von 0 bis 255
const generateRandom = () => Math.floor(Math.random() * 255);
// drei zufallsZahlen von 255 in Array [R,G,B]
const randomZahl = function () {
  const containerRGB = [generateRandom(), generateRandom(), generateRandom()];
  return containerRGB.join();
};

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
  // target.style.transform = 'rotate(-180deg)';
}

function init() {
  const elements = document.querySelectorAll('.level1');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', handler, false);
  }
}

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
  const kleinerHundert = (num) => (num < 100 ? `0${num}` : num);

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
    if (sekunde % 5 === 0) {
      const x = `rgb(${randomZahl()})`;
      const y = `rgb(${randomZahl()})`;
      const z = `rgb(${randomZahl()})`;
      jahrAnzeige.style.backgroundColor = x;
      datumAnzeige.style.backgroundColor = y;
      tagAnzeige.style.backgroundColor = z;
      stundeAnzeige.style.backgroundColor = z;
      minuteAnzeige.style.backgroundColor = z;
      sekundeAnzeige.style.backgroundColor = z;
      milliAnzeige.style.backgroundColor = z;
      wochenTagAnzeige.style.backgroundColor = x;
      monatsNameAnzeige.style.backgroundColor = z;
      clockContainer.style.backgroundColor = `rgb(${randomZahl()})`;
      uhrKasten.style.backgroundColor = y;
      clockKasten.style.backgroundColor = z;
      datumKasten.style.backgroundColor = y;
      document.querySelector('#zeit').style.color = `rgb(${randomZahl()})`;

      sekundeAnzeige.style.color = y;
      minuteAnzeige.style.color = y;
      stundeAnzeige.style.color = y;
      tagAnzeige.style.color = y;
      monatsNameAnzeige.style.color = y;
      datumAnzeige.style.color = '#fff';

      jahrAnzeige.style.color = z;
      wochenTagAnzeige.style.color = z;
      // document.querySelector('.datum-anzeige').style.display = 'block';
    } else {
      // document.querySelector('.datum-anzeige').style.display = 'flex';
      sekundeAnzeige.style.fontSize = '10rem';

      document.querySelector('.clock-display').style.filter = 'brightness(150%)';
    }
  };

  testColor();

  // const testColor2 = function () {
  //   const anzeige = [
  //     jahrAnzeige,
  //     monatsNameAnzeige,
  //     tagAnzeige,
  //     minuteAnzeige.sekundeAnzeige,
  //     milliAnzeige,
  //     wochenTagAnzeige,
  //     datumAnzeige,
  //     clockContainer,
  //     uhrKasten,
  //     clockKasten,
  //     datumKasten,
  //   ];

  //   if (sekunde % 5 === 0) {
  //     anzeige.map((x) => (x.style.backgroundColor = `rgb(${randomZahl()})`));
  //   }
  // };

  // testColor2();
}

const inter = setInterval(clock, 400);
console.log(inter);
// clock();

document.addEventListener('DOMContentLoaded', init);
