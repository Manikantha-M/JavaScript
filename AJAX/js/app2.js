/* fetch() 
The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

fetch() does not automatically converts the body to JSON, and should call the .json() method on the response.
*/

const url = './utils/people.json';
fetch(url).then((value)=>{
    console.log(value);
    return value.json();
},(reason)=>{
    console.log(reason)
}).then(response => console.log(response))
