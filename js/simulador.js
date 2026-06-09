
//  Simulador de Alertas


const btnSimular = document.getElementById("btnSimular");

function simular() {
    const regiao = document.getElementById("regiao").value;
    const evento = document.getElementById("evento").value;

    if (regiao == "") {
        alert("Selecione uma regiao.");
        return;
    }

    if (evento == "") {
        alert("Selecione um tipo de evento.");
        return;
    }

    const resultado = document.getElementById("resultado");
    const nivel     = document.getElementById("nivel");
    const descricao = document.getElementById("descricao");

    resultado.classList.remove("nivel-atencao");
    resultado.classList.remove("nivel-risco");
    resultado.classList.remove("nivel-critico");
    resultado.classList.remove("escondido");

    if (evento == "seca") {
        nivel.textContent     = "Atencao";
        descricao.textContent = `Indice de seca moderado em ${regiao}. Monitoramento ativo.`;
        resultado.classList.add("nivel-atencao");

    } else if (evento == "desmatamento") {
        nivel.textContent     = "Risco";
        descricao.textContent = `Alteracao florestal detectada em ${regiao}. Equipe de campo acionada.`;
        resultado.classList.add("nivel-risco");

    } else {
        nivel.textContent     = "Critico";
        descricao.textContent = `Evento critico detectado em ${regiao}. Autoridades notificadas.`;
        resultado.classList.add("nivel-critico");
    }
}

if (btnSimular) {
    btnSimular.addEventListener("click", simular);
}
