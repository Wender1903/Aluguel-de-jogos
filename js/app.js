function alterarStatus(numeracao) {
    let game = document.getElementById(`game-${numeracao}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nomeJogo = game.querySelector('.dashboard__item__name');

    if(botao.classList.contains("dashboard__item__button--return")) {
        if(confirm(`Tem certeza qie deseja devolver o jogo: ${nomeJogo.textContent}?`)) {

            imagem.classList.remove("dashboard__item__img--rented") ;
            nomeJogo.classList.remove("dashboard__item__name--rented")
            botao.classList.remove("dashboard__item__button--return");
            botao.innerHTML = "Alugar";
        }

    } else {
        nomeJogo.classList.add("dashboard__item__name--rented");
        imagem.classList.add("dashboard__item__img--rented") ;
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = 'Devolver';

    }
   

 
}
