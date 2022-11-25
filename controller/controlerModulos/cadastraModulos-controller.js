import { ModuloServices } from "../../services/indexModulo.js"

const formulario = document.querySelector(`[data-form]`)

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const id = evento.target.querySelector(`[data-id]`).value
    const nome = evento.target.querySelector(`[data-nome-modulo]`).value
    const projetoId = evento.target.querySelector('input[name=opcaoProjeto]:checked').value


     ModuloServices.criarModulo(id, nome, projetoId)
    .then(() => {
        window.location.href="http://127.0.0.1:5500/admin/telas/cadastro_concluido.html"
    })
})