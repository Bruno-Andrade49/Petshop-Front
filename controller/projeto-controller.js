import {ProjetoServices} from "../services/index.js";

const pegaUrl = new URL(window.location)

const id = pegaUrl.searchParams.get("id");

const inputNome = document.querySelector('[data-nome]')
const input_dt_criacao = document.querySelector('[data-dt_criacao]')
const input_dt_inicio = document.querySelector('[data-dt_de_inicio]')
const input_dt_fim = document.querySelector('[data-dt_fim]')

console.log(inputNome, input_dt_criacao, input_dt_inicio, input_dt_fim)

ProjetoServices.detalhaProjeto(id)
.then( dados => {
    inputNome.value = dados.nome
    input_dt_criacao.value = dados.data_criacao
    input_dt_inicio.value = dados.data_de_inicio
    input_dt_fim.value = dados.data_fim

})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    ProjetoServices.atualizaProjeto(id, inputNome.value, 
        input_dt_criacao.value, 
        input_dt_inicio.value, 
        input_dt_fim.value)
    .then(() => {
        console.log("Editado!")
    })
})

