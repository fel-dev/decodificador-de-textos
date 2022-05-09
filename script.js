////////////////////////////////////
// Capurando os elementos do HTML //
////////////////////////////////////
const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".mensagem")

// Segredo da criptografia
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];



////////////////////////////////////////////////////////
// Capturar o texto escrito no campo de input do HTML //
////////////////////////////////////////////////////////
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

//////////////////////////////////////////
// Desenvolver a lógica da criptografia //
//////////////////////////////////////////
function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }        
    }
    // Retornar na tela o resultado do texto criptografado
    return stringEncriptada;
}



////////////////////////////////////////////////////////
// Capturar o texto escrito no campo de input do HTML //
////////////////////////////////////////////////////////
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

/////////////////////////////////////////////
// Desenvolver a lógica da descriptografia //
/////////////////////////////////////////////
function desencriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    // Retorna na tela o resultado do texto descriptografado
    return stringEncriptada;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// **Extras:**                                                                                                    //
//- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a ////mesma funcionalidade do `ctrl+C` ou da opção "copiar" do menu dos aplicativos.                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



    /////////////////////////////////////////////////
    // Botão que cola direto no input (inoperante) //
    /////////////////////////////////////////////////
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

    //////////////////////////////////////////////
    // Restaura o campo do resultado (mensagem) //
    //////////////////////////////////////////////
function resetMensagem () {
    mensagem.style.backgroundImage='url("/imagens/resultado.png")'
    mensagem.placeholder = ''
    // dica1.di = 'Nenhuma mensagem encontrada'
    // dica2.value = 'Digite um texto que você deseja criptografar ou descriptografar.'
}

function limpar () {
     instrucoes.style.display = "none";
}




    ////////////////////////////////////
    // Verificar caracteres especiais //
    ////////////////////////////////////
    // NOTA: Não deu tempo de consertar o bug que deixa colar caracteres especias no textarea
function checar_carater(e) {
    const carater = String.fromCharCode(e.keyCode)
    const carater_aceitaveis = '[a-z,A-Z,0-9]'

    if ((carater.match(carater_aceitaveis) || (e.keyCode == 13) || (e.keyCode == 32))) {  // Com exceção da tecla da keyCode 13 (tecla Enter) e tecla espaço 32
        return true
    } else {
        return false
    }
}
// Mandar aviso ao usuário caso o mesmo utilize letras inaceitáveis
inputTexto.addEventListener("keypress",
function(e){
    if(!checar_carater(e)){    
        e.preventDefault()
        window.alert("Requisitos: Não devem ser utilizados letras com acentos nem caracteres especiais")        
    }
});



//---------------------------------------------////---------------------------------------------//

/////// Miscelineos \\\\\
// Submit com enter  \\
inputTexto.onkeydown = function (e) {
    if (e.keyCode == 13) {
        btnEncriptar()
    }
}

//////////////////////////////////////////
// Trocar a cor dos botoes (inoperante) //
//////////////////////////////////////////
function mudaParaVermelho(item) {
    item.style.color = red;
    item.style.textShadow = "0 0 60px red";
}
