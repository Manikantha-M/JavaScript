/* innerWidth, innerHeight, getBoundingClientRect()

innerWidth - The interior width of the window in pixels
innerHeight - The interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
 */


console.log('height: ' + window.innerHeight)
console.log('width: ' + window.innerWidth)


const btn = document.querySelector('.btn');
const box = document.querySelector('.box')

btn.addEventListener('click', function(){
    const obj = box.getBoundingClientRect();
    console.log(obj)
})