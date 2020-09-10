let canvas = document.getElementById("snake");
// rendeniza o desenho dentro do canvas
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "rigth";


// criar background
function criarBG(){
    context.fillStyle = "lightgreen";
    // desenha o retangulo onde acontece o jogo, quatro parametros posição de x, y altura e largura, 16 quadradinhos
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();
    // criar a posição da cobrinha para o ponto de partida
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    // criar as coordenadas da cobrinha por onde ela vai seguir
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);