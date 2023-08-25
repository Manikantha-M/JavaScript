/* fetch() 
The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

fetch() does not automatically convert the body to JSON, and should call the .json(), .text(), etc method on the response.
*/

const url = './utils/people.json';
fetch(url).then((value)=>{
    console.log(value);
    return value.json();
},(reason)=>{
    console.log(reason)
}).then(response => console.log(response))

const url2 = './utils/sample.txt';
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    fetch(url2)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Fetch error:', error);
        });
});
