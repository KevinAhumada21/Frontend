let catalogo = [
    {
        codigo: "P0001",
        categoria: "Juegos de Tablero",
        nombre: "Tablero de Damas",
        descripcion:
            "Tablero para el juego de damas. Incluye un tablero y 24 fichas repartidas entre el color blanco y negro. Tablero se convierte en maleta para guardar las fichas.",
        ubicacion: "Renca",
        imagen: "/Evaluaciones/Sumativa 3/assets/p0001.png",
        disponibilidad: 10,
        tiempo: 5,
    },
    {
        codigo: "P0002",
        categoria: "Juegos de Tablero",
        nombre: "Tablero de Ajedrez",
        descripcion:
            "Tablero para jugar Ajedrez. Incluye un tablero y con el set de fichas completo tanto de color blanco como negro. Tablero se convierte en maleta para guardar las fichas.",
        ubicacion: "Renca",
        imagen: "/Evaluaciones/Sumativa 3/assets/p0002.jpg",
        disponibilidad: 10,
        tiempo: 5,
    },
    {
        codigo: "P0003",
        categoria: "Juegos de Rol",
        nombre: "Dungeons & Dragons 5ed, Manual del Jugador",
        descripcion:
            "Manual del jugador para la 5ta edición del juego de rol Dungeons & Dragons. Tapa dura y en español.",
        ubicacion: "Santiago Centro",
        imagen: "/Evaluaciones/Sumativa 3/assets/p0003.jpg",
        disponibilidad: 3,
        tiempo: 5,
    },
];


let catalogo_original = [
    {
        codigo: "P0001",
        categoria: "Juegos de Tablero",
        nombre: "Tablero de Damas",
        descripcion:
            "Tablero para el juego de damas. Incluye un tablero y 24 fichas repartidas entre el color blanco y negro. Tablero se convierte en maleta para guardar las fichas.",
        ubicacion: "Renca",
        imagen: "/Evaluaciones/Sumativa 3/assets/p0001.png",
        disponibilidad: 10,
        tiempo: 5,
    },
    {
        codigo: "P0002",
        categoria: "Juegos de Tablero",
        nombre: "Tablero de Ajedrez",
        descripcion:
            "Tablero para jugar Ajedrez. Incluye un tablero y con el set de fichas completo tanto de color blanco como negro. Tablero se convierte en maleta para guardar las fichas.",
        ubicacion: "Renca",
        imagen: "/Evaluaciones/Sumativa 3/assets/p0002.jpg",
        disponibilidad: 10,
        tiempo: 5,
    },
    {
        codigo: "P0003",
        categoria: "Juegos de Rol",
        nombre: "Dungeons & Dragons 5ed, Manual del Jugador",
        descripcion:
            "Manual del jugador para la 5ta edición del juego de rol Dungeons & Dragons. Tapa dura y en español.",
        ubicacion: "Santiago Centro",
        imagen: "/Evaluaciones/Sumativa 3/assets/p0003.jpg",
        disponibilidad: 3,
        tiempo: 5,
    },
];

let logueado=false
function conectar() {
    let usuario = document.getElementById('username').value

    if (usuario == '') {
        window.alert('No se puede ingresar un nombre vacio')

    }
    else {
        document.getElementById('nickname-user').innerHTML = 'Bienvenido ' + usuario
        document.getElementById('form').style.display = 'none'
        document.getElementById('disconnect').style.display = 'block'
        document.getElementById('btn-carrito').style.display = 'block'
        document.getElementById('carrito').hidden = false
        logueado = true
        console.log(logueado)
        mostrarCatalogo()
    }
}

function desconectar() {
    document.getElementById('nickname-user').innerHTML = 'Bienvenido nickname'
    document.getElementById('disconnect').style.display = 'none'
    document.getElementById('form').style.display = 'block'
    document.getElementById('btn-carrito').style.display = 'none'
    document.getElementById('carrito').hidden = true
    document.getElementById('username').value = ''
    logueado = false
}

function mostrarCatalogo() {
    let tablaCatalogo = document.getElementById("catalogo");
    tablaCatalogo.innerHTML = '';

    catalogo.forEach(function (item, index) {
        if (logueado===true) {
            tablaCatalogo.innerHTML += `<tr>
                    <td>${index + 1}</td>
                    <td><img src="${item.imagen}" width="150"></td>
                    <td>${item.codigo}</td>
                    <td>${item.categoria}</td>
                    <td>${item.nombre}</td>
                    <td>${item.ubicacion}</td>
                    <td>${item.descripcion}</td>
                    <td align="center">${item.disponibilidad}</td>
                    <td align="center">${item.tiempo}</td>
                    <td align="center">
                        <button type="button" class="añadir" onclick="añadir(${index}, false)">+<i class="fas fa-pen"></i></button>
                        <button type="button" class="menos" onclick="añadir(${index}, true)">-<i class="fas fa-pen"></i></button>
                    </td>
                </tr>`;
        }
        else {
            tablaCatalogo.innerHTML += `<tr>
                    <td>${index + 1}</td>
                    <td><img src="${item.imagen}" width="150"></td>
                    <td>${item.codigo}</td>
                    <td>${item.categoria}</td>
                    <td>${item.nombre}</td>
                    <td>${item.ubicacion}</td>
                    <td>${item.descripcion}</td>
                    <td align="center">${item.disponibilidad}</td>
                    <td align="center">${item.tiempo}</td>
                    <td align="center">
                    </td>
                </tr>`
        }
    });
}

let carritoProductos = []
function añadir(indice, eliminar) {
    
    let producto = catalogo[indice];
    let carro = document.getElementById('carrodecompra')

    let productoEnCarrito = carritoProductos.find(item => item.codigo === producto.codigo);

    if (productoEnCarrito) {
        if (eliminar) {
            productoEnCarrito.cantidad--;
            if (productoEnCarrito.cantidad == 0) {
                carritoProductos = carritoProductos.filter(item => item.codigo !== producto.codigo);
            }
        } else {
            if (producto.disponibilidad == 0) {
                window.alert('No hay stock disponible');
                return;
            }
            producto.disponibilidad--;
            console.log(producto.disponibilidad);
            productoEnCarrito.cantidad++;
        }
    } else {
        if (carritoProductos.length > 0 && carritoProductos[0].ubicacion !== producto.ubicacion) {
            window.alert('No se puede añadir productos de diferentes ubicaciones, por favor escoja otro producto');
            return;
        }
        if (producto.disponibilidad == 0) {
            window.alert('No hay stock disponible');
            return;
        }
        producto.disponibilidad--;
        carritoProductos.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            ubicacion: producto.ubicacion,
            cantidad: 1
        });
    }

    carro.innerHTML = '';

    carritoProductos.forEach((producto, index) => {
        carro.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
        </tr>`;
    })
    let tablaCatalogo = document.getElementById("catalogo");
    tablaCatalogo.innerHTML = '';

    // Actualizar el catálogo
    mostrarCatalogo();
}

