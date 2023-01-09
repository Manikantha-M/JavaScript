// Browser Object Model(BOM), Document Object Model(DOM)
// Browser Object Model(BOM)
/* The Browser Object Model (BOM) includes the properties and methods for JavaScript to interact with the web browser. 
The BOM has a root object called window object with several child objects. 
The child objects are -- screen, location, history, navigator, document, etc. 
All undeclared variables, objects and functions will be members of the window object. 
If declared using var, all global JavaScript variables, objects and functions will become members of the window object. All global JavaScript variables, objects and functions which are declared using let or const will not become members of the window object. */
/* window object :
Each window will have its own window object.
A window can be a new window, a new tab, a frame set or individual frame created with JavaScript. 
But some of the window object properties like innerHeight, innerWidth and methods like resizeTo() will affect the whole browser window. 
screen object :
It provides information about the dimensions of the display screen such as its height, width, etc. 
location object : 
Both the window object and the document object have this property. 
The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page. 
history object :
The history object is used to access the session history for that window object. 
navigator object : 
navigator object is used to fetch information related to the browser, like the browser name, browser version, operating system information, etc. 
document object : 
When an HTML document is loaded into a browser window, then it becomes the document object, So the document object represents your web page. */

// Document Object Model(DOM)
/* When a web page is loaded, the browser creates a Document Object Model of the webpage. 
We can manipulate the DOM using JavaScript. 
JavaScript can add/change/remove HTML elements
JavaScript can add/change/remove HTML attributes
JavaScript can add/change/remove CSS styles
JavaScript can react to HTML events
JavaScript can add/change/remove HTML events */

/* The DOM is a W3C (World Wide Web Consortium) standard. 
There are no official standards for the BOM. */

console.log(window);
console.dir(document);

// without declaration

val1 = 'mani';
{
  val2 = 'hi';
}
obj1 = {
  nam1: 'bob',
  age1: 23,
};
function fun1() {
  console.log('hello');
  return `I'm fun1`;
}

// with declaration

var val3 = 'one';
{
  var val4 = 'two';
}
var obj2 = {
  nam2: 'susy',
  age2: 20,
};
var fun2 = function () {
  console.log('hello');
  return `I'm fun2`;
};
