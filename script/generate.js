const display = document.querySelector('.display')
const preview = document.querySelectorAll('.preview')
const container_cube = document.querySelector('.container-cube')
const cubes = document.querySelectorAll('.cube')
const models = document.querySelector('.models')
const add = document.querySelector('#add')
const del = document.querySelector('#delete')
const move = document.querySelector('#move')
let cube = ''
const model_faces = '<div class="face front"></div><div class="face right"></div><div class="face left"></div><div class="face bottom"></div><div class="face back"></div><div class="face top"></div>'
const resize = document.querySelector('#resize')
const posicionar = document.querySelector('#posicionar')
const colorir = document.querySelector('#colorir')
const filter = document.querySelector('#filter')
const model = document.querySelector('#model')

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
        
        cube.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
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
        new_model_click.onclick = () =>{
            container_cube.innerHTML = new_model
            for(new_cube of container_cube.children){
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
                new_cube.onclick = () =>{
                    cube = new_cube
                    change()
                }
            }
        }

        models.appendChild(new_model_click)
        models.setAttribute('open','')

        model.children[0].value = ''
    }
}

let press = false

let degX = 15
let degY = 15

move.onclick = () => {
    press = !press
    move.classList.toggle('click') 

    if(!press){
        for(face of preview){
            face.classList.remove('click')
        }
    }
    else{
        degree(degX,degY)
        display.style.transform = `rotateY(${degX}deg) rotateX(${degY * -1}deg)`
    }
}

window.onkeydown = (e) => {
    if(press){

        if(e.key == 'ArrowUp'){
            degY += 15
        }
        else if(e.key == 'ArrowDown'){
            degY += -15
        }
        else if(e.key == 'ArrowRight'){
            degX += 15
        }
        else if(e.key == 'ArrowLeft'){
            degX += -15
        }

        if(degX > 315 || degX < -315){
            degX = 0
        }
    
        if(degY > 135 || degY < -135){
            degY = 0
        }

        console.log(`${degX} | ${degY}`)

        degree(degX,degY)
    }
}

function change(){
    resize.children[0].value = cube.getAttribute('width')
    resize.children[1].value = cube.getAttribute('height')
    resize.children[2].value = cube.getAttribute('length')
    posicionar.children[0].value = cube.getAttribute('x')
    posicionar.children[1].value = cube.getAttribute('y')
    posicionar.children[2].value = cube.getAttribute('z')
    colorir.children[0].value = cube.getAttribute('color')
    filter.children[0].value = cube.getAttribute('filter')
}

function degree(degX=0,degY=0){

    if(degX <= 45 && degX >= -45 && degY <= 45 && degY >= -45){
        display.children[0].classList.add('click')
    }
    else{
        display.children[0].classList.remove('click')
    }
    if(degX <= -45 && degX >= -135 && degY <= 45 && degY >= -45  || degX <= 315 && degX >= 225 && degY <= 45 && degY >= -45){
        display.children[1].classList.add('click')
    }
    else{
        display.children[1].classList.remove('click')
    }
    if(degX <= -135 && degX >= -225 && degY <= 45 && degY >= -45 || degX <= 225 && degX >= 135 && degY <= 45 && degY >= -45){
        display.children[4].classList.add('click')
    }
    else{
        display.children[4].classList.remove('click')
    }
    if(degX <= -225 && degX >= -315 && degY <= 45 && degY >= -45 || degX <= 135 && degX >= 45 && degY <= 45 && degY >= -45){
        display.children[2].classList.add('click')
    }
    else{
        display.children[2].classList.remove('click')
    }

    if(degY <= 135 && degY >= 45){
        display.children[5].classList.add('click')
    }
    else{
        display.children[5].classList.remove('click')
    }

    if(degY <= -45 && degY >= -135){
        display.children[3].classList.add('click')
    }
    else{
        display.children[3].classList.remove('click')
    }

    display.style.transform = `rotateY(${degX}deg) rotateX(${degY * -1}deg)`
}