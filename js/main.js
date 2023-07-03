const productos = [
  {
    id: 1,
    nombre: "brasero",
    imagen: "  ./img/brasero.png",
    categoria: "braseros",
    inicio: "todos",
    precio: 10000,
  },

  {
    id: 3,
    nombre: "COCINA ROCKET",
    imagen: "./img/cocinaRocket.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 24000,
  },
  {
    id: 2,
    nombre: "brochete",
    imagen: "./img/brochete.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 6000,
  },
  {
    id: 4,
    nombre: "delantal",
    imagen: "./img/delantal.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 5000,
  },
  {
    id: 5,
    nombre: "discoDeArado",
    imagen: "./img/discoDeArado.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 13500,
  },
  {
    id: 6,
    nombre: "fogoneroCuadrado",
    imagen: "./img/fogoneroCuadrado.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 25000,
  },
  {
    id: 7,
    nombre: "fogoneroRedondo",
    imagen: "./img/fogoneroRedondo.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 37000,
  },
  {
    id: 8,
    nombre: "BROCHET GRILLERO",
    imagen: "./img/grillero.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 10000,
  },

  {
    id: 9,
    nombre: "juegoDeAsador",
    imagen: "./img/juegoDeAsador.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 1000,
  },
  {
    id: 10,
    nombre: "parrilla",
    imagen: "./img/parrilla.png",
    categoria: "parrillas",
    inicio: "todos",
    precio: 17000,
  },
  {
    id: 11,
    nombre: "plancha",
    imagen: "./img/plancha.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 10000,
  },
  {
    id: 28,
    nombre: "parrilla4",
    imagen: "./img/parrilla4.png",
    categoria: "parrillas",
    inicio: "todos",
    precio: 36000,
  },
  {
    id: 12,
    nombre: "prensaParaAsador",
    imagen: "./img/prensaParaAsador.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 8000,
  },
  {
    id: 13,
    nombre: "provoletera",
    imagen: "./img/provoletera.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 12000,
  },
  {
    id: 14,
    nombre: "tabla",
    imagen: "./img/tabla.png",
    categoria: "accesorios",
    inicio: "todos",
    precio: 5000,
  },
  {
    id: 15,
    nombre: "fogoneroRedondo2",
    imagen: "./img/fogoneroRedondo2.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 45000,
  },
  {
    id: 16,
    nombre: "fogoneroRedondo3",
    imagen: "./img/fogoneroRedondo3.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 42500,
  },

  {
    id: 17,
    nombre: "fogoneroRedondo4",
    imagen: "./img/fogoneroRedondo4.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 50000,
  },
  {
    id: 29,
    nombre: "parrilla5",
    imagen: "../img/parrilla5.png",
    categoria: "parrillas",
    inicio: "todos",
    precio: 47000,
  },
  {
    id: 18,
    nombre: "fogoneroRedondo5",
    imagen: "./img/fogoneroRedondo5.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 55000,
  },
  {
    id: 19,
    nombre: "fogoneroCuadrado2",
    imagen: "./img/fogoneroCuadrado2.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 55000,
  },
  {
    id: 27,
    nombre: "parrilla3",
    imagen: "./img/parrilla3.png",
    categoria: "parrillas",
    inicio: "todos",
    precio: 41000,
  },
  {
    id: 20,
    nombre: "fogoneroCuadrado3",
    imagen: "./img/fogoneroCuadrado3.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 55000,
  },
  {
    id: 21,
    nombre: "fogoneroCuadrado4",
    imagen: "./img/fogoneroCuadrado4.png",
    categoria: "fogoneros",
    inicio: "todos",
    precio: 55000,
  },
  {
    id: 22,
    nombre: "brasero2",
    imagen: "./img/brasero2.png",
    categoria: "braseros",
    inicio: "todos",
    precio: 16000,
  },
  {
    id: 23,
    nombre: "brasero3",
    imagen: "./img/brasero3.png",
    categoria: "braseros",
    inicio: "todos",
    precio: 14800,
  },
  {
    id: 24,
    nombre: "brasero4",
    imagen: "./img/brasero4.png",
    categoria: "braseros",
    inicio: "todos",
    precio: 13500,
  },
  {
    id: 25,
    nombre: "brasero5",
    imagen: "./img/brasero5.png",
    categoria: "braseros",
    inicio: "todos",
    precio: 17000,
  },
  {
    id: 26,
    nombre: "parrilla2",
    imagen: "./img/parrilla2.png",
    categoria: "parrillas",
    inicio: "todos",
    precio: 38600,
  },
];


