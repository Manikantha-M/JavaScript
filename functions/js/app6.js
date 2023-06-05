// Template literals

const firstName = "bob";
const lastName = "sanders";
const age = 25;

// Template string
const phrase = `My full name is ${firstName} ${lastName.toUpperCase()} and I'm ${age*2} years old.`
console.log(phrase);

// Template string HTML
const arr = ['surfing','baking','bowling'];
const result = document.getElementById('result');
result.innerHTML = `<h2>${firstName}</h2> <p>${age}</p>
<ul>${(arr.map(e=>{
    return `<li>${e}</li>`
})).join('')}</ul>
`;

// Tagged template literals
const author  = 'Some Author';
const statement = 'Some statement';

const quote = highlight `Here is the ${statement} by ${author} and it could not be more true.`;
function highlight(text, ...args){
    console.log({text,args});
    const awesomeText = text.map((item,index) => {
        return `${item} <strong style="color:blue">${args[index] || ''}</strong>`
    })
    return awesomeText.join('');
}
result.innerHTML = quote