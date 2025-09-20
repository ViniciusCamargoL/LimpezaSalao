document.getElementById('gruposSelecionado').addEventListener('click', function() {
    const selecao1 = document.getElementById('selecao1');
    const selecao2 = document.getElementById('selecao2');
    
    const grupo1 = selecao1.options[selecao1.selectedIndex].text;
    const grupo2 = selecao2.options[selecao2.selectedIndex].text;
    
    if (grupo1 === grupo2) {
        alert("[ERRO] O mesmo grupo foi selecionado, verifique os grupos selecionados novamente.");
    } else {
        // Limpa o conteúdo da página
        document.body.innerHTML = "";
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.overflow = 'hidden';

        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = '100vw';
        container.style.height = '100vh';
        document.body.appendChild(container);

        const imagem = document.createElement('img');
        imagem.src = './img/fundo.png';
        imagem.id = 'imagem';
        imagem.style.position = 'absolute';
        imagem.style.top = '0';
        imagem.style.left = '0';
        imagem.style.width = '100vw';
        imagem.style.height = '100vh';
        imagem.style.objectFit = 'cover';
        container.appendChild(imagem);

        const mostrarGrupoUm = document.createElement('h2');
        const mostrarGrupoDois = document.createElement('h2');

        mostrarGrupoUm.textContent = grupo1;
        mostrarGrupoDois.textContent = grupo2;

        mostrarGrupoUm.style.position = 'absolute';
        mostrarGrupoUm.style.top = '380px';
        mostrarGrupoUm.style.left = '40px';
        mostrarGrupoUm.style.color = 'black';
        mostrarGrupoUm.style.fontSize = '70px';
        mostrarGrupoUm.style.textShadow = '1px 1px 2px black';

        mostrarGrupoDois.style.position = 'absolute';
        mostrarGrupoDois.style.top = '450px';
        mostrarGrupoDois.style.left = '40px';
        mostrarGrupoDois.style.color = 'black';
        mostrarGrupoDois.style.fontSize = '70px';
        mostrarGrupoDois.style.textShadow = '1px 1px 2px black';

        container.appendChild(mostrarGrupoUm);
        container.appendChild(mostrarGrupoDois);
    }
});
