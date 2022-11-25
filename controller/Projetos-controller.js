import { ProjetoServices } from "../services/index.js";

const criarNovaLinha = (nome, data_criacao, data_de_inicio, data_fim, modulos, requisitos, id) => {

    const linhaNovoProjeto = document.createElement('tr')

    const conteudo = `

    <td class="td" data-td>${nome}</td>
        <td>${data_criacao}</td>
        <td>${data_de_inicio}</td>
        <td>${data_fim}</td>
        <td>${modulos}</td>
        <td>${requisitos}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="http://127.0.0.1:5500/admin/telas/edita_projeto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
`
    linhaNovoProjeto.innerHTML = conteudo;
    linhaNovoProjeto.dataset.id = id;
    return linhaNovoProjeto;
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
    let btnDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if (btnDeletar) {

        const linhaProjeto = evento.target.closest('[data-id]')
        const id = linhaProjeto.dataset.id


        ProjetoServices.removeProjeto(id)
        window.location.href = "http://127.0.0.1:5500/admin/index.html"

    }
})

ProjetoServices.listaProjeto()
    .then(data => {

        data.forEach(elemento => {

            var modulos = ``;

            var requisitos = ``;
            
            for (let index = 0; index < elemento.moduloes.length; index++) {
                modulos += `${elemento.moduloes[index]["nome"]} </br>`
            }
            
            for (let index = 0; index < elemento.requisitoes.length; index++) {
                requisitos += `${elemento.requisitoes[index]["nome"]} </br>`
             }


            tabela.appendChild(criarNovaLinha(elemento.nome, 
                elemento.dataDeCriacao, 
                elemento.dataDeInicio, 
                elemento.dataFim, 
                modulos,
                requisitos,
                elemento.id))
        }
        )
    })