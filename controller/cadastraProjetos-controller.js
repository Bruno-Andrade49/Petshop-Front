import { ProjetoServices } from "../services/index.js"

const formulario = document.querySelector(`[data-form]`)

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.querySelector(`[data-nome]`).value
    const dt_criacao = evento.target.querySelector(`[data-dt_criacao]`).value
    const dt_de_inicio = evento.target.querySelector(`[data-dt_de_inicio]`).value
    const dt_fim = evento.target.querySelector(`[data-dt_fim]`).value



    ProjetoServices.criarProjeto(nome, dt_criacao, dt_de_inicio, dt_fim)
    .then(() => {
        window.location.href="http://127.0.0.1:5500/admin/telas/cadastro_concluido.html"
    })
})