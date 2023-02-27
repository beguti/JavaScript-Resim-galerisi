// Add your code here
const url = 'https://source.unsplash.com/random/';

var randomImage = new Array();
for (let i = 0; i < 15; i++) {
  randomImage[i] = url + randomSize();
}

var resimler = document.getElementsByClassName('rsm');

for (let a = 0; a < 15; a++) {
  resimler[a].innerHTML =
    resimler[a].innerHTML + '<img src=' + randomImage[a] + ' />';
  console.log(resimler[a]);
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function randomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}
