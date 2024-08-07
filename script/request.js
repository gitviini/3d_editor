async function send_model(name='',content=''){
    let form = new FormData()

    form.append('mode','insert_model')
    form.append('name',name)
    form.append('content',content)

    fetch('/script.php',{
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

async function get_models(){
    let form = new FormData()

    form.append('mode','get_models')

    return fetch('/script.php',{
        method:'POST',
        body:form,
    })
}