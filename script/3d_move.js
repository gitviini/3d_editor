
let press = false

let degX = 15
let degY = 15

up.onclick = () =>{
    degY += 15
    degree(degX,degY)
}

down.onclick = () =>{
    degY -= 15
    degree(degX,degY)
}

right.onclick = () =>{
    degX += -15
    degree(degX,degY)
}

left.onclick = () =>{
    degX += 15
    degree(degX,degY)
}

move.onclick = () => {
    press = !press
    move_buttons.classList.toggle('show')
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

        console.log(`${degX} | ${degY}`)

        degree(degX,degY)
    }
}

function degree(degX_=0,degY_=0){

    if(degX_ > 315 || degX_ < -315){
        degX = degX_ = 0
    }

    if(degY_ > 135 || degY_ < -135){
        degY = degY_ = 0
    }

    if(degX_ <= 45 && degX_ >= -45 && degY_ <= 45 && degY_ >= -45){
        display.children[0].classList.add('click')
    }
    else{
        display.children[0].classList.remove('click')
    }
    if(degX_ <= -45 && degX_ >= -135 && degY_ <= 45 && degY_ >= -45  || degX_ <= 315 && degX_ >= 225 && degY_ <= 45 && degY_ >= -45){
        display.children[1].classList.add('click')
    }
    else{
        display.children[1].classList.remove('click')
    }
    if(degX_ <= -135 && degX_ >= -225 && degY_ <= 45 && degY_ >= -45 || degX_ <= 225 && degX_ >= 135 && degY_ <= 45 && degY_ >= -45){
        display.children[4].classList.add('click')
    }
    else{
        display.children[4].classList.remove('click')
    }
    if(degX_ <= -225 && degX_ >= -315 && degY_ <= 45 && degY_ >= -45 || degX_ <= 135 && degX_ >= 45 && degY_ <= 45 && degY_ >= -45){
        display.children[2].classList.add('click')
    }
    else{
        display.children[2].classList.remove('click')
    }

    if(degY_ <= 135 && degY_ >= 45){
        display.children[5].classList.add('click')
    }
    else{
        display.children[5].classList.remove('click')
    }

    if(degY_ <= -45 && degY_ >= -135){
        display.children[3].classList.add('click')
    }
    else{
        display.children[3].classList.remove('click')
    }

    display.style.transform = `rotateY(${degX_}deg) rotateX(${degY_ * -1}deg)`
}