// JS Segundo Ejercicio
function calcularStickers(){
input1 = Number(document.querySelector('#input1').value)
input2 = Number(document.querySelector('#input2').value)
input3 = Number(document.querySelector('#input3').value)
totalInputs = input1 + input2 + input3

textoSegundoEj = document.querySelector('#segundo-total')

if (totalInputs > 10){
    textoSegundoEj.innerHTML = "Llevas demasiados stickers (máx 10)"
} else {
    textoSegundoEj.innerHTML = "Llevas "+ totalInputs.toString() + " sticker/s."
}
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calcularStickers);
  });


// JS Tercer ejercicio
function verificarContraseña(){
    digito1 = document.getElementById('tercer-select1').value
    digito2 = document.getElementById('tercer-select2').value
    digito3 = document.getElementById('tercer-select3').value
    contraseña = digito1.toString() + digito2.toString() + digito3.toString()
    mensaje = document.querySelector('#tercer-mensaje')

    if (contraseña === '911'){
        mensaje.innerHTML = '¡Contraseña 1 correcta!'
    } else if (contraseña === '714'){
        mensaje.innerHTML = '¡Contraseña 2 correcta!'
    } else{
        mensaje.innerHTML = '¡Contraseña incorrecta!'

    }
}
