//Javascript Replace(): conheça esse método e aprenda como usar! https://blog.betrybe.com/javascript/javascript-replace/

const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".mensagem")

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar () {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}


function desencriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncriptada;
}

function btnCopiar() {
    if (mensagem.value == '') {
        mensagem.placeholder = 'Nenhuma mensagem encontrada'
    } else {
        navigator.clipboard.writeText(mensagem.value);
        mensagem.value = ''
        mensagem.placeholder = 'Mensagem copiada com sucesso!'
    }
}


/////// Miscelineos \\\\\
// Submit com enter  \\
inputTexto.onkeydown = function (e) {
    if (e.keyCode == 13) {
        btnEncriptar()
    }
}



    //////////////////////////////////////////
    ///////////// T E S T E S ////////////////
    //////////////////////////////////////////

bt_teste_encod = document.querySelector("#bt_teste_encod")
bt_teste_decod = document.querySelector("#bt_teste_decod")

bt_teste_encod.addEventListener('click', teste_e)
bt_teste_decod.addEventListener('click', teste_d)

function teste_e () {
    teste = "a e i o u"
    txt.value = teste
    res.value = encode(teste)
}

function teste_d () {
    teste = "aimes enter imes ober ufat"
    txt.value = teste
    res.value = decode(teste)
}
