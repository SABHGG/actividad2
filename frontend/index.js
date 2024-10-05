const contenido = document.querySelector('#contenido');
const t1 = document.querySelector('#t1')
const t2 = document.querySelector('#t2')
const t3 = document.querySelector('#t3')

const op1 = document.querySelector('#opcion1')
const op2 = document.querySelector('#opcion2')
const op3 = document.querySelector('#opcion3')
const op4 = document.querySelector('#opcion4')

const btn = document.querySelector('#enviar')

var url = 'https://actividad-1-backend.onrender.com'
op1.addEventListener('click', opcion1)
op2.addEventListener('click', opcion2)
op3.addEventListener('click', opcion3)
op4.addEventListener('click', opcion4)

btn.addEventListener('click', enviar)

function opcion1(){
    url = 'https://actividad-1-backend.onrender.com'
    t1.disabled = true
    t2.disabled = true
    t3.disabled = true

    t1.value = ''
    t2.value = ''
    t3.value = ''

    t1.placeholder = ''
    t2.placeholder = ''
    t3.placeholder = ''
}

function opcion2(){
    url = 'https://actividad-1-backend.onrender.com'
    t1.disabled = false
    t2.disabled = false
    t3.disabled = false

    t1.value = ''
    t2.value = ''
    t3.value = ''
    
    t1.placeholder = 'Nota 1'
    t2.placeholder = 'Nota 2'
    t3.placeholder = 'Nota 3'
}

function opcion3(){
    url = 'https://actividad-1-backend.onrender.com'

    t1.disabled = false
    t2.disabled = true
    t3.disabled = true

    t1.value = ''
    t2.value = ''
    t3.value = ''

    t1.placeholder = 'Ingrese su edad'
    t2.placeholder = ''
    t3.placeholder = ''
}

function opcion4(){
    url = 'https://actividad-1-backend.onrender.com'
    t1.disabled = false
    t2.disabled = false
    t3.disabled = false

    t1.value = ''
    t2.value = ''
    t3.value = ''

    t1.placeholder = 'Valores permitidos'
    t2.placeholder = 'Columnas'
    t3.placeholder = 'Filas'
}   

function enviar(){
    url = 'https://actividad-1-backend.onrender.com'
    if(op2.checked){
        url = url + `/notas/${parseFloat(t1.value).toFixed(1)}/${parseFloat(t2.value).toFixed(1)}/${parseFloat(t3.value).toFixed(1)}`
        console.log(url)
    }
    else if(op3.checked){
        url = url + `/edad/${t1.value}`
    }
    else if(op4.checked){
        url = url + `/arreglo/${t1.value}/${t2.value}/${t3.value? t3.value : 0}`
    }
    fetch(url)
    .then(res => res.text())
    .then(data => {
        contenido.innerHTML = data
    }).catch(err => contenido.innerHTML = 'Error de conexión')
}