function limparTexto(){
    document.querySelector('input').value = '';
};

function criptografar(){
    let textoASerCriptografado = document.querySelector('input').value.toLowerCase();
    if (textoASerCriptografado){
        textoASerCriptografado = textoASerCriptografado.replace('e', 'enter');
        textoASerCriptografado = textoASerCriptografado.replace('i', 'imes');
        textoASerCriptografado = textoASerCriptografado.replace('a', 'ai');
        textoASerCriptografado = textoASerCriptografado.replace('o', 'ober');
        textoASerCriptografado = textoASerCriptografado.replace('u', 'ufat');
        escreverResultado(textoASerCriptografado);
    }
}

function criptografar(){
    let textoASerDescriptografado = document.querySelector('input').value.toLowerCase();
    if (textoASerDescriptografado){
        textoASerDescriptografado = textoASerDescriptografado.replace('enter', 'e');
        textoASerDescriptografado = textoASerDescriptografado.replace('imes', 'i');
        textoASerDescriptografado = textoASerDescriptografado.replace('ai', 'a');
        textoASerDescriptografado = textoASerDescriptografado.replace('ober', 'o');
        textoASerDescriptografado = textoASerDescriptografado.replace('ufat', 'u');
        escreverResultado(textoASerDescriptografado);
    }
}
function escreverResultado(texto){
    document.getElementById("result__image").setAttribute('hidden','');
    document.getElementById('result__message').setAttribute('hidden','');
    document.getElementById('result__message_title').innerHTML = texto;
}