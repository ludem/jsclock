const jsClock = document.querySelector('.jsclock');

createWatchLayout();

const secHand = document.querySelector('#secHand');
const minHand = document.querySelector('#minHand');
const hourHand = document.querySelector('#hourHand');
const tick = document.querySelector('#tick');

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (360 / 60) * seconds + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  tick.currentTime = 0;
  tick.volume = 0.3;
  tick.play();

  const minutes = now.getMinutes();
  const minutesDegrees = (360 / 60) * minutes + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (360 / 12) * hours + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(getTime, 1000);

function createWatchLayout() {
  for (let i = 0; i < 360; i += 6) {
    jsClock.innerHTML += `<div class='deg' id='deg${i}'></div>`;
    let element = document.querySelector(`#deg${i}`);
    element.style.transform = `rotate(${i}deg) translate(-8.5rem)`;

    if (i % 30 === 0) {
      element.classList.add('min5');
      element.style.transform = `rotate(${i}deg) translate(-8rem)`;
    }
  }
}