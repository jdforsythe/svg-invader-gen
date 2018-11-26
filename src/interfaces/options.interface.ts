import { OutputType } from '../output/index';

/**
 * Options for generating and outputting the sprite=
 */
export interface SpriteOptions {
  pixelsWide: number;
  pixelsHigh: number;
  pixelWidth: number;
  pixelHeight: number;
  verticalSymmetry: boolean;
  outputType: OutputType;
}
