let txtEncriptado = "";

function encriptar() {
    let texto = document.getElementById('txt_encriptar').value;
    let copiaTxt = "";

    for (let letra of texto) {
        switch (letra) {
            case 'a':
                copiaTxt += "ai";
            break;
        case 'e':
            copiaTxt += "enter";
            break;
        case 'i':
            copiaTxt += "imes";
            break;
        case 'o':
            copiaTxt += "ober";
            break;
        case 'u':
            copiaTxt += "ufat";
            break;
        default:
            copiaTxt += letra;
        }
    }

    txtEncriptado = document.querySelector('#txt_encriptado').textContent = copiaTxt
    
    if (txtEncriptado != "") {
        limpiarCaja()
        ocultarImagenes()
        mostrarElementos()
    }
}


function copiar() {
    // Crea un campo de texto temporal
    let temporal = document.createElement("textarea")
    // obtiene el texto del párrafo
    temporal.value = txtEncriptado
    // Añade el campo temporal al cuerpo del documento
    document.body.appendChild(temporal)
    // Selecciona el texto del campo temporal
    temporal.select();
    // Copia el texto al portapapeles
    document.execCommand("copy");
    // Elimina el campo temporal
    document.body.removeChild(temporal)
}


    
function desencriptar() {
    let texto = document.getElementById('txt_encriptar').value
    let arreglo = texto.split(" ")
       
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = arreglo[i].replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    }

    arreglo.join(" ")

    if (document.getElementById("imagen_1").style.display !== "none") {
        limpiarCaja()
        ocultarImagenes()
        mostrarElementos()
        actuliazarParrafo(arreglo)
        copiarDos()

    } else {
        limpiarCaja()
        actuliazarParrafo(arreglo)
    }
}


function copiarDos() {
    let copyTxt = document.querySelector("#txt_encriptado").textContent    
    // Crea un campo de texto temporal
    let temporal = document.createElement("textarea")
    // obtiene el texto del párrafo
    temporal.value = copyTxt
    // Añade el campo temporal al cuerpo del documento
    document.body.appendChild(temporal)
    // Selecciona el texto del campo temporal
    temporal.select();
    // Copia el texto al portapapeles
    document.execCommand("copy");
    // Elimina el campo temporal
    document.body.removeChild(temporal)
}



function actuliazarParrafo(arreglo) {
    document.querySelector('#txt_encriptado').textContent = arreglo
}



function limpiarCaja() {
    document.querySelector('#txt_encriptar').value = ''
}



function ocultarImagenes() {
    document.getElementById("imagen_1").style.display = "none";
    document.getElementById("imagen_2").style.display = "none";
}


function mostrarElementos() {
    document.getElementById("copiar").removeAttribute("hidden")
    document.getElementById("txt_encriptado").removeAttribute("hidden")
}



  