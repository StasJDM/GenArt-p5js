import { Color } from './color.model';

export type Matrix2d = (Color | null)[][];

export class Matrix {
  public width: number;
  public height: number;
  private _matrix: Matrix2d;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this._matrix = [...Array(height)].map((_) => Array(width).fill(null));
  }

  public get value(): Matrix2d {
    return this._matrix;
  }

  public setPoint(x: number, y: number, color: Color): void {
    this._matrix[y][x] = color;
  }

  public getPoint(x: number, y: number): Color {
    return this._matrix[y][x];
  }
}
