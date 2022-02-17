import { Color } from '../models/color.model';

export class ColorUtils {
  public static randomColorFromRange(color: Color, range: number): Color {
    const newColor = {
      r: this._generateRandomColorFromRange(color.r, range),
      g: this._generateRandomColorFromRange(color.g, range),
      b: this._generateRandomColorFromRange(color.b, range),
    };

    return newColor;
  }

  private static _generateRandomColorFromRange(color: number, range: number): number {
    const newColor = color + range * 2 * (Math.random() - 0.5);

    if (newColor > 255) return 255;
    if (newColor < 0) return 0;
    return newColor;
  }
}
