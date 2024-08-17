//Previne menu de contexto
window.oncontextmenu = (e) => e.preventDefault()

//Configurações
resize.onsubmit = (e) => {
    e.preventDefault()

    if (cube) {

        let x = Number(resize.children[0].value)
        let y = Number(resize.children[1].value)
        let z = Number(resize.children[2].value)
        cube.style.minWidth = `${x}px`
        cube.style.minHeight = `${y}px`
        cube.setAttribute('width', x)
        cube.setAttribute('height', y)
        cube.setAttribute('length', z)

        cube.children[0].style.width = `${x}px`
        cube.children[0].style.transform = `translateZ(${(z / 2)}px)`
        cube.children[3].style.width = `${x}px`
        cube.children[4].style.width = `${x}px`
        cube.children[4].style.transform = `rotateY(180deg) translateZ(${(z / 2)}px)`
        cube.children[5].style.width = `${x}px`


        cube.children[0].style.height = `${y}px`
        cube.children[1].style.height = `${y}px`
        cube.children[1].style.transform = `rotateY(90deg) translateZ(${(x / 2)}px)`
        cube.children[2].style.height = `${y}px`
        cube.children[2].style.transform = `rotateY(-90deg) translateZ(${(x / 2)}px)`
        cube.children[4].style.height = `${y}px`

        cube.children[1].style.width = `${z}px`
        cube.children[2].style.width = `${z}px`
        cube.children[3].style.height = `${z}px`
        cube.children[3].style.transform = `rotateY(180deg) rotateX(90deg) translateZ(${-1 * (y / 2)}px)`
        cube.children[5].style.height = `${z}px`
        cube.children[5].style.transform = `rotateX(90deg) translateZ(${(y / 2)}px)`
    }
}

posicionar.onsubmit = (e) => {
    e.preventDefault()

    if (cube) {

        let x = Number(posicionar.children[0].value)
        let y = Number(posicionar.children[1].value)
        let z = Number(posicionar.children[2].value)

        cube.setAttribute('x', x)
        cube.setAttribute('y', y)
        cube.setAttribute('z', z)

        cube.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateX(${cube.getAttribute('rotateX')}deg) rotateY(${cube.getAttribute('rotateY')}deg) rotateZ(${cube.getAttribute('rotateZ')}deg)`
    }
}

rotacionar.onsubmit = (e) => {
    e.preventDefault()

    if (cube) {

        let x = Number(rotacionar.children[0].value)
        let y = Number(rotacionar.children[1].value)
        let z = Number(rotacionar.children[2].value)

        cube.setAttribute('rotateX', x)
        cube.setAttribute('rotateY', y)
        cube.setAttribute('rotateZ', z)

        cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)\
        translateX(${cube.getAttribute('x')}px) translateY(${cube.getAttribute('y')}px) translateZ(${cube.getAttribute('z')}px)`
    }
}

colorir.onsubmit = (e) => {
    e.preventDefault()

    if (cube) {
        let color = colorir.children[0].value
        cube.setAttribute('color', color)

        for (face of cube.children) {
            face.style.background = color
        }
    }
}

filter.onsubmit = (e) => {
    e.preventDefault()

    if (cube) {
        let filter_content = filter.children[0].value
        cube.setAttribute('filter', filter_content)
        for (face of cube.children) {
            face.style.filter = filter_content
        }
    }
}

//Copiar
content.onsubmit = (e) => {
    e.preventDefault()
}

//Ações
add.onclick = () => {
    let new_cube = document.createElement('div')
    new_cube.setAttribute('class', 'cube')
    new_cube.innerHTML = model_faces
    new_cube.setAttribute('width', 10)
    new_cube.setAttribute('height', 10)
    new_cube.setAttribute('length', 10)
    new_cube.setAttribute('x', 0)
    new_cube.setAttribute('y', 0)
    new_cube.setAttribute('z', 0)
    new_cube.setAttribute('rotateX', 0)
    new_cube.setAttribute('rotateY', 0)
    new_cube.setAttribute('rotateZ', 0)
    new_cube.setAttribute('color', '')
    new_cube.setAttribute('filter', 'drop-shadow(0 0 10px #fff)')
    new_cube.onclick = () => {
        cube = new_cube
        change()
    }
    cube = new_cube
    container_cube.appendChild(new_cube)
    change()
}

del.onclick = () => {
    if (cube) {
        container_cube.removeChild(cube)
        cuber = ''
    }
}

//Importando

change_models.onclick = () => {
    models.innerHTML = ''
    get_models()
        .then(e => {
            e.json().then(content_models => {
                for (let n = 0; n < content_models['models'].length; n++) {
                    let model = content_models['models'][n]
                    let name = model[0]
                    let content = model[1]
                    imports(content, name)
                }
            }
            )
        })
}

model.onsubmit = (e) => {
    e.preventDefault()

    let res = confirm('Deseja importar esse modelo?')

    if (res) {
        let new_model = model.children[0].value

        imports(new_model)
        models.setAttribute('open', '')

        model.children[0].value = ''
    }
}

//Exportando
copy.onclick = () => {
    let name = content.children[0].value
    if (name) {
        if (name.indexOf(' ') == -1) {
            download(container_cube.innerHTML, name, '.txt')
        }
        else {
            alert('Adicione um nome ao modelo para copiar')
        }
    }
}

save.onclick = () => {
    let name = content.children[0].value
    if (name) {
        let content = container_cube.innerHTML
        send_model(name, content)
        change_models.click()
    }
}

del_model.onclick = () => {
    let name = content.children[0].value
    if (name) {
        delete_model(name)
        change_models.click()
    }
}

//carregando novas informações
function change() {
    resize.children[0].value = cube.getAttribute('width')
    resize.children[1].value = cube.getAttribute('height')
    resize.children[2].value = cube.getAttribute('length')
    posicionar.children[0].value = cube.getAttribute('x')
    posicionar.children[1].value = cube.getAttribute('y')
    posicionar.children[2].value = cube.getAttribute('z')
    rotacionar.children[0].value = cube.getAttribute('rotateX')
    rotacionar.children[1].value = cube.getAttribute('rotateY')
    rotacionar.children[2].value = cube.getAttribute('rotateZ')
    colorir.children[0].value = cube.getAttribute('color')
    filter.children[0].value = cube.getAttribute('filter')
}

function download(data, filename, type) {
    const file = new Blob([data], { type: type });

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, filename);
        return
    }

    const a = document.createElement("a");
    const url = URL.createObjectURL(file);

    a.href = url;
    a.download = filename;

    document.body.appendChild(a);

    a.click();

    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

function imports(new_model, name = '') {
    let new_model_click = document.createElement('div')
    new_model_click.setAttribute('class', 'model')
    new_model_click.setAttribute('name', name)
    new_model_click.innerHTML = new_model
    new_model_click.onmousedown = (e) => {
        if (e.button == 0) {

            container_cube.innerHTML = new_model
            for (let n = 0; n < container_cube.children.length; n++) {
                let new_cube = container_cube.children[n]
                /*
                new_cube.setAttribute('width',10)
                new_cube.setAttribute('height',10)
                new_cube.setAttribute('length',10)
                new_cube.setAttribute('x',0)
                new_cube.setAttribute('y',0)
                new_cube.setAttribute('z',0)
                new_cube.setAttribute('color','')
                new_cube.setAttribute('filter','')
                */
                content.children[0].value = name
                new_cube.onclick = () => {
                    cube = new_cube
                    change()
                }
            }
        }
        else if (e.button == 2) {
            models.removeChild(new_model_click)
        }
    }

    models.appendChild(new_model_click)
}