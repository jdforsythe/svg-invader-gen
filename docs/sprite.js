'use strict';

const gen = require('svg-invader-gen');

const opts = {
  pixelWidth: 20,
  pixelHeight: 20,
  pixelsWide: 5,
  pixelsHigh: 5,
  verticalSymmetry: true,
  outputType: 'svg',
};

function getSpriteSvg() {
  const sprite = gen.getSprite(opts);
  return gen.outputSprite(opts, sprite);
}

function loadSprite() {
  const svg = [
    getSpriteSvg(),
    getSpriteSvg(),
    getSpriteSvg(),
    getSpriteSvg(),
  ];

  document.getElementById('sprite-1').innerHTML = svg[0];
  document.getElementById('sprite-2').innerHTML = svg[1];
  document.getElementById('sprite-3').innerHTML = svg[2];
  document.getElementById('sprite-4').innerHTML = svg[3];
}

document.getElementById('refresh').addEventListener('click', loadSprite);

// load on page load
loadSprite();
