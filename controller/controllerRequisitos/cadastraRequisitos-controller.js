import { RequisitoServices } from "../../services/indexRequisito.js"

const formulario = document.querySelector(`[data-form]`)

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.querySelector(`[data-nome-modulo]`).value
    const projetoId = evento.target.querySelector('input[name=opcaoProjeto]:checked').value


    RequisitoServices.criarRequisito(nome, projetoId)
    .then(() => {
        window.location.href="http://127.0.0.1:5500/admin/telas/cadastro_concluido.html"
    })
})