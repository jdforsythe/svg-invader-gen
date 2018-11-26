/* tslint:disable no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';
import 'mocha';
import { Color } from './interfaces/color.interface';
import { Palette } from './interfaces/palette.type';
import { SpriteOptions } from './interfaces/options.interface';

import {
  getRow,
  getSprite,
} from './generate';

@suite export class GetRowTest {
  private color1: Color = { red: 0, green: 0, blue: 0 };
  private color2: Color = { red: 1, green: 0, blue: 0 };
  private color3: Color = { red: 2, green: 0, blue: 0 };
  private palette: Palette = [
    this.color1,
    this.color2,
    this.color3,
    false,
    this.color1,
    this.color2,
    this.color3,
    false,
    this.color1,
    this.color2,
    this.color3,
    false,
  ];

  private opts: SpriteOptions = {
    pixelWidth: 1,
    pixelHeight: 1,
    pixelsWide: 20,
    pixelsHigh: 1,
    verticalSymmetry: true,
    outputType: 'svg',
  };

  @test 'should return a row of the proper length'() {
    const actual = getRow(this.palette, this.opts);

    expect(actual.length).to.equal(this.opts.pixelsWide);
  }

  @test 'should return a symmetric row'() {
    const actual = getRow(this.palette, this.opts);

    for (let i = 0, l = actual.length; i < l; i += 1) {
      const pixel = actual[i];
      const mirror = actual[l - i - 1];

      if (!pixel) {
        expect(mirror).to.be.false;
      }
      else {
        expect(mirror).to.deep.equal(pixel);
      }
    }
  }

  @test 'should return a non-symmetric row'() {
    const actual = getRow(this.palette, { ...this.opts, verticalSymmetry: false });
    let isSymmetric = true;

    for (let i = 0, l = actual.length; i < l; i += 1) {
      const pixel = actual[i];
      const mirror = actual[l - i - 1];

      if (!pixel) {
        if (mirror) {
          isSymmetric = false;
          break;
        }
      }
      else {
        if ((<Color> pixel).red === (<Color> mirror).red) {
          isSymmetric = false;
          break;
        }
      }
    }

    expect(isSymmetric).to.be.false;
  }
}

@suite export class GetSpriteTest {
  private opts: SpriteOptions = {
    pixelWidth: 1,
    pixelHeight: 1,
    pixelsWide: 20,
    pixelsHigh: 1,
    verticalSymmetry: true,
    outputType: 'svg',
  };

  @test 'should return proper number of rows'() {
    const actual = getSprite(this.opts);

    expect(actual.length).to.equal(this.opts.pixelsHigh);
  }
}
