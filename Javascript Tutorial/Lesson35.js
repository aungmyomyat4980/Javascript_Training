// let dd = prompt('what is your name')
// document.querySelector("#demo").innerText = dd;

// let con = confirm('Is your age over 18?')
// let text = con ? "I'm over 18" : "I'm under 18"
// console.log(text)
// // document.querySelector("#demo").innerText = text
// document.querySelector("#demo").innerText = `${window.innerHeight} and ${window.innerWidth}`

let head = document.querySelector('#demo')
head.style.background = "green";
head.style.color = "white;"

document.querySelector('#clickBtn').addEventListener('click',()=>{
    window.location.href = 'extra.html'
})
