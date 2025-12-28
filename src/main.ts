/**
 * @type {HTMLCanvasElement}
 */

import { loadLevel, loadSpriteSheet} from "./utils.js";

// Canvas Setup
const canvas = document.getElementById('screen') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

canvas.width = 800;
canvas.height = 500;

// Game Constants
const tile_size: number = 50;
const num_rows: number = Math.floor(canvas.height / tile_size);
const num_cols: number = Math.floor(canvas.width / tile_size);
const spriteSheet = await loadSpriteSheet("sprites/SpriteSheet.png");

// Game Variables

// Setting up game tile map
const game_map: number[][] = await loadLevel('levels/testLevel.csv');

function draw_map() {
  for (let i: number = 0; i < num_rows; i++) {
    for (let j: number = 0; j < num_cols; j++) {
      const tile_id = game_map[i]![j]!;

      const xo = tile_id % 10;
      const yo = Math.floor(tile_id / 10);

      const sx = xo * tile_size;
      const sy = yo * tile_size;
      const sw = tile_size;
      const sh = tile_size;
      const dx = j * tile_size;
      const dy = i * tile_size;
      const dw = tile_size;
      const dh = tile_size;

      ctx.drawImage(spriteSheet, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

// Game loop
function update() {
  // Game logic would go here
}

function draw() {
  draw_map();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

// Start the loop
loop();

export {};