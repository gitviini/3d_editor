const display = document.querySelector('.display')
const preview = document.querySelectorAll('.preview')
const container_cube = document.querySelector('.container-cube')
const cubes = document.querySelectorAll('.cube')
const models = document.querySelector('.models')
const add = document.querySelector('#add')
const del = document.querySelector('#delete')
const move = document.querySelector('#move')
const content = document.querySelector('#content')
const copy = document.querySelector('#copy')
const save = document.querySelector('#save')
const change_models = document.querySelector('#change_models')
let cube = ''
const model_faces = '<div class="face front"></div><div class="face right"></div><div class="face left"></div><div class="face bottom"></div><div class="face back"></div><div class="face top"></div>'
const resize = document.querySelector('#resize')
const posicionar = document.querySelector('#posicionar')
const rotacionar = document.querySelector('#rotacionar')
const colorir = document.querySelector('#colorir')
const filter = document.querySelector('#filter')
const model = document.querySelector('#model')