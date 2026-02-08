//BOTÃO HAMBURGUER

{
    const btnAbrir = document.querySelector('.btn-hamburger');
    const btnFechar = document.querySelector('.btn-fechar');
    const menu = document.querySelector('.menu-mobile');
    const overlay = document.querySelector('.overlay');

    btnAbrir.addEventListener('click', () => {
        menu.classList.add('ativo');
        overlay.classList.add('ativo');
    });

    btnFechar.addEventListener('click', () => {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
    });
}