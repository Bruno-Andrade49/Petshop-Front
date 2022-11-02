import { clienteServices } from "../services/index.js";

const criarNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr')

    const conteudo = `

    <td class="td" data-td>${nome}</td>
        <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="/projeto_inicial/admin/telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
`
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
   let btnDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
   if(btnDeletar) {

        const linhaCliente =  evento.target.closest('[data-id]')
        const id = linhaCliente.dataset.id


        clienteServices.removeCliente(id)
        window.location.href="/projeto_inicial/admin/index.html"

   }
})

clienteServices.listaCliente()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email, elemento.id))
   }
)
})