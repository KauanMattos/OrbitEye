//  Perguntas e Respostas

let aberto = -1;

const itensFaq = document.querySelectorAll(".faq-item");

function toggleFaq(indice) {
    if (aberto != -1) {
        itensFaq[aberto].classList.remove("faq-active");
    }

    if (aberto == indice) {
        aberto = -1;
    } else {
        itensFaq[indice].classList.add("faq-active");
        aberto = indice;
    }
}

// OBS: os botoes no HTML usam onclick="toggleFaq(0)", toggleFaq(1), etc.
