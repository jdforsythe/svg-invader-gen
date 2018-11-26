import { Sprite } from '../interfaces/sprite.interface';
import { Pixel } from '../interfaces/pixel.type';
import { PixelFunction, PixelFunctionOutput, OutputFunction, processOutput } from './output';
import { SpriteOptions } from '../interfaces/options.interface';

const TRANSPARENT_PIXEL = '<div class="pixel" style="background-color:transparent"></div>';

const getPixel = (r: number, g: number, b: number): string => {
  return `<div class="pixel" style="background-color:rgb(${r},${g},${b})"></div>`;
};

const getCSS = (opts: SpriteOptions): string => {
  const width = opts.pixelsWide * opts.pixelWidth;
  const height = opts.pixelsHigh * opts.pixelHeight;

  return `<style>
    body { background-color: #000; }
    .sprite { width: ${width}; height: ${height}; }
    .row { width: ${width}; height: ${opts.pixelHeight}px; }
    .pixel { width: ${opts.pixelWidth}px; height: ${opts.pixelHeight}px; float: left; }
    </style>
  `;
};

/**
 * Export a sprite as an HTML file to `../../sprites/sprite-{timestamp}.html`
 */
export const outputHTML = (opts: SpriteOptions, sprite: Sprite): string => {
  const pixelFn: PixelFunction = (p: Pixel): PixelFunctionOutput => {
    return p ? getPixel(p.red, p.green, p.blue) : TRANSPARENT_PIXEL;
  };

  const outputFn: OutputFunction = (pArr: PixelFunctionOutput[][]): string => {
    const rows = pArr.map((row: PixelFunctionOutput[]) => row.join(''));
    const matrix = rows.map((row: string) => `<div class="row">${row}</div>`).join('');

    return `
      <html>
      <head>${getCSS(opts)}</head>
      <body>
        <div class="sprite">${matrix}</div>
      </body>
      </html>
    `;
  };

  return processOutput(sprite, opts, pixelFn, outputFn);
};
