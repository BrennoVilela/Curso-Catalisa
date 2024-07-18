const imagem = document.querySelector('#imagem');
const imagem2 = document.querySelector('#imagem2');
const imagem3 = document.querySelector('#imagem3');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especieDoPersonagem = document.querySelector('#especie');
const especieDoPersonagem2 = document.querySelector('#especie2');
const especieDoPersonagem3 = document.querySelector('#especie3');
const condicao = document.querySelector('#status');
const condicao2 = document.querySelector('#status2');
const condicao3 = document.querySelector('#status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem2.src = data.image;
        imagem3.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especieDoPersonagem.innerHTML = data.species;
        especieDoPersonagem2.innerHTML = data.species;
        especieDoPersonagem3.innerHTML = data.species;
        condicao.innerHTML = data.status;
        condicao2.innerHTML = data.status;
        condicao3.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem;