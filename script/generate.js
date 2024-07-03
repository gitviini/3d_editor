//Previne menu de contexto
window.oncontextmenu = (e) => e.preventDefault()

//Configurações
resize.onsubmit = (e) => {
    e.preventDefault()

    if(cube){

        let x = Number(resize.children[0].value)
        let y = Number(resize.children[1].value)
        let z = Number(resize.children[2].value)
        cube.style.minWidth = `${x}px`
        cube.style.minHeight = `${y}px`
        cube.setAttribute('width',x)
        cube.setAttribute('height',y)
        cube.setAttribute('length',z)

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

    if(cube){

        let x = Number(posicionar.children[0].value)
        let y = Number(posicionar.children[1].value)
        let z = Number(posicionar.children[2].value)

        cube.setAttribute('x',x)
        cube.setAttribute('y',y)
        cube.setAttribute('z',z)
        
        cube.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateX(${cube.getAttribute('rotateX')}deg) rotateY(${cube.getAttribute('rotateY')}deg) rotateZ(${cube.getAttribute('rotateZ')}deg)`
    }
}

rotacionar.onsubmit = (e) => {
    e.preventDefault()

    if(cube){

        let x = Number(rotacionar.children[0].value)
        let y = Number(rotacionar.children[1].value)
        let z = Number(rotacionar.children[2].value)

        cube.setAttribute('rotateX',x)
        cube.setAttribute('rotateY',y)
        cube.setAttribute('rotateZ',z)
        
        cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)\
        translateX(${cube.getAttribute('x')}px) translateY(${cube.getAttribute('y')}px) translateZ(${cube.getAttribute('z')}px)`
    }
}

colorir.onsubmit = (e) =>{
    e.preventDefault()

    if(cube){
        let color = colorir.children[0].value
        cube.setAttribute('color',color)

        for(face of cube.children){
            face.style.background = color
        }
    }
}

filter.onsubmit = (e) =>{
    e.preventDefault()

    if(cube){
        let filter_content = filter.children[0].value
        cube.setAttribute('filter',filter_content)
        for(face of cube.children){
            face.style.filter = filter_content
        }
    }
}

//Copiar
copy.onsubmit = (e) =>{
    e.preventDefault()
    //prompt('Copie o conteúdo',`${container_cube.innerHTML}`)
    '<div class="cube" width="10" height="30" length="10" x="0" y="10" z="0" rotatex="0" rotatey="0" rotatez="0" color="#4caf50" filter="drop-shadow(0 0 10px #fff)" style="transform: translateX(0px) translateY(10px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); min-width: 10px; min-height: 30px;"><div class="face front" style="background: rgb(76, 175, 80); width: 10px; transform: translateZ(5px); height: 30px;"></div><div class="face right" style="background: rgb(76, 175, 80); height: 30px; transform: rotateY(90deg) translateZ(5px); width: 10px;"></div><div class="face left" style="background: rgb(76, 175, 80); height: 30px; transform: rotateY(-90deg) translateZ(5px); width: 10px;"></div><div class="face bottom" style="background: rgb(76, 175, 80); width: 10px; height: 10px; transform: rotateY(180deg) rotateX(90deg) translateZ(-15px);"></div><div class="face back" style="background: rgb(76, 175, 80); width: 10px; transform: rotateY(180deg) translateZ(5px); height: 30px;"></div...0 10px #fff)" style="transform: translateX(0px) translateY(-7.5px) translateZ(2.5px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); min-width: 10px; min-height: 5px;"><div class="face front" style="width: 10px; transform: translateZ(2.5px); height: 5px; background: rgb(76, 175, 80);"></div><div class="face right" style="height: 5px; transform: rotateY(90deg) translateZ(5px); width: 5px; background: rgb(76, 175, 80);"></div><div class="face left" style="height: 5px; transform: rotateY(-90deg) translateZ(5px); width: 5px; background: rgb(76, 175, 80);"></div><div class="face bottom" style="width: 10px; height: 5px; transform: rotateY(180deg) rotateX(90deg) translateZ(-2.5px); background: rgb(76, 175, 80);"></div><div class="face back" style="width: 10px; transform: rotateY(180deg) translateZ(2.5px); height: 5px; background: rgb(76, 175, 80);"></div><div class="face top" style="width: 10px; height: 5px; transform: rotateX(90deg) translateZ(2.5px); background: rgb(76, 175, 80);"></div></div>'

    let name = copy.children[0].value

    if(name.indexOf(' ') == -1){
        download(container_cube.innerHTML,name,'.txt')
    }
    else{
        alert('Adicione um nome ao modelo para copiar')
    }
}

//Ações
add.onclick = () =>{
    let new_cube = document.createElement('div')
    new_cube.setAttribute('class','cube')
    new_cube.innerHTML = model_faces
    new_cube.setAttribute('width',10)
    new_cube.setAttribute('height',10)
    new_cube.setAttribute('length',10)
    new_cube.setAttribute('x',0)
    new_cube.setAttribute('y',0)
    new_cube.setAttribute('z',0)
    new_cube.setAttribute('rotateX',0)
    new_cube.setAttribute('rotateY',0)
    new_cube.setAttribute('rotateZ',0)
    new_cube.setAttribute('color','')
    new_cube.setAttribute('filter','drop-shadow(0 0 10px #fff)')
    new_cube.onclick = () =>{
        cube = new_cube
        change()
    }
    cube = new_cube
    container_cube.appendChild(new_cube)
    change()
}

del.onclick = () =>{
    if(cube){
        container_cube.removeChild(cube)
        cuber = ''
    }
}

//Importando
model.onsubmit = (e) =>{
    e.preventDefault()

    let res = confirm('Deseja importar esse modelo?')

    if(res){
        let new_model = model.children[0].value

        let new_model_click = document.createElement('div')
        new_model_click.setAttribute('class','model')
        new_model_click.innerHTML = new_model
        new_model_click.onmousedown = (e) =>{
            if(e.button == 0){

                container_cube.innerHTML = new_model
                for(let n = 0; n < container_cube.children.length; n++){
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
                    console.log(new_cube)
                    new_cube.onclick = () =>{
                        console.log(new_cube)
                        cube = new_cube
                        change()
                    }
                }
            }
            else if(e.button == 2){
                models.removeChild(new_model_click)
            }
        }

        models.appendChild(new_model_click)
        models.setAttribute('open','')

        model.children[0].value = ''
    }
}

function change(){
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
    const file = new Blob([data], {type: type});
    
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
    
    setTimeout(function() {
       document.body.removeChild(a);
       window.URL.revokeObjectURL(url);  
    },0); 
}