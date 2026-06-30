document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // TEMA CLARO / ESCURO
    // =========================
    const botaoTema = document.getElementById('tema');

    if (botaoTema) {
        botaoTema.addEventListener('click', function () {
            document.body.classList.toggle('dark');
        });
    }

    // =========================
    // MENU SUAVE (ROLAGEM)
    // =========================
    const linksMenu = document.querySelectorAll('header nav a');

    linksMenu.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const id = this.getAttribute('href');
            const section = document.querySelector(id);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================
    // VALIDAÇÃO DE E-MAIL
    // =========================
    function validarEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // =========================
    // FORMULÁRIO DE CONTATO
    // =========================
    const form = document.getElementById('formulario');
    const status = document.getElementById('mensagemStatus');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const mensagem = document.getElementById('mensagem');

            // valida campos vazios
            if (!nome.value || !email.value || !mensagem.value) {
                status.textContent = "Por favor, preencha todos os campos.";
                status.style.color = "red";
                return;
            }

            // valida e-mail
            if (!validarEmail(email.value)) {
                status.textContent = "Digite um e-mail válido.";
                status.style.color = "red";
                return;
            }

            // mensagem de sucesso
            status.textContent = "Mensagem enviada com sucesso, " + nome.value + "!";
            status.style.color = "green";

            // limpa formulário
            form.reset();
        });
    }

});