const listaAccesorios = document.querySelector(".lista-accesorios");
const listaBraseros = document.querySelector(".lista-braseros");
const listaFogoneros = document.querySelector(".lista-fogoneros");
const listaParrillas = document.querySelector(".lista-parrillas");
const listaTodos = document.querySelector(".lista-todos");
const botonProductos = document.querySelectorAll(".boton-productos");
const body = document.body;

function actualizarBtnAgregar() {
  btnAgregar = document.querySelectorAll(".btnAgregar");
}

//CARGAR TODOS LOS PRODUCTOS//
const principalMain = document.querySelector("#principal-main");
const productosInicio = [];

function agregarProductos() {
  listaTodos.classList.add("active");
  productos.forEach((producto) => {
    productosInicio.push(producto);
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList.add("producto");
    nuevoProducto.innerHTML = `
    <div class="producto-img">
              <img src=${producto.imagen} alt="">
            </div>
            <div class="producto-detalles">
              <div class="producto-nombre">
                <h2>${producto.nombre}</h2>
              </div>
              <div class="producto-preciobtn">
                <h2>$${producto.precio}</h2>
                <button class="btnAgregar">Agregar al carrito</button>
              </div>
            </div>`;
    principalMain.appendChild(nuevoProducto);
  });
}
agregarProductos();


// FILTRAR ACCESORIOS
const productosAccesorios = [];
function filtrarAccesorios() {
  listaTodos.classList.remove("active");
  listaBraseros.classList.remove("active");
  listaFogoneros.classList.remove("active");
  listaParrillas.classList.remove("active");
  listaAccesorios.classList.add("active");
  botonAccesorios.classList.remove("disabled");
  botonAccesorios.classList.add("active");
  limpiarProductosAnteriores();
  productos.forEach((producto) => {
    if (producto.categoria === "accesorios") {
      productosAccesorios.push(producto);
      const productoAccesorios = document.createElement("article");
      productoAccesorios.classList.add("producto");
      productoAccesorios.innerHTML = `
      <div class="producto-img">
                <img src=${producto.imagen} alt="">
              </div>
              <div class="producto-detalles">
                <div class="producto-nombre">
                  <h2>${producto.nombre}</h2>
                </div>
                <div class="producto-preciobtn">
                  <h2>$${producto.precio}</h2>
                  <button class="btnAgregar">Agregar al carrito</button>
                </div>
              </div>`;
      principalMain.append(productoAccesorios);
    }
  });
}

const botonAccesorios = document.querySelector(".boton-accesorios");
botonAccesorios.addEventListener("click", filtrarAccesorios);

//FILTRAR TODOS//
const productosTodos = [];
function filtrarTodos() {
  listaAccesorios.classList.remove("active");
  listaBraseros.classList.remove("active");
  listaFogoneros.classList.remove("active");
  listaParrillas.classList.remove("active");
  listaTodos.classList.add("active");
  limpiarProductosAnteriores();
  productos.forEach((producto) => {
    if (producto.inicio === "todos") {
      productosTodos.push(producto);
      const productoTodos = document.createElement("article");
      productoTodos.classList.add("producto");
      productoTodos.innerHTML = `
      <div class="producto-img">
                <img src=${producto.imagen} alt="">
              </div>
              <div class="producto-detalles">
                <div class="producto-nombre">
                  <h2>${producto.nombre}</h2>
                </div>
                <div class="producto-preciobtn">
                  <h2>$${producto.precio}</h2>
                  <button class="btnAgregar">Agregar al carrito</button>
                </div>
              </div>`;
      principalMain.append(productoTodos);
    }
  });
}
const botonTodos = document.querySelector(".boton-todos");
botonTodos.addEventListener("click", filtrarTodos);

