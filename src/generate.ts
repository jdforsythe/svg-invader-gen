import { Palette } from './interfaces/palette.type';
import { Pixel } from './interfaces/pixel.type';
import { Sprite } from './interfaces/sprite.interface';

import { getRandomPixelPalette } from './utils';
import { SpriteOptions } from './interfaces/options.interface';

/**
 * Get a row of pixels
 */
export const getRow = (palette: Palette, opts: SpriteOptions): Pixel[] => {
  const row: Pixel[] = [];

  // if we want a symmetric row, we will stop grabbing random colors after this index
  // and fill in from the left side of the array in reverse order. if we don't want
  // symmetry, this split index is set to the full width so no fill-in happens
  // (minus 1 because this is an index)
  const symmetrySplit = !opts.verticalSymmetry ? opts.pixelsWide : (Math.ceil(opts.pixelsWide / 2) - 1);

  for (let col = 0, l = opts.pixelsWide; col < l; col += 1) {
    if (col > symmetrySplit) {
      break;
    }

    // otherwise, grab a random pixel from the palette
    const randIdx = Math.floor(Math.random() * palette.length);
    row.push(palette[randIdx]);
  }

  // if the length is less than expected, fill in symmetrically
  while (row.length < opts.pixelsWide) {
    // index we need to copy is the distance from the end of the array we are
    // (minus 1 because arrays are 0-indexed)
    const copyIdx = opts.pixelsWide - row.length - 1;

    row.push(row[copyIdx]);
  }

  return row;
};

/**
 * Get a Sprite array
 */
export const getSprite = (opts: SpriteOptions): Sprite => {
  const sprite: Sprite = [];
  const palette: Palette = getRandomPixelPalette();

  // for each row, generate and push onto `sprite`
  for (let row = 0; row < opts.pixelsHigh; row += 1) {
    sprite.push(getRow(palette, opts));
  }

  return sprite;
};
