import { Pixel } from '../interfaces/pixel.type';
import { Sprite } from '../interfaces/sprite.interface';
import { SpriteOptions } from '../interfaces/options.interface';

/**
 * Output of a PixelFunction
 */
// tslint:disable-next-line no-any
export type PixelFunctionOutput = any;

/**
 * Function to process a pixel for output
 */
export type PixelFunction = (p: Pixel, row: number, column: number, opts?: SpriteOptions) => PixelFunctionOutput;

/**
 * Function to process rows of PixelFunctionOutputs for output
 */
export type OutputFunction = (pArr: PixelFunctionOutput[][], opts?: SpriteOptions) => string;

/**
 * Process output using the supplied sprite and handler functions
 */
export const processOutput = (sprite: Sprite, opts: SpriteOptions, pixelFn: PixelFunction, outputFn: OutputFunction): string => {
  const outputArr = [];

  for (let i = 0, l = sprite.length; i < l; i += 1) {
    const row: Pixel[] = sprite[i];
    const outputRow = [];

    for (let j = 0, m = row.length; j < m; j += 1) {
      outputRow.push(pixelFn(row[j], i, j, opts));
    }

    outputArr.push(outputRow);
  }

  return outputFn(outputArr, opts);
};
