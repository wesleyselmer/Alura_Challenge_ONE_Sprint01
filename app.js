function limparTexto(){
    document.querySelector('textarea').value = '';
};

function criptografar(){
    let textoASerCriptografado = document.querySelector('textarea').value.toLowerCase();
    if (textoASerCriptografado){
        textoASerCriptografado = textoASerCriptografado.replaceceAll('e', 'enter');
        alert(textoASerCriptografado)
        textoASerCriptografado = textoASerCriptografado.replaceAll('i', 'imes');
        textoASerCriptografado = textoASerCriptografado.replaceAll('a', 'ai');
        textoASerCriptografado = textoASerCriptografado.replaceAll('o', 'ober');
        textoASerCriptografado = textoASerCriptografado.replaceAll('u', 'ufat');
        escreverResultado(textoASerCriptografado);
        document.getElementById("btn_copiar").removeAttribute('hidden');
        //document.getElementsByClassName("result__h2")[0].setAttribute("style","height: 30rem");
        limparTexto();
    }
}

function descriptografar(){
    let textoASerDescriptografado = document.querySelector('textarea').value.toLowerCase();
    if (textoASerDescriptografado){
        textoASerDescriptografado = textoASerDescriptografado.replaceAll('enter', 'e');
        textoASerDescriptografado = textoASerDescriptografado.replaceAll('imes', 'i');
        textoASerDescriptografado = textoASerDescriptografado.replaceAll('ai', 'a');
        textoASerDescriptografado = textoASerDescriptografado.replaceAll('ober', 'o');
        textoASerDescriptografado = textoASerDescriptografado.replaceAll('ufat', 'u');
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