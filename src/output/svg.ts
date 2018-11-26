import { Sprite } from '../interfaces/sprite.interface';
import { Pixel } from '../interfaces/pixel.type';
import { PixelFunction, PixelFunctionOutput, OutputFunction, processOutput } from './output';
import { hexFromColor } from '../utils';
import { SpriteOptions } from '../interfaces/options.interface';

const getRect = (x: number, y: number, w: number, h: number, f: string) => {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#f" />`;
};

/**
 * Export a sprite as an SVG file to `../../sprites/sprite-{timestamp}.svg`
 */
export const outputSVG = (opts: SpriteOptions, sprite: Sprite) => {
  const pixelFn: PixelFunction = (p: Pixel, row: number, column: number): PixelFunctionOutput => {
    if (!p) {
      return '';
    }

    const x = opts.pixelWidth * column;
    const y = opts.pixelHeight * row;

    return getRect(x, y, opts.pixelWidth, opts.pixelHeight, hexFromColor(p));
  };

  const outputFn: OutputFunction = (pArr: PixelFunctionOutput[][]): string => {
    const rows = pArr.map((row: PixelFunctionOutput[]) => row.join(''));
    const matrix = rows.join('');

    return `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        ${matrix}
      </svg>
    `;
  };

  return processOutput(sprite, opts, pixelFn, outputFn);
};
