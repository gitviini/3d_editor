const display = document.querySelector('.display')
const container_cube = document.querySelector('.container-cube')
const cubes = document.querySelectorAll('.cube')
const add = document.querySelector('#add')
const del = document.querySelector('#delete')
const theme = document.querySelector('#theme')
let cube = ''
const model_faces = '<div class="face front"></div>\
                <div class="face right"></div>\
                <div class="face left"></div>\
                <div class="face bottom"></div>\
                <div class="face back"></div>\
                <div class="face top"></div>'

const resize = document.querySelector('#resize')
const posicionar = document.querySelector('#posicionar')
const colorir = document.querySelector('#colorir')
const filter = document.querySelector('#filter')

//Configurações
resize.onsubmit = (e) => {
    e.preventDefault()

    if(cube){

        let x = Number(resize.children[0].value)
        let y = Number(resize.children[1].value)
        let z = Number(resize.children[2].value)
        console.log(z)
        cube.style.minWidth = `${x}px`
        cube.style.minHeight = `${y}px`

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
        
        cube.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
    }
}

colorir.onsubmit = (e) =>{
    e.preventDefault()

    if(cube){
        let color = colorir.children[0].value

        for(face of cube.children){
            face.style.background = color
        }
    }
}

filter.onsubmit = (e) =>{
    e.preventDefault()

    if(cube){
        let filter_content = filter.children[0].value

        for(face of cube.children){
            face.style.filter = filter_content
        }
    }
}

//Ações
add.onclick = () =>{
    console.log('oi')
    let new_cube = document.createElement('div')
    new_cube.setAttribute('class','cube')
    new_cube.innerHTML = model_faces
    new_cube.onclick = () =>{
        cube = new_cube
    }
    cube = new_cube
    container_cube.appendChild(new_cube)
}

del.onclick = () =>{
    if(cube){
        container_cube.removeChild(cube)
        cuber = ''


    }
}

let press = false

let degX = 15
let degY = 15
display.onclick = () => press = !press
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

        display.style.transform = `rotateY(${degX}deg) rotateX(${degY * -1}deg)`
        document.body.classList.toggle('click') 
    }
}


'<div class="cube" style="min-width: 50px; min-height: 5px; transform: translateX(0px) translateY(-20px) translateZ(0px);"><div class="face front" style="background: rgb(115, 48, 11); width: 50px; transform: translateZ(25px); height: 5px;"></div>                <div class="face right" style="background: rgb(115, 48, 11); height: 5px; transform: rotateY(90deg) translateZ(25px); width: 50px;"></div>                <div class="face left" style="background: rgb(115, 48, 11); height: 5px; transform: rotateY(-90deg) translateZ(25px); width: 50px;"></div>                <div class="face bottom" style="background: rgb(115, 48, 11); width: 50px; height: 50px; transform: rotateY(180deg) rotateX(90deg) translateZ(-2.5px);"></div>                <div class="face back" style="background: rgb(115, 48, 11); width: 50px; transform: rotateY(180deg) translateZ(25px); height: 5px;"></div>                <div class="face top" style="background: rgb(115, 48, 11); width: 50px; height: 50px; transform: rotateX(90deg) translateZ(2.5px);"></div></div><div class="cube" style="min-width: 40px; min-height: 2.5px; transform: translateX(0px) translateY(-23.75px) translateZ(0px);"><div class="face front" style="background: rgb(221, 221, 221); width: 40px; transform: translateZ(20px); height: 2.5px;"></div>                <div class="face right" style="background: rgb(221, 221, 221); height: 2.5px; transform: rotateY(90deg) translateZ(20px); width: 40px;"></div>                <div class="face left" style="background: rgb(221, 221, 221); height: 2.5px; transform: rotateY(-90deg) translateZ(20px); width: 40px;"></div>                <div class="face bottom" style="background: rgb(221, 221, 221); width: 40px; height: 40px; transform: rotateY(180deg) rotateX(90deg) translateZ(-1.25px);"></div>                <div class="face back" style="background: rgb(221, 221, 221); width: 40px; transform: rotateY(180deg) translateZ(20px); height: 2.5px;"></div>                <div class="face top" style="background: rgb(221, 221, 221); width: 40px; height: 40px; transform: rotateX(90deg) translateZ(1.25px);"></div></div><div class="cube" style="transform: translateX(20px) translateY(2.5px) translateZ(20px); min-width: 10px; min-height: 42.5px;"><div class="face front" style="background: rgb(115, 48, 11); width: 10px; transform: translateZ(5px); height: 42.5px;"></div>                <div class="face right" style="background: rgb(115, 48, 11); height: 42.5px; transform: rotateY(90deg) translateZ(5px); width: 10px;"></div>                <div class="face left" style="background: rgb(115, 48, 11); height: 42.5px; transform: rotateY(-90deg) translateZ(5px); width: 10px;"></div>                <div class="face bottom" style="background: rgb(115, 48, 11); width: 10px; height: 10px; transform: rotateY(180deg) rotateX(90deg) translateZ(-21.25px);"></div>                <div class="face back" style="background: rgb(115, 48, 11); width: 10px; transform: rotateY(180deg) translateZ(5px); height: 42.5px;"></div>                <div class="face top" style="background: rgb(115, 48, 11); width: 10px; height: 10px; transform: rotateX(90deg) translateZ(21.25px);"></div></div><div class="cube" style="min-width: 10px; min-height: 42.5px; transform: translateX(20px) translateY(2.5px) translateZ(-20px);"><div class="face front" style="background: rgb(115, 48, 11); width: 10px; transform: translateZ(5px); height: 42.5px;"></div>                <div class="face right" style="background: rgb(115, 48, 11); height: 42.5px; transform: rotateY(90deg) translateZ(5px); width: 10px;"></div>                <div class="face left" style="background: rgb(115, 48, 11); height: 42.5px; transform: rotateY(-90deg) translateZ(5px); width: 10px;"></div>                <div class="face bottom" style="background: rgb(115, 48, 11); width: 10px; height: 10px; transform: rotateY(180deg) rotateX(90deg) translateZ(-21.25px);"></div>                <div class="face back" style="background: rgb(115, 48, 11); width: 10px; transform: rotateY(180deg) translateZ(5px); height: 42.5px;"></div>                <div class="face top" style="background: rgb(115, 48, 11); width: 10px; height: 10px; transform: rotateX(90deg) translateZ(21.25px);"></div></div><div class="cube" style="transform: translateX(-20px) translateY(2.5px) translateZ(-20px); min-width: 10px; min-height: 42.5px;"><div class="face front" style="width: 10px; transform: translateZ(5px); height: 42.5px; background: rgb(115, 48, 11);"></div>                <div class="face right" style="height: 42.5px; transform: rotateY(90deg) translateZ(5px); width: 10px; background: rgb(115, 48, 11);"></div>                <div class="face left" style="height: 42.5px; transform: rotateY(-90deg) translateZ(5px); width: 10px; background: rgb(115, 48, 11);"></div>                <div class="face bottom" style="width: 10px; height: 10px; transform: rotateY(180deg) rotateX(90deg) translateZ(-21.25px); background: rgb(115, 48, 11);"></div>                <div class="face back" style="width: 10px; transform: rotateY(180deg) translateZ(5px); height: 42.5px; background: rgb(115, 48, 11);"></div>                <div class="face top" style="width: 10px; height: 10px; transform: rotateX(90deg) translateZ(21.25px); background: rgb(115, 48, 11);"></div></div><div class="cube" style="min-width: 10px; min-height: 42.5px; transform: translateX(-20px) translateY(2.5px) translateZ(20px);"><div class="face front" style="width: 10px; transform: translateZ(5px); height: 42.5px; background: rgb(115, 48, 11);"></div>                <div class="face right" style="height: 42.5px; transform: rotateY(90deg) translateZ(5px); width: 10px; background: rgb(115, 48, 11);"></div>                <div class="face left" style="height: 42.5px; transform: rotateY(-90deg) translateZ(5px); width: 10px; background: rgb(115, 48, 11);"></div>                <div class="face bottom" style="width: 10px; height: 10px; transform: rotateY(180deg) rotateX(90deg) translateZ(-21.25px); background: rgb(115, 48, 11);"></div>                <div class="face back" style="width: 10px; transform: rotateY(180deg) translateZ(5px); height: 42.5px; background: rgb(115, 48, 11);"></div>                <div class="face top" style="width: 10px; height: 10px; transform: rotateX(90deg) translateZ(21.25px); background: rgb(115, 48, 11);"></div></div></div>'