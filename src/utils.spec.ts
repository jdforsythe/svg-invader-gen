/* tslint:disable no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';
import 'mocha';
import { Color } from './interfaces/color.interface';

import {
  getRandomPixelPalette,
  hexFromColor,
} from './utils';

@suite export class GetRandomPixelPaletteTest {

  private expectedPixelPaletteLength = 6;
  private minimumColorValue = 50;
  private maximumColorValue = 215;

  @test 'should return a 6-length array'() {
    const actual = getRandomPixelPalette();

    expect(actual.length).to.equal(this.expectedPixelPaletteLength);
  }

  @test 'should be half false'() {
    const expected = this.expectedPixelPaletteLength / 2;
    const actual = getRandomPixelPalette();

    let falses = 0;
    for (let i = 0, l = actual.length; i < l; i += 1) {
      if (actual[i] === false) {
        falses += 1;
      }
    }

    expect(falses).to.equal(expected);
  }

  @test 'should be half valid color objects'() {
    const expected = this.expectedPixelPaletteLength / 2;
    const actual = getRandomPixelPalette();

    let pixels = 0;
    for (let i = 0, l = actual.length; i < l; i += 1) {
      const pixel = actual[i];

      if (pixel) {
        pixels += 1;
        expect(pixel.red).to.be.greaterThan(this.minimumColorValue - 1);
        expect(pixel.red).to.be.lessThan(this.maximumColorValue + 1);
        expect(pixel.green).to.be.greaterThan(this.minimumColorValue - 1);
        expect(pixel.green).to.be.lessThan(this.maximumColorValue + 1);
        expect(pixel.blue).to.be.greaterThan(this.minimumColorValue - 1);
        expect(pixel.blue).to.be.lessThan(this.maximumColorValue + 1);
      }
    }

    expect(pixels).to.equal(expected);
  }
}

@suite export class HexFromColorTest {
  @test 'should return the proper color for black'() {
    const color: Color = { red: 0, green: 0, blue: 0 };
    const expected = '000000';

    const actual = hexFromColor(color);
    expect(actual).to.equal(expected);
  }

  @test 'should return the proper color for white'() {
    const color: Color = { red: 255, green: 255, blue: 255 };
    const expected = 'ffffff';

    const actual = hexFromColor(color);
    expect(actual).to.equal(expected);
  }

  @test 'should return the proper color for red'() {
    const color: Color = { red: 255, green: 15, blue: 15 };
    const expected = 'ff0f0f';

    const actual = hexFromColor(color);
    expect(actual).to.equal(expected);
  }
}
