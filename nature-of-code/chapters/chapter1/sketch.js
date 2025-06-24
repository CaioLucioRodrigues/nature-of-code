import { createCanvas, background, stroke, point, width, height, loop } from '../../src/framework/processing.js';

export function setup() {
  createCanvas(800, 600);
  stroke(0, 0, 0);
}

let lastDraw = 0;

export function draw() {
  const now = Date.now();
  if (now - lastDraw < 1000) return; // só executa a cada 1000ms (1s)
  lastDraw = now;
  
  background(255, 255, 255);
  for (let i = 0; i < 100; i++) {
    point(Math.random() * width, Math.random() * height);
  }
}