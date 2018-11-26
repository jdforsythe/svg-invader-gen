# SVG "Invader" Sprite Generator

![Code Coverage](./coverage/badge.svg)

## Samples

![Sprite 1](./examples/sprite-01.svg)
![Sprite 2](./examples/sprite-02.svg)
![Sprite 3](./examples/sprite-03.svg)
![Sprite 4](./examples/sprite-04.svg)
![Sprite 5](./examples/sprite-05.svg)
![Sprite 6](./examples/sprite-06.svg)
![Sprite 7](./examples/sprite-07.svg)
![Sprite 8](./examples/sprite-08.svg)
![Sprite 9](./examples/sprite-09.svg)
![Sprite 10](./examples/sprite-10.svg)

## CLI Usage

### Installation

```sh
npm install -g svg-invader-gen
```

### CLI Options

```
svg-invader-gen [OPTIONS]
```

- `-x #`, `--pixel-width=#` [NUMBER] Width of "pixel" (Default is 20)
- `-y #`, `--pixel-height=#` [NUMBER] Height of "pixel" (Default is 20)
- `-w #`, `--pixels-wide=#` [NUMBER] Number of pixels wide to make the sprite (Default is 5)
- `-h #`, `--pixels-high=#` [NUMBER] Number of pixels high to make the sprite (Default is 5)
- `-n`, `--non-symmetric` [FLAG] Don't mirror the sprite across the vertical axis
- `-o [TYPE]`, `--output-type=[TYPE]` [STRING] Output type: "svg", "html", or "text" (Default is "svg")

## Module usage

### Installation

```sh
npm install -S svg-invader-gen
```

### JS

```js
const invaderGen = require('svg-invader-gen');

const opts = {
  pixelsWide: 5,
  pixelsHigh: 5,
  pixelWidth: 20,
  pixelHeight: 20,
  verticalSymmetry: true,
  outputType: 'svg',
};

const go = () => {
  const sprite = invaderGen.getSprite(opts);

  const svg = invaderGen.outputSprite(opts, sprite);

  console.log(svg);
};

go();
```

### TypeScript

```ts
import { Sprite, SpriteOptions, getSprite, outputSprite } from 'svg-invader-gen';

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
  const svg: string = outputSprite(opts, sprite);

  console.log(svg);
};

go();
```
