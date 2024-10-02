// inicia aq o JS do sub menu em atuação//
    // Função para abrir e fechar o dropdown
    document.addEventListener('DOMContentLoaded', function () {
        const dropbtn = document.querySelector('.dropbtn');
        const dropdownContent = document.querySelector('.dropdown-content');

        // Alterna a visibilidade do submenu ao clicar
        dropbtn.addEventListener('click', function (event) {
            event.preventDefault(); // Evita comportamento de link
            dropdownContent.classList.toggle('show'); // Alterna a classe 'show'
        });

        // Fecha o submenu ao clicar fora dele
        window.addEventListener('click', function (event) {
            if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show'); // Remove a classe 'show' para esconder
            }
        });
    });
// fim JS do sub menu em atuação//
