
//Painel "Explorar Sistema"


const btnExplorar    = document.getElementById("btnExplorar");
const painelExplorar = document.getElementById("painelExplorar");
const painelOverlay  = document.getElementById("painelOverlay");

function abrirPainel() {
    painelExplorar.classList.remove("painel-escondido");

    const contadorPainel = document.getElementById("contadorPainel");

    if (contadorPainel) {
        const agora  = new Date();
        contadorPainel.textContent = agora.getHours() + agora.getMinutes();
    }
}

function fecharPainel() {
    painelExplorar.classList.add("painel-escondido");
}

if (btnExplorar) {
    btnExplorar.addEventListener("click", abrirPainel);
}

if (painelOverlay) {
    painelOverlay.addEventListener("click", fecharPainel);
}
