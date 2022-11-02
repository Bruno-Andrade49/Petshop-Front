const listaCliente = () => {
    return fetch("http://localhost:8080/pessoas")
    .then(response => response.json())
}

const criarCliente = (nome, email) => {
    return fetch("http://localhost:8080/pessoas", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        }).then( response => {
            return response.json().then((data) => {console.log("Sucess: ", data)})
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:8080/pessoas/${id}`, {
        method: "DELETE",
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:8080/pessoas/${id}`)
    .then((response) => {
        return response.json()
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:8080/pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(response => {
        return response.json()
    })
    
}

export const clienteServices = {
    listaCliente,
    criarCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}


