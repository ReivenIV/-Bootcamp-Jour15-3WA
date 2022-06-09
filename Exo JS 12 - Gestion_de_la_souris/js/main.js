let maDiv = document.querySelector(".yellow");
let button = document.querySelector('#btn');

/* Traitment de Div */
maDiv.addEventListener("mouseleave", ()=> {
    maDiv.classList.remove("yellow", "green")
});

maDiv.classList.remove("green", "yellow");
maDiv.addEventListener("mouseover", ()=> {
    maDiv.classList.add("yellow")
});

maDiv.addEventListener("dblclick", ()=> {
    maDiv.classList.add("green")
});

/* traitement de buton */
button.addEventListener("click", ()=> {
    maDiv.classList.toggle("blue")
})

