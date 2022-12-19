let texto_original = document.getElementById('texto');
let texto_resultado = document.getElementById('resultado');
let copiar = document.querySelector('span');

function resetCopiar (){
    copiar.textContent = 'Copiar';
}

function doConvert() {
    let message = texto_original.value
        .replaceAll(/e/gi, "enter")
        .replaceAll(/i/gi, "imes")
        .replaceAll(/a/gi, "ai")
        .replaceAll(/o/gi, "ober")
        .replaceAll(/u/gi, "ufat");
    texto_resultado.textContent = message;
    resetCopiar();
    message.length >= 1 ? texto_resultado.classList.add('active') : texto_resultado.classList.remove('active');
}
function undoConvert() {
    let message = texto_original.value
        .replaceAll('enter', "e")
        .replaceAll('imes', "i")
        .replaceAll('ai', "a")
        .replaceAll('ober', "o")
        .replaceAll('ufat', "u");
    texto_resultado.textContent = message;
    resetCopiar();
    message.length >= 1 ? texto_resultado.classList.add('active') : texto_resultado.classList.remove('active');
}

function copiarTexto() {
    navigator.clipboard.writeText(texto_resultado.value);
    copiar.textContent = 'Copiado!'
}