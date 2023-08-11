let body = document.querySelector('body')
let oldH1 = document.querySelector('h1')
let body1 = oldH1.parentNode;
let  newH1 = document.createElement('h1')
let text = document.createTextNode('I am Sasuke')
newH1.appendChild(text)
body1.replaceChild(newH1,oldH1)
console.log(body1)

let firstChild = document.querySelector("ul>li:first-child")
console.log(firstChild)
let atr = firstChild.childNodes[0];
atr.id = 'bibi'
atr.className ='baby'
console.log(atr)
