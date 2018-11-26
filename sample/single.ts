import { Sprite } from '../src/interfaces/sprite.interface';

import { getSprite } from '../src/generate';
import { outputSprite } from '../src/output';
import { SpriteOptions } from '../src/interfaces/options.interface';

// import {
//   Sprite,
//   getSprite,
//   outputSprite,
//   SpriteOptions,
// } from 'svg-invader-gen';

const opts: SpriteOptions = {
  pixelsWide: 5,
  pixelsHigh: 5,
  pixelWidth: 20,
  pixelHeight: 20,
  verticalSymmetry: true,
  outputType: 'svg',
};

const go = () => {
  const sprite: Sprite = getSprite(opts);

  outputSprite(opts, sprite);
};

go();
