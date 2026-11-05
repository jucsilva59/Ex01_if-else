
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {

  background(12, 12, 25);

   let espacamento = 65;

  for (let x = espacamento / 2; x < width; x += espacamento) {
    for (let y = espacamento / 2; y < height; y += espacamento) {

       
      let distancia = dist(mouseX, mouseY, x, y);

       // Movimento dos elementos
      let movimentoX = sin(frameCount * 0.04 + y * 0.03) * 8;
      let movimentoY = cos(frameCount * 0.04 + x * 0.03) * 8;

      
      if (mouseIsPressed) {

        fill(0, 170, 255);
        circle(x + movimentoX, y + movimentoY, 25);

      }

     
      else if (distancia < 160) {

        fill(100, 255, 80);

        let tamanho = map(distancia, 0, 160, 38, 10);

        circle(x + movimentoX, y + movimentoY, tamanho);

      }

      else {

        fill(135, 75, 255);
        rect(x + movimentoX, y + movimentoY, 13, 13);

      }

    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}