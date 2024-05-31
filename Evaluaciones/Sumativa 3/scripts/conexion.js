function conectar(){
    let usuario = document.getElementById('username').value
    document.getElementById('nickname-user').innerHTML='Bienvenido '+ usuario
    document.getElementById('form').style.display = 'none'
    document.getElementById('disconnect').hidden=false
}

function desconectar() {
    document.getElementById('nickname-user').innerHTML = 'Bienvenido nickname'
    document.getElementById('disconnect').hidden = true
    document.getElementById('form').style.display = 'block'
    document.getElementById('username').value=''
}