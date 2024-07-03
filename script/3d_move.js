
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
            degX += -15
        }
        else if(e.key == 'ArrowLeft'){
            degX += 15
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