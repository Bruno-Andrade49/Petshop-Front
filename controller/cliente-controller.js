import {clienteServices} from "../services/index.js";

const pegaUrl = new URL(window.location)

const id = pegaUrl.searchParams.get("id");

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteServices.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email

})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    clienteServices.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
        console.log("Editado!")
    })
})

