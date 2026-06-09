
 //Validação do Formulário
 
function enviar() {
    const nome     = document.getElementById("nome").value;
    const email    = document.getElementById("email").value;
    const assunto  = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome == "") {
        alert("Por favor, informe seu nome.");
        return;
    }

    if (email == "") {
        alert("Por favor, informe seu e-mail.");
        return;
    }

    if (email.indexOf("@") == -1) {
        alert("E-mail invalido. Use o formato: nome@email.com");
        return;
    }

    if (assunto == "") {
        alert("Por favor, informe o assunto.");
        return;
    }

    if (mensagem == "") {
        alert("Por favor, escreva sua mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    document.getElementById("contactForm").reset();
}

const formulario = document.getElementById("contactForm");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        enviar();
    });
}
