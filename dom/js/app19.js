// addEventListener() continued

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColor() {
  const hasClass = heading.classList.contains('red');
  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}

btn.addEventListener('click', changeColor);
