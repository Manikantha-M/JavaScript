// Event propagation example

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const newElem = document.createElement('h1');
  newElem.classList.add('heading');
  newElem.textContent = `I'm a heading`;
  container.appendChild(newElem);
});

container.addEventListener('click', function (ceo) {
  if (ceo.target.classList.contains('heading')) {
    console.log('hi');
  }
});
