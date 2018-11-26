/* tslint:disable no-implicit-dependencies no-import-side-effect no-unused-expression function-name */
import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';
import 'mocha';

import { Color } from '../interfaces/color.interface';
import { Sprite } from '../interfaces/sprite.interface';
import { outputText } from './text';
import { SpriteOptions } from '../interfaces/options.interface';

@suite export class OutputTextTest {

  private readonly opts: SpriteOptions = {
    pixelWidth: 1,
    pixelHeight: 1,
    pixelsWide: 5,
    pixelsHigh: 5,
    verticalSymmetry: true,
    outputType: 'text',
  };

  private readonly color: Color = { red: 0, green: 0, blue: 0 };

  private readonly sprite: Sprite = [
    [false, this.color, false, this.color, false],
    [this.color, false, false, false, this.color],
    [false, this.color, false, this.color, false],
    [this.color, false, false, false, this.color],
    [false, false, false, false, false],
  ];

  @test 'should output the proer string'() {
    const expected = [
      ' * * ',
      '*   *',
      ' * * ',
      '*   *',
      '     ',
    ].join('\n');

    const actual = outputText(this.opts, this.sprite);

    expect(actual).to.equal(expected);
  }
}
