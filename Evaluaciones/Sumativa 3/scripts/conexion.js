function conectar() {
    let usuario = document.getElementById('username').value

    if (usuario =='') {
        window.alert('No se puede ingresar un nombre vacio')
        
    }
    else {
        document.getElementById('nickname-user').innerHTML = 'Bienvenido ' + usuario
        document.getElementById('form').style.display = 'none'
        document.getElementById('disconnect').style.display = 'block'
        document.getElementById('btn-carrito').style.display= 'block'
        document.getElementById('carrito').hidden = false
    }
}

function desconectar() {
    document.getElementById('nickname-user').innerHTML = 'Bienvenido nickname'
    document.getElementById('disconnect').style.display = 'none'
    document.getElementById('form').style.display = 'block'
    document.getElementById('btn-carrito').style.display = 'none'
    document.getElementById('carrito').hidden=true
    document.getElementById('username').value = ''
}