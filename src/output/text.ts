// tslint:disable no-console
import { Sprite } from '../interfaces/sprite.interface';
import { PixelFunction, PixelFunctionOutput, OutputFunction, processOutput } from './output';
import { Pixel } from '../interfaces/pixel.type';
import { SpriteOptions } from '../interfaces/options.interface';

/**
 * Print sprite as multi-line string to the console
 */
export const outputText = (opts: SpriteOptions, sprite: Sprite) => {
  const pixelFn: PixelFunction = (p: Pixel): PixelFunctionOutput => {
    return p ? '*' : ' ';
  };

  const outputFn: OutputFunction = (pArr: PixelFunctionOutput[][]): string => {
    // tslint:disable-next-line no-console
    return pArr.map((r: PixelFunctionOutput[]) => r.join('')).join('\n');
  };

  return processOutput(sprite, opts, pixelFn, outputFn);
};
