// Web Storage API - localStorage, sessionStorage
/* Web storage objects localStorage and sessionStorage allow to save key - value pairs in the browser. 
The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, even OS rebooted, and will be available the next day, week, or year. 
The sessionStorage object stores data for only one session, the data is deleted when the browser tab is closed.

Both localStorage and sesssionStorage can only store strings.

Both storage objects provide same methods and properties:
setItem(key, value) – store key/value pair.
getItem(key) – get the value by key.
removeItem(key) – remove the key with its value.
clear() – delete entire data.
key(index) – get the key on a given position.
length – the number of stored items.*/
/* On either of the storage objects if you apply setItem(), for an existing key with a different value, then new value overrides the old value. */

localStorage.setItem('name', 'Mani');
localStorage.setItem('job', 'Dev');
localStorage.setItem('address', '533201');

sessionStorage.setItem('name', 'john');
sessionStorage.setItem('job', 'Teacher');
sessionStorage.setItem('address', '1234');

const nam = localStorage.getItem('name');
console.log(nam);
const job = sessionStorage.getItem('job');
console.log(job);

localStorage.removeItem('job');
sessionStorage.removeItem('address');

localStorage.clear();

console.log(sessionStorage.length);
console.log(sessionStorage.key(0));

sessionStorage.setItem('name', 'susy');
