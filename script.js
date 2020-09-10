let canvas = document.getElementById("snake");
// rendeniza o desenho dentro do canvas
let context = canvas.getContext("2d");
let box = 32;

// criar background
function criarBG(){
    context.fillStyle = "lightgreen";
    // desenha o retangulo onde acontece o jogo, quatro parametros posição de x, y altura e largura, 16 quadradinhos
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();