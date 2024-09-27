let tileSize = 80; // Tamanho de cada quadrado do tabuleiro
let cols = 8; // Número de colunas
let rows = 8; // Número de linhas
let selectedPiece = null; // Peça selecionada pelo jogador

function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
}

function draw() {
  background(255);
       
  // Desenha o tabuleiro
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
     
 
      if ((x + y) % 2 === 0) {
        fill(255); // Quadrados brancos
      } else {
        fill(0); // Quadrados pretos
      }
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }
  
  // Desenha as peças
  drawPiece(0, 0, "torre", "preto");
  drawPiece(1, 0, "cavalo", "preto");
  drawPiece(2, 0, "bispo", "preto");
  drawPiece(3, 0, "rainha", "preto");
  drawPiece(4, 0, "rei", "preto");
  drawPiece(5, 0, "bispo", "preto"reto");
28
  drawPiece(1, 0, "cavalo", "preto");
29
  drawPiece(2, 0, "bispo", "preto");
30
  drawPiece(3, 0, "rainha", "preto");
31
  drawPiece(4, 0, "rei", "preto");
32
  drawPiece(5, 0, "bispo", "preto");
33
  drawPiece(6, 0, "cavalo", "preto);
  drawPiece(6, 0, "cavalo", "preto");
  drawPiece(7, 0, "torre", "preto");
  for (let i = 0; i < cols; i++) {
    drawPiece(i, 1, "peao", "preto");
  }
}

function drawPiece(x, y, type, color) {
  let pieceImage;
  switch (type) {
    case "peao":
      pieceImage = color === "branco" ? "♙" : "♟";
      break;
    case "torre":
      pieceImage = color === "branco" ? "♖" : "♜";
      break;
    case "cavalo":
      pieceImage = color === "branco" ? "♘" : "♞";
      break;
    case "bispo":
      pieceImage = color === "branco" ? "♗" : "♝";
      break;reto");
28
  drawPiece(1, 0, "cavalo", "preto");
29
  drawPiece(2, 0, "bispo", "preto");
30
  drawPiece(3, 0, "rainha", "preto");
31
  drawPiece(4, 0, "rei", "preto");
32
  drawPiece(5, 0, "bispo", "preto");
33
  drawPiece(6, 0, "cavalo", "pretreto");
28
  drawPiece(1, 0, "cavalo", "preto");
29
  drawPiece(2, 0, "bispo", "preto");
30
  drawPiece(3, 0, "rainha", "preto");
31
  drawPiece(4, 0, "rei", "preto");
32
  drawPiece(5, 0, "bispo", "preto");
33
  drawPiece(6, 0, "cavalo", "pretreto");
28
  drawPiece(1, 0, "cavalo", "preto");
29
  drawPiece(2, 0, "bispo", "preto");
30
  drawPiece(3, 0, "rainha", "preto");
31
  drawPiece(4, 0, "rei", "preto");
32
  drawPiece(5, 0, "bispo", "preto");
33
  drawPiece(6, 0, "cavalo", "pretoo
    case "rainha":
      pieceImage = color === "branco" ? "♕" : "♛";
      break;
    case "rei":
      pieceImage = color === "branco" ? "♔" : "♚";
      break;
  }
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(color === "branco" ? 255 : 0);
  text(pieceImage, x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
  
  // Desenha uma borda azul ao redor da peça selecionada
  if (selectedPiece && selectedPiece.x === x && selectedPiece.y === y) {
    noFill();
    stroke(0, 0, 255);
    strokeWeight(4);
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
  }
}

function mouseClicked() {
  let x = floor(mouseX / tileSize);
  let y = floor(mouseY / tileSize);
  
  // Se uma peça já estiver selecionada, tenta mover a peça para a nova posição
  if (selectedPiece) {
    // Lógica para mover a peça para a nova posição (a ser implementada)
    
    // Limpa a peça selecionada
    selectedPiece = null;
  } else {
    // Se não houver peça selecionada, verifica se há uma peça na posição clicada
    // (a lógica para verificar se há uma peça na posição clicada será implementada posteriormente)
    
    // Simula a seleção de uma peça
    selectedPiece = { x: x, y: y };
  }
}
