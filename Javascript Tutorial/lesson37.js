// let list = document.querySelector("ul li:nth-child(2) > a")
// list.style.color = "red"
let list = document.querySelectorAll("ul li a")
let listArray = Array.from(list)
listArray.map((n)=>{
    return n.style.color = "red"
})



