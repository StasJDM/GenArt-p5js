import P5 from 'p5';
import { PIXEL_SIZE, WIDTH, HEIGHT } from './consts';

export default class MyCircle {
  private _p5: P5;

  constructor(p5: P5) {
    this._p5 = p5;
  }

  draw() {
    this.renderBackground();
  }

  renderBackground() {
    for (let i = 0; i < WIDTH; i += PIXEL_SIZE) {
      for (let j = 0; j < HEIGHT; j += PIXEL_SIZE) {
        this.fillRandomColorByRangeRGB(84, 139, 183, 15);
        this._p5.rect(i, j, PIXEL_SIZE, PIXEL_SIZE);
      }
    }
  }

  randomColorFromRange(color: number, range: number) {
    const newColor = color + range * 2 * (Math.random() - 0.5);

    if (newColor > 255) return 255;
    if (newColor < 0) return 0;
    return newColor;
  }

  fillRandomColorByRangeRGB(r: number, g: number, b: number, range: number) {
    this._p5.fill(
      this.randomColorFromRange(r, range),
      this.randomColorFromRange(g, range),
      this.randomColorFromRange(b, range)
    );
  }
}
