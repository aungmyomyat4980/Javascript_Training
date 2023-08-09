let hello = document.createElement("b")
hello.textContent = "Hello DOM."
hello.classList.add("alert", "info")
document.querySelector("div").appendChild(hello)