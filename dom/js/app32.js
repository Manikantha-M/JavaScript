// window DOMContentLoaded Event
/*
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets,images and subframes to finish loading.
This event is useful when the script tag of html is under the head tag.
*/

window.addEventListener('DOMContentLoaded', function(){
    const heading = document.querySelector('h1');
    console.log(heading);
    heading.style.color = 'red';
})