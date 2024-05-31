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

function mostrarCatalogo() {
    let tbody = document.getElementById("catalogo");

    tbody.innerHTML = ""; // Clear the existing content

    catalogo.forEach((producto) => {
        let row = document.createElement("tr");

        let boton_añadir = document.createElement("button");
        boton_añadir.innerText = "Añadir al carrito";

        boton_añadir.onmouseover = function () {
            this.style.backgroundColor = "green"; 
        };


        boton_añadir.onmouseout = function () {
            this.style.backgroundColor = ""; 
        };

        let cell_boton = document.createElement("td");
        cell_boton.appendChild(boton_añadir);

        row.innerHTML = `
                    <td><img src="${producto.imagen}" alt="${producto.nombre}" width="150"></td>
                    <td>${producto.codigo}</td>
                    <td>${producto.categoria}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.ubicacion}</td>
                    <td>${producto.disponibilidad}</td>
                    <td>${producto.tiempo}</td>
                `;

        row.appendChild(cell_boton);

        tbody.appendChild(row);
    });
}
window.onload = mostrarCatalogo;
