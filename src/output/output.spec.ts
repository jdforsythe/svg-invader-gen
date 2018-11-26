/* tslint:disable no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';
import 'mocha';

import { SpriteOptions } from '../interfaces/options.interface';
import { Sprite } from '../interfaces/sprite.interface';
import { Pixel } from '../interfaces/pixel.type';

import {
processOutput,
} from './output';

const getSprite = (opts: SpriteOptions): Sprite => {
  const sprite: Sprite = [];

  for (let i = 0; i < opts.pixelsHigh; i += 1) {
    const row: Pixel[] = [];

    for (let j = 0; j < opts.pixelsWide; j += 1) {
      row.push(false);
    }

    sprite.push(row);
  }

  return sprite;
};

@suite export class GetRowTest {

  private readonly opts: SpriteOptions = {
    pixelWidth: 1,
    pixelHeight: 1,
    pixelsWide: 1,
    pixelsHigh: 2,
    verticalSymmetry: true,
    outputType: 'svg',
  };

  private readonly sprite: Sprite = getSprite(this.opts);

  @test 'should call the pixelFn for each pixel and call outputFn'() {
    let pixelFnCount = 0;

    const pixelFn = () => pixelFnCount += 1;
    const outputFn = () => {
      expect(pixelFnCount).to.equal(this.opts.pixelsWide * this.opts.pixelsHigh);

      return '';
    };

    processOutput(this.sprite, this.opts, pixelFn, outputFn);
  }
}
