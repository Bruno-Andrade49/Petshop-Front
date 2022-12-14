
const listaProjeto = () => {
    return fetch("http://localhost:8080/projeto")
    .then(response => response.json())
}

const criarProjeto = (nome, dt_criacao, dt_de_inicio, dt_fim) => {
    return fetch("http://localhost:8080/projeto", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            dataDeCriacao: dt_criacao,
            dataDeInicio: dt_de_inicio,
            dataFim: dt_fim
        })
        }).then( response => {
            return response.json().then((data) => {console.log("Sucess: ", data)})
    })
}

const removeProjeto = (id) => {
    return fetch(`http://localhost:8080/projeto/${id}`, {
        method: "DELETE",
    })
}

const detalhaProjeto = (id) => {
    return fetch(`http://localhost:8080/projeto/${id}`)
    .then((response) => {
        return response.json()
    })
}


const atualizaProjeto = (id, nome, dataCriacao, dataDeInicio, dataFim) => {
    return fetch(`http://localhost:8080/projeto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            dataDeCriacao: dataCriacao,
            dataDeInicio: dataDeInicio,
            dataFim: dataFim,
        })
    })
    .then(response => {
        return response.json()
    })
    
}

export const ProjetoServices = {
    listaProjeto,
    criarProjeto,
    removeProjeto,
    detalhaProjeto,
    atualizaProjeto
}



