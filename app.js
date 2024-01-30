

function encrypt(){
    let texto = document.querySelector('textarea').value.toLocaleLowerCase();
    
    if (texto){
        texto = texto.replace('e','enter');
        texto = texto.replace('i','imes');
        texto = texto.replace('a','ai');
        texto = texto.replace('o','ober');
        texto = texto.replace('u','ufat');

        document.querySelector('textarea').value = '';
        document.getElementById('result__img').setAttribute('hidden','');
        document.getElementById('result__h2').setAttribute('hidden','');
        document.getElementById('result__p').innerHTML = texto;
        
    }
}