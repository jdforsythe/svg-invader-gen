import { Sprite } from '../interfaces/sprite.interface';
import { outputText } from './text';
import { outputHTML } from './html';
import { SpriteOptions } from '../interfaces/options.interface';
import { outputSVG } from './svg';

/**
 * Type of output to perform
 */
export type OutputType = 'text' | 'array' | 'html' | 'svg';

/**
 * Output a sprite using the specified output format
 */
export const outputSprite = (opts: SpriteOptions, sprite: Sprite): string => {
  switch (opts.outputType) {
    case 'html': {
      return outputHTML(opts, sprite);
    }

    case 'text': {
      return outputText(opts, sprite);
    }

    case 'svg':
    default: {
      return outputSVG(opts, sprite);
    }
  }
};
