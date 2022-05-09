const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".mensagem")

// Inoperante
// const instrucoes = document.querySelector(".instrucoes")

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    if (inputTexto.value == '') {
        inputTexto.placeholder = 'Este campo é obrigatório'
        if (mensagem.placeholder.length != 0) {
            resetMensagem()
        }
    } else {
        inputTexto.placeholder = 'Digite seu texto'
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage="none"
    }
}

function encriptar(stringEncriptada) {
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
    if (inputTexto.value == '') {
        inputTexto.placeholder = 'Este campo é obrigatório'
        if (mensagem.placeholder.length != 0) {
            resetMensagem()
        }
    } else {
        inputTexto.value = ''
        inputTexto.placeholder = 'Digite seu texto.'        
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage="none"
        // window.alert("Sucesso!!!")
    }
}

function desencriptar(stringEncriptada) {
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
        inputTexto.placeholder = 'Digite um texto que você deseja criptografar ou descriptografar'
        mensagem.style.backgroundImage="none"

    }  else {

        navigator.clipboard.writeText(mensagem.value);
        mensagem.value = ''
        mensagem.placeholder = 'Mensagem copiada com sucesso!'
        inputTexto.placeholder = 'Digite seu texto'        
    }
}

bt_colar = document.querySelector(".copiar")
function btnColar() {    
    if (inputTexto.value.placeholder == 'Digite seu texto') {
        bt_colar = window.addEventListener("click", mudaParaVermelho())

    } else {
        navigator.clipboard.writeText(inputTexto.value);
        mensagem.value = ''.blur
        mensagem.placeholder = 'Mensagem copiada com sucesso!'
        limpar()
    }
}

function resetMensagem () {
    mensagem.style.backgroundImage='url("/imagens/resultado.png")'
    mensagem.placeholder = ''
    // dica1.di = 'Nenhuma mensagem encontrada'
    // dica2.value = 'Digite um texto que você deseja criptografar ou descriptografar.'
}

function limpar () {
     instrucoes.style.display = "none";
 }


/////// Miscelineos \\\\\
// Submit com enter  \\
inputTexto.onkeydown = function (e) {
    if (e.keyCode == 13) {
        btnEncriptar()
    }
}

////////// trocar a cor dos botoes

function mudaParaVermelho(item) {
    item.style.color = red;
    item.style.textShadow = "0 0 60px red";
}

