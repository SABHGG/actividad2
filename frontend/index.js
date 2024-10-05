const contenido = document.querySelector("#contenido");
const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");

const op1 = document.querySelector("#opcion1");
const op2 = document.querySelector("#opcion2");
const op3 = document.querySelector("#opcion3");
const op4 = document.querySelector("#opcion4");
const op5 = document.querySelector("#opcion5");
const op6 = document.querySelector("#opcion6");
const op7 = document.querySelector("#opcion7");

const btn = document.querySelector("#enviar");

op1.addEventListener("click", opcion1);
op2.addEventListener("click", opcion2);
op3.addEventListener("click", opcion3);
op4.addEventListener("click", opcion4);
op5.addEventListener("click", opcion5);
op6.addEventListener("click", opcion6);
op7.addEventListener("click", opcion7);

btn.addEventListener("click", enviar);

var url = "https://actividad2.onrender.com";

t1.placeholder = "Ingrese el primer número";
t2.placeholder = "Ingrese el segundo número";

function opcion1() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = false;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese el primer número";
  t2.placeholder = "Ingrese el segundo número";
}

function opcion2() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = false;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese el primer número";
  t2.placeholder = "Ingrese el segundo número";
}

function opcion3() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = false;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese el primer número";
  t2.placeholder = "Ingrese el segundo número";
}

function opcion4() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = false;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese el primer número";
  t2.placeholder = "Ingrese el segundo número";
}

function opcion5() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = false;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese la base";
  t2.placeholder = "Ingrese el exponente";
}

function opcion6() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = true;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese el número";
  t2.placeholder = "";
}
function opcion7() {
  url = "https://actividad2.onrender.com";
  t1.disabled = false;
  t2.disabled = true;

  t1.value = "";
  t2.value = "";

  t1.placeholder = "Ingrese el número";
  t2.placeholder = "";
}

function enviar() {
  url = "https://actividad2.onrender.com";
  if (op1.checked) {
    url = url + `/suma/${t1.value}/${t2.value}`;
  } else if (op2.checked) {
    url = url + `/resta/${t1.value}/${t2.value}`;
  } else if (op3.checked) {
    url = url + `/divicion/${t1.value}/${t2.value}`;
  } else if (op4.checked) {
    url = url + `/multiplicacion/${t1.value}/${t2.value}`;
  } else if (op5.checked) {
    url = url + `/potencia/${t1.value}/${t2.value}`;
  } else if (op6.checked) {
    url = url + `/seno/${t1.value}`;
  } else if (op7.checked) {
    url = url + `/coseno/${t1.value}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      contenido.innerHTML = `El resultado es: ${data.resultado} <br/> Operación realizada: ${data.operacion}`;
    })
    .catch((err) => (contenido.innerHTML = "Error de conexión"));
}
