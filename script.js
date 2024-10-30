
function trocaCor() {
    const body = document.body;
    const button = document.getElementById("toggleButton");

    // Alterna a classe do modo escuro no body
    body.classList.toggle("modo-escuro");

    // Altera o texto do botão de acordo com o modo
    if (body.classList.contains("modo-escuro")) {
        button.textContent = "Modo Claro";
    } else {
        button.textContent = "Modo Escuro";
    }
}