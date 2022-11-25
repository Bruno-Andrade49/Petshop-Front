
const listaModulos = () => {
    return fetch("http://localhost:8080/modulo")
    .then(response => response.json())
}

const criarModulo = (id, nome, idProjeto) => {
    return fetch("http://localhost:8080/modulo", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            projetoId: idProjeto
        })
        }).then( response => {
            return response.json().then((data) => {console.log("Sucess: ", data)})
    })
}

/*const removeProjeto = (id) => {
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
*/

export const ModuloServices = {
    listaModulos,
    criarModulo
}



