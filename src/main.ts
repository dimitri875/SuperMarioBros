/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById('screen') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

canvas.width = 800;
canvas.height = 600;

// Basic game loop
function update() {
  // Game logic would go here
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'lime';
  ctx.font = '24px Arial';
  ctx.fillText('Hello, TypeScript Game!', 250, 300);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// Start the loop
loop();
