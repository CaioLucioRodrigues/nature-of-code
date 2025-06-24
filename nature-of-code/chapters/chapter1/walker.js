import { width, height, stroke, point } from '../../src/framework/processing.js';

export class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.stepSize = 1; 
    }

    display() {
        stroke(0, 0, 0);
        point(this.x, this.y);
    }

    step() {
        this.stepSize = 2;

        const stepx = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const stepy = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1

        this.x += stepx * this.stepSize;
        this.y += stepy * this.stepSize;

        if (this.x < 0) {
            this.x = 0;
        }

        if (this.x >= width) {
            this.x = width - 1;
        }

        if (this.y < 0) {
            this.y = 0;
        }

        if (this.y >= height) {
            this.y = height - 1;
        }
    }
}