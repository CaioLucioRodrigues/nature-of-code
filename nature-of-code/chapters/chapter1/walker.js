import { width, height, stroke, point } from '../../src/framework/processing.js';

export class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    display() {
        stroke(0, 0, 0);
        point(this.x, this.y);
    }

    step() {
        const choice = Math.floor(Math.random() * 4);
        if (choice === 0) this.x += 1; // move right
        else if (choice === 1) this.x -= 1; // move left
        else if (choice === 2) this.y += 1; // move down
        else if (choice === 3) this.y -= 1; // move up
    }
}