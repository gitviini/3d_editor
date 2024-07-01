const display = document.querySelector('.display')
const container_cube = document.querySelector('.container-cube')
const cubes = document.querySelectorAll('.cube')
const add = document.querySelector('#add')
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