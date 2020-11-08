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
      wochenTagAnzeige.style.backgroundColor = y;
      monatsNameAnzeige.style.backgroundColor = z;
      document.querySelector('.clock').style.backgroundColor = x;
      document.querySelector('.uhr-anzeige').style.backgroundColor = y;
      document.querySelector('.clock-display').style.backgroundColor = z;
      document.querySelector('.datum-anzeige').style.backgroundColor = y;
      // document.querySelector('.datum-anzeige').style.display = 'block';
    } else {
      // document.querySelector('.datum-anzeige').style.display = 'flex';
      sekundeAnzeige.style.fontSize = '10rem';
      tagAnzeige.toUpperCase();
    }
  };
  testColor();
}

const inter = setInterval(clock, 400);

// Zufallszahl von 0 bis 255
const generateRandom = () => Math.floor(Math.random() * 255);
// drei zufallsZahlen von 255 in Array [R,G,B]
const randomZahl = function () {
  const containerRGB = [generateRandom(), generateRandom(), generateRandom()];
  return containerRGB.join();
};

console.log(randomZahl());
