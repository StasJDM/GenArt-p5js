import P5 from 'p5';
import { ROWS, COLUMNS } from '../consts';
import { Matrix } from '../models/matrix.model';
import { ColorUtils } from '../utils/color.utils';
import { MatrixRenderer } from '../services/matrix-renderer.service';

export default class MyCircle {
  private _p5: P5;
  private _matrixRenderer: MatrixRenderer;

  constructor(p5: P5) {
    this._p5 = p5;
    this._matrixRenderer = new MatrixRenderer(this._p5);
  }

  draw() {
    const backgroundMatrix = new Matrix(COLUMNS, ROWS);
    const baseColor = ColorUtils.randomColor();
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLUMNS; x++) {
        backgroundMatrix.setPoint(x, y, ColorUtils.randomColorFromRange(baseColor, 30));
      }
    }
    this._matrixRenderer.draw(backgroundMatrix);
  }
}
