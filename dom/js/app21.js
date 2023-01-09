// key events
/* keydown -- when a key is down
keypress -- when a key is pressed
keyup -- when a key is up
*/

const nameInput = document.getElementById('name');

nameInput.addEventListener('keydown', function () {
  console.log('down');
});
nameInput.addEventListener('keyup', function () {
  console.log('up');
});
nameInput.addEventListener('keypress', function () {
  console.log('keypress');
});
