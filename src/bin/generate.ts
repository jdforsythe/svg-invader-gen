#!/usr/bin/env node

import * as cli from 'cli';

import {
  Sprite,
  getSprite,
  outputSprite,
  SpriteOptions,
} from '../index';

cli.enable('help', 'version');

const cliOpts = {
  'pixel-width': ['x', 'Width of "pixel" (default 20)', 'int', 20],
  'pixel-height': ['y', 'Height of "pixel" (default 20)', 'int', 20],
  'pixels-wide': ['w', 'Number of pixels wide to make the sprite (default 5)', 'int', 5],
  'pixels-high': ['h', 'Number of pixels high to make the sprite (default 5', 'int', 5],
  'non-symmetric': ['n', `Don't mirror the sprite across the vertical axis`, true],
  'output-type': ['o', 'Output type: "svg", "html", or "text"', 'string', 'svg'],
};

// @types/cli doesn't match...
// tslint:disable-next-line no-any
cli.parse(<any> cliOpts);

cli.main((args, opts) => {
  const spriteOpts: SpriteOptions = {
    pixelWidth: opts['pixel-width'],
    pixelHeight: opts['pixel-height'],
    pixelsWide: opts['pixels-wide'],
    pixelsHigh: opts['pixels-high'],
    verticalSymmetry: !!opts['non-symmetric'],
    outputType: opts['output-type'],
  };

  const sprite: Sprite = getSprite(spriteOpts);
  const spriteStr = outputSprite(opts, sprite);

  cli.output(spriteStr);
});
