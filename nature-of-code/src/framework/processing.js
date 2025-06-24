export let width = 800;
export let height = 600;

let ctx, canvas;
export let frameCount = 0;

export function createCanvas(w, h) {
  width = w; height = h;
  canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
}

export function background(r, g, b) {
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(0, 0, width, height);
}

export function stroke(r, g, b) {
  ctx.strokeStyle = `rgb(${r},${g},${b})`;
}

export function point(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 1, 0, 2 * Math.PI);
  ctx.fill();
}

export function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

export function loop(draw) {
  function drawFrame() {
    frameCount++;
    draw();
    requestAnimationFrame(drawFrame);
  }
  requestAnimationFrame(drawFrame);
}