document.getElementById('gruposSelecionado').addEventListener('click', function() {
    const selecao1 = document.getElementById('selecao1');
    const selecao2 = document.getElementById('selecao2');
    
    const grupo1 = selecao1.options[selecao1.selectedIndex].text;
    const grupo2 = selecao2.options[selecao2.selectedIndex].text;
    
    if (grupo1 === grupo2) {
        alert("[ERRO] O mesmo grupo foi selecionado, verefique os grupos selecionados novamente.");
    } else {
        document.body.innerHTML = "";
        alert(`Os grupos selecionados foram: ${grupo1} e ${grupo2}`);

        const imagem = document.createElement('img');
        imagem.src = '../img/fundo.png';
        imagem.id = 'imagem'
        document.body.appendChild(imagem);
    };
});
