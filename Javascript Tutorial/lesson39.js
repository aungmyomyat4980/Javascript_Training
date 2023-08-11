let ul = document.querySelector('.list'); // Assuming you have an element with class "list"
let textNode = document.createTextNode('Four');
let aTag = document.createElement('a');
aTag.setAttribute('href', '#');
aTag.appendChild(textNode);
let liNode = document.createElement('li');
liNode.appendChild(aTag);
ul.appendChild(liNode);
