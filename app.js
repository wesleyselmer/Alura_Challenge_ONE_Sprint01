function limparTexto(){
    document.querySelector('textarea').value = '';
};

function criptografar(){
    let textoASerCriptografado = document.querySelector('textarea').value.toLowerCase();
    if (textoASerCriptografado){
        textoASerCriptografado = textoASerCriptografado.replace('e', 'enter');
        textoASerCriptografado = textoASerCriptografado.replace('i', 'imes');
        textoASerCriptografado = textoASerCriptografado.replace('a', 'ai');
        textoASerCriptografado = textoASerCriptografado.replace('o', 'ober');
        textoASerCriptografado = textoASerCriptografado.replace('u', 'ufat');
        escreverResultado(textoASerCriptografado);
        document.getElementById("btn_copiar").removeAttribute('hidden');
        limparTexto();
    }
}

function descriptografar(){
    let textoASerDescriptografado = document.querySelector('textarea').value.toLowerCase();
    if (textoASerDescriptografado){
        textoASerDescriptografado = textoASerDescriptografado.replace('enter', 'e');
        textoASerDescriptografado = textoASerDescriptografado.replace('imes', 'i');
        textoASerDescriptografado = textoASerDescriptografado.replace('ai', 'a');
        textoASerDescriptografado = textoASerDescriptografado.replace('ober', 'o');
        textoASerDescriptografado = textoASerDescriptografado.replace('ufat', 'u');
        escreverResultado(textoASerDescriptografado);
        document.getElementById("btn_copiar").removeAttribute('hidden');
        limparTexto();
    }
}
function escreverResultado(texto){
    document.getElementById("result__img").setAttribute('hidden','');
    document.getElementById('result__p').setAttribute('hidden','');
    document.getElementById('result__h2').innerHTML = texto;
}

function copiar(){
    let textoCopia = document.getElementById('result__h2').innerText;
    if(textoCopia) {
        navigator.clipboard.writeText(textoCopia)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
            // Adicionando um pequeno atraso antes de chamar exibirResultado
            setTimeout(() => {
                exibirResultado('');
            }, 100);
            document.getElementById('result__h2').innerText = 'Nenhuma mensagem encontrada';
            document.getElementById('result__p').removeAttribute('hidden');
            document.getElementById('result__img').removeAttribute('hidden');
            document.getElementById('btn_cpoiar').setAttribute('hidden','');
        })
    }
}