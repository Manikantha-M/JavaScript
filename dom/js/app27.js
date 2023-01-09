// Forms - submit event
/* Here preventDefault() is used to prevent the default behavior of submit event -- prevent it from submitting the form and refreshing the webpage. */
/* Only after applying preventDefault() on submit event listener, we will be able to access the values submitted through the form, using value property on the inputs. */

const form = document.getElementById('form');
const nam = document.getElementById('name');
const pwd = document.getElementById('password');

form.addEventListener('submit', function (ceo) {
  ceo.preventDefault();
  console.log(nam.value);
  console.log(pwd.value);
});
