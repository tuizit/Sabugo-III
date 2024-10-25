//variáveis da bolinha
let xBolinha = 100;// criando a variavel "xbolinha" que é igual a 100
let yBolinha = 200;// criando a variavel "ybolinha" que é igual a 200
let diametro = 20;// criando a variavel "diametro" que é igual a 20
let raio = diametro / 2;// criando a variavel "raio" que é igual ao diametro dividido por 2

//variáveis do oponente
let xRaqueteOponente = 585;// criando a variavel "XraqueteOponente" que é igual a 585
let yRaqueteOponente = 150;// criando a variavel "YraqueteOponente" que é igual a 150

//velocidade da bolinha
let velocidadeXBolinha = 6;// criando a variavel "velocidadeXbolinha" que é igual a 6
let velocidadeYBolinha = 6;// criando a variavel "velocidadeYbolinha" que é igual a 6

//variáveis da raquete
let xRaquete = 5;// criando  variavel "Xraquete" que é igual a 5
let yRaquete = 150;// criando a variavel "Yraquete" que é igual a 150
let raqueteComprimento = 10;// criando a variavel "raqueteComprimento" que é igual a 10
let raqueteAltura = 90;// criando a variavel "raqueteAltura" que é igual a 90

//placar do jogo
let meusPontos = 0;// criando a variavel "meusPontos" que é igual a 0
let pontosDoOponente = 0;// criando a variavel "pontosDoOponente" que é igual a 0


//sons do jogo
let raquetada;// criando a variavel "raquetada"
let ponto;// criando a variavel "ponto"
let trilha;// criando a variavel "trilha"

let colidiu = false;

function setup() {// função "setup"
  createCanvas(600, 400);// definindo tamanho do cenário
    trilha.loop();// fazer uma repetição infinita
}

function draw() {// função "draw"
    background(0);// fundo dp cenário
    mostraBolinha();// mostrar a bolinha 
    movimentaBolinha();// movimentação da bolinha
    verificaColisaoBorda();// verificação da colisão da bolinha
    mostraRaquete(xRaquete, yRaquete);// mostrar a raquete nas laterais e em cima e em baixo
    movimentaMinhaRaquete();// movimentação da minha raquete
    verificaColisaoRaquete(xRaquete, yRaquete);// verificação da colisao da raquete nas laterais e em cima e em baixo
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);// veriicação da colisao da raquete do oponente nas laterais e em cima e em baixo
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);// mostrar a raquete do oponente nas laterais e em cima e em baixo
    movimentaRaqueteOponente();// movimentação da raquete do oponente
    incluiPlacar() // incluir o placar 
    marcaPonto();// marcação dos pontos
}
function mostraBolinha() {// função da bolinha do jogo
  circle(xBolinha, yBolinha, diametro);// tamanho da bolinha
}

function movimentaBolinha() {// função do movimento da bolinha 
  xBolinha += velocidadeXBolinha;// fazendo a bolinha se movimentar nas laterais
  yBolinha += velocidadeYBolinha;// fazendo a bolinha se movimentar para cima e para baixo
}

function verificaColisaoBorda() {// função "verificaçãoColisaoBorda"
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;// se a bolinha tocar nas bordas laterais vai "rebater" e continuar se movimentando
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;// se a bolinha tocar em cima ou em baixo vai "rebater" e continuar se movimentando 
  }
}

function mostraRaquete(x,y) {// função de mostrar a raquete
    rect(x, y, raqueteComprimento, raqueteAltura);//comprimento e altura da raquete
}

function movimentaMinhaRaquete() {// função de movimentar a minha raquete
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;// se a "seta pra cima" for pressionada a raquete se move pra cima
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;// se a "seta para baixo" for presionada a raquete se move para baixo
  }
}

function verificaColisaoRaquete() {// função de verificar a colisao da raquete
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;//se a bolinha colidir com a raquete, ela "rebate"
     raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;// se a bolinha colidir com as laterais ela rebate
        raquetada.play();
  }
}

function movimentaRaqueteOponente(){// função de movimentar a raquete do oponente
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;// se a "seta pra cima" for pressionada a raquete se move pra cima
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;// se a "seta para baixo" for presionada a raquete se move para baixo
    }
}


function incluiPlacar(){// função dos placares
  stroke(255)
    textAlign(CENTER);// alinhar os placares no centro
    textSize(16);// tamanho das bordas dos placares 
    fill(color(255,140, 0));// preencher esse local com uma cor
    rect(150, 10, 40, 20);// local das bordas dos placares
    fill(255);// preencher esse local
    text(meusPontos, 170, 26);// posição dos meus pontos
    fill(color(255,140, 0));// preencher esse local com uma cor
    rect(450, 10, 40, 20);// local das bordas dos placares
    fill(255);// preencher esse local
    text(pontosDoOponente, 470, 26);// posição dos pontos do oponente



}


function marcaPonto() {// função de macar pontos
    if (xBolinha > 590) {
        meusPontos += 1;// se a bolinha tocar em 590, marcar +1
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;// se a bolinha tocar em 10, marcar +1 para meu oponente
        ponto.play();
    }
}


function preload(){// função dos sons
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

