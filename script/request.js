let root = './script.php'

async function get_models(){
    let form = new FormData()

    form.append('mode','get_models')

    return fetch(root,{
        method:'POST',
        body:form,
    })
}


async function send_model(name='',content=''){
    let form = new FormData()

    form.append('mode','insert_model')
    form.append('name',name)
    form.append('content',content)

    fetch(root,{
        method:'POST',
        body:form,
    }).then(e=>{
        e.json().then(
            res=>{
                console.log(res)
                res['res'] == true ? alert(`Modelo ${name} salvo com sucesso`) : alert(`Erro ao salvar modelo ${name}`)
            }
        )
    })
}

async function delete_model(name=''){
    let form = new FormData()

    form.append('mode','delete_model')
    form.append('name',name)

    fetch(root,{
        method:'POST',
        body:form,
    }).then(e=>{
        console.log(e)
        e.json().then(
            res=>{
                console.log(res)
                res['res'] == true ? alert(`Modelo ${name} deletado com sucesso`) : alert(`Erro ao salvar modelo ${name}`)
            }
        )
    })
}