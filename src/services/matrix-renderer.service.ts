import P5 from 'p5';
import { PIXEL_SIZE } from '../consts';
import { Matrix } from '../models/matrix.model';

export class MatrixRenderer {
  private _p5: P5;

  constructor(p5: P5) {
    this._p5 = p5;
  }

  public draw(matrix: Matrix, pixelSize = PIXEL_SIZE): void {
    for (let y = 0; y < matrix.height; y++) {
      for (let x = 0; x < matrix.width; x++) {
        const cell = matrix.getPoint(x, y);

        if (cell) {
          this._p5.fill(cell.r, cell.g, cell.b);
          this._p5.rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  }
}
