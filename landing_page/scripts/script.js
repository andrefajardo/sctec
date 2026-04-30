let button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.addEventListener("click", function() {
    menu.classList.toggle("ativa")
})

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
    this.reset();
});