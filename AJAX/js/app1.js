/* Asynchronous JavaScript And XML (AJAX)

XMLHttpRequest
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
XMLHttpRequest is used heavily in AJAX programming.
Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
*/

const xhr = new XMLHttpRequest();

xhr.open('GET', './utils/sample.txt');
xhr.onreadystatechange = () => {
    if(xhr.readyState===4 && xhr.status===200){
        const text = document.createElement('p');
        text.textContent = xhr.responseText;
        document.body.appendChild(text);
        console.log({
            status:xhr.status,
            text:xhr.statusText
        })
    }
};
xhr.send();
console.log('Hello world')