//FILTRAR BRASEROS//
const productosBraseros = [];
function filtrarBraseros() {
  listaTodos.classList.remove("active");
  listaAccesorios.classList.remove("active");
  listaFogoneros.classList.remove("active");
  listaParrillas.classList.remove("active");
  listaBraseros.classList.add("active");
  limpiarProductosAnteriores();
  productos.forEach((producto) => {
    if (producto.categoria === "braseros") {
      productosBraseros.push(producto);
      const productoBraseros = document.createElement("article");
      productoBraseros.classList.add("producto");
      productoBraseros.innerHTML = `
      <div class="producto-img">
                <img src=${producto.imagen} alt="">
              </div>
              <div class="producto-detalles">
                <div class="producto-nombre">
                  <h2>${producto.nombre}</h2>
                </div>
                <div class="producto-preciobtn">
                  <h2>$${producto.precio}</h2>
                  <button class="btnAgregar">Agregar al carrito</button>
                </div>
              </div>`;
      principalMain.append(productoBraseros);
    }
  });
}
const botonBraseros = document.querySelector(".boton-braseros");
botonBraseros.addEventListener("click", filtrarBraseros);
//FILTRAR FOGONEROS//
const productosFogoneros = [];
function filtrarFogoneros() {
  listaTodos.classList.remove("active");
  listaBraseros.classList.remove("active");
  listaAccesorios.classList.remove("active");
  listaParrillas.classList.remove("active");
  listaFogoneros.classList.add("active");
  limpiarProductosAnteriores();
  productos.forEach((producto) => {
    if (producto.categoria === "fogoneros") {
      productosFogoneros.push(producto);
      const productoFogoneros = document.createElement("article");
      productoFogoneros.classList.add("producto");
      productoFogoneros.innerHTML = `
      <div class="producto-img">
                <img src=${producto.imagen} alt="">
              </div>
              <div class="producto-detalles">
                <div class="producto-nombre">
                  <h2>${producto.nombre}</h2>
                </div>
                <div class="producto-preciobtn">
                  <h2>$${producto.precio}</h2>
                  <button class="btnAgregar">Agregar al carrito</button>
                </div>
              </div>`;
      principalMain.append(productoFogoneros);
    }
  });
}
const botonFogoneros = document.querySelector(".boton-fogoneros");
botonFogoneros.addEventListener("click", filtrarFogoneros);

//FILTRAR PARRILLAS//
const productosParrillas = [];
function filtrarParrillas() {
  listaTodos.classList.remove("active");
  listaBraseros.classList.remove("active");
  listaFogoneros.classList.remove("active");
  listaAccesorios.classList.remove("active");
  listaParrillas.classList.add("active");
  limpiarProductosAnteriores();
  productos.forEach((producto) => {
    if (producto.categoria === "parrillas") {
      productosParrillas.push(producto);
      const productoParrillas = document.createElement("article");
      productoParrillas.classList.add("producto");
      productoParrillas.innerHTML = `
      <div class="producto-img">
                <img src=${producto.imagen} alt="">
              </div>
              <div class="producto-detalles">
                <div class="producto-nombre">
                  <h2>${producto.nombre}</h2>
                </div>
                <div class="producto-preciobtn">
                  <h2>$${producto.precio}</h2>
                  <button class="btnAgregar">Agregar al carrito</button>
                </div>
              </div>`;
      principalMain.append(productoParrillas);
    }
  });
}
const botonParrillas = document.querySelector(".boton-parrillas");
botonParrillas.addEventListener("click", filtrarParrillas);

//FUNCION PARA LIMPIAR PRODUCTOS//
function limpiarProductosAnteriores() {
  while (principalMain.firstChild) {
    principalMain.removeChild(principalMain.firstChild);
  }
}

// FUNCION PARA MOSTRAR TOASTIFY
principalMain.addEventListener("click", (event) => {
  if (event.target.classList.value === "btnAgregar") {
    Toastify({
      text: "El producto se agregó correctamente",
      duration: 3000,
      destination: "./pages/carrito.html",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#007d81",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});


//ENVIAR Y GUARDAR EN LS DATOS MAIL
const enviarMail = document.querySelector(".mailSubmit");
const datosMail = document.querySelector(".datosMail");

enviarMail.addEventListener("click", () => {
  const valorDatosMail = datosMail.value;
  guardarEnLS("mail", valorDatosMail)
});

function guardarEnLS(clave,valor){
  localStorage.setItem(clave,JSON.stringify(valor))
}

