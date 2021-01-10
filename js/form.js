var correo = document.getElementById('id_email');
var nombre = document.getElementById('id_nombre');
var mensaje = document.getElementById('id_mensaje');

function tabToName(event) {
    if (event.keyCode == 13) {
        nombre.focus();
    };
};


function tabToMessage(event) {
    if (event.keyCode == 13) {
        mensaje.focus();
    };
};

function alerta_enter(event) {
    if (event.keyCode == 13) {
        let validacion = confirm('deseas enviar esta informacion?');
        if (validacion == true) {
            console.log('si');
            prueba();
            limpiado(correo, nombre, mensaje);
            mensaje.blur()
        } else {
            console.log('no');
            mensaje.blur()
        };
    };
};

function limpiado(correo, nombre, mensaje){
    correo.value = '';
    nombre.value = '';
    mensaje.value = '';
}

function obtener_formulario() {
    var info = {
        "correo": correo.value,
        "nombre": nombre.value,
        "mensaje": mensaje.value,
    };
    limpiado(correo, nombre, mensaje)
    return info;
};

function prueba(e) {
    enviopost(obtener_formulario())
};

function enviopost(info){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //var raw = JSON.stringify({"remitente":"daniel","cuerpo":"este es el body"});

    var requestOptions = {
     method: 'POST',
      headers: myHeaders,
      body: info,
      redirect: 'follow'
    };

    fetch("https://ae6ucmv05j.execute-api.us-east-2.amazonaws.com/testing/test", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}