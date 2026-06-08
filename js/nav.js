// Menu Hambúrguer


const botaoMenu  = document.getElementById("hamburger");
const listaLinks = document.querySelector(".nav-links");

function toggleMenu() {
    if (botaoMenu.classList.contains("active")) {
        botaoMenu.classList.remove("active");
        listaLinks.classList.remove("nav-open");
    } else {
        botaoMenu.classList.add("active");
        listaLinks.classList.add("nav-open");
    }
}

function fecharMenu() {
    botaoMenu.classList.remove("active");
    listaLinks.classList.remove("nav-open");
}

if (botaoMenu) {
    botaoMenu.addEventListener("click", toggleMenu);
}
