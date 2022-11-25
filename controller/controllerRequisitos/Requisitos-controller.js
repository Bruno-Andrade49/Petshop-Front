import { ProjetoServices } from "../../services/index.js";
import { RequisitoServices } from "../../services/indexRequisito.js";


const criarNovaLinha = (id, nome, projetoId, projetoNome) => {

    const linhaNovoRequisito = document.createElement('tr')

    const conteudo = `

    <td class="td" data-td>${nome}</td>
        <td>${projetoId}</td>
        <td>${projetoNome}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="http://127.0.0.1:5500/admin/telas/edita_projeto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
`
    linhaNovoRequisito.innerHTML = conteudo;
    linhaNovoRequisito.dataset.id = id;
    return linhaNovoRequisito;
}

const tabela = document.querySelector('[data-tabela]')
const selectBox = document.getElementsByClassName("data-select-box-modulos")

/*tabela.addEventListener('click', (evento) => {
    let btnDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if (btnDeletar) {

        const linhaProjeto = evento.target.closest('[data-id]')
        const id = linhaProjeto.dataset.id


        ProjetoServices.removeProjeto(id)
        window.location.href = "http://127.0.0.1:5500/admin/index.html"

    }
})
*/
const novoSeletor = document.createElement("div")

const criarNovoSeletor = (nome, id) => {

    const conteudoSeletor = `
        <input id="inputProjeto" type="radio" id="${id}" name="opcaoProjeto" value="${id}" required data-projeto-id">
        <label> Deseja inserir em ${nome}</label><br>
    `

    novoSeletor.innerHTML += conteudoSeletor;
    return novoSeletor;
}


ProjetoServices.listaProjeto()
    .then(data => {
        data.forEach(elemento => {
            selectBox[0].appendChild(criarNovoSeletor(elemento.nome, elemento.id));
        })
    })

RequisitoServices.listaRequisito()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criarNovaLinha(elemento.id,
                elemento.nome,
                elemento.projetoId,
                elemento.projetoNome,
            ))
        }
        )
    })