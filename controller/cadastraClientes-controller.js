import { clienteServices } from "../services/index.js"

const formulario = document.querySelector(`[data-form]`)

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.querySelector(`[data-nome]`).value
    const email = evento.target.querySelector(`[data-email]`).value


    clienteServices.criarCliente(nome, email)
    .then(() => {
        window.location.href="/projeto_inicial/admin/telas/cadastro_concluido.html"
    })
})