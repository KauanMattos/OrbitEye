
//Painel "Explorar Sistema"


const btnExplorar    = document.getElementById("btnExplorar");
const painelExplorar = document.getElementById("painelExplorar");
const painelOverlay  = document.getElementById("painelOverlay");

function abrirPainel() {
    painelExplorar.classList.remove("painel-escondido");
    iniciarRelogioPainel();
}

function fecharPainel() {
    painelExplorar.classList.add("painel-escondido");
}

function iniciarRelogioPainel() {
    const relogioPainel  = document.getElementById("relogioPainel");
    const contadorPainel = document.getElementById("contadorPainel");

    function atualizarPainel() {
        const agora   = new Date();
        const hora    = String(agora.getHours()).padStart(2, "0");
        const minuto  = String(agora.getMinutes()).padStart(2, "0");
        const segundo = String(agora.getSeconds()).padStart(2, "0");

        if (relogioPainel) {
            relogioPainel.textContent = `${hora}:${minuto}:${segundo}`;
        }

        if (contadorPainel) {
            const alerta = agora.getHours() + agora.getMinutes();
            contadorPainel.textContent = alerta;
        }
    }

    atualizarPainel();
    setInterval(atualizarPainel, 1000);
}

if (btnExplorar) {
    btnExplorar.addEventListener("click", abrirPainel);
}

if (painelOverlay) {
    painelOverlay.addEventListener("click", fecharPainel);
}
