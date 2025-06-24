import { createCanvas, background, stroke, point, width, height, loop } from '../../src/framework/processing.js';
import { Walker } from './walker.js';

var walker;

export function setup() {
  createCanvas(300, 300);
  walker = new Walker();  
  background(255, 255, 255);
}

export function draw() {  
  walker.step();
  walker.display();
}