//Javascript Replace(): conheça esse método e aprenda como usar! https://blog.betrybe.com/javascript/javascript-replace/

// Campos de textos
var txt = document.querySelector('#texto-entrada');
var res = document.querySelector('#texto-saida');

// Botões
var bt_code = document.querySelector('#bt_code')
var bt_decode = document.querySelector('#bt_decode')
var bt_copiar = document.querySelector('#bt_copy');
var bt_reset = document.querySelector('#bt_reset')

// "Chaves" da criptografia
var chave = ['e','i','a','o','u'];
var saida = ['enter', 'imes', 'ai', 'ober', 'ufat'];

//Funções
function encode(texto) {
    var encoded = texto
        .replace(/a/gi, 'ai')
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
   

    return encoded
}
function enc() {
    res.value = encode(txt.value)
}


function decode(texto) {
    var decoded = texto

    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/enter/gi, 'e')
    
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');    

    return decoded
}
function dec() {
    res.value = decode(txt.value)
}

function reset () {
    res.value = ''
    txt.value = ''
}

function copiarTexto() {
    navigator.clipboard.writeText(res.value);
    res.value = 'Copiado! "' + res.value + '".';
}

// Lincando ações aos respectivos botões
bt_code.addEventListener('click', enc)
bt_decode.addEventListener('click', dec)
bt_copiar.addEventListener('click', copiarTexto)
bt_reset.addEventListener('click', reset)



   /////// Miscelineos \\\\\
    // Submit com enter  \\
txt.onkeydown = function (e) {
    if (e.keyCode == 13) {
        enc(txt.value)
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