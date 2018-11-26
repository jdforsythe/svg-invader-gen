import { Color } from './interfaces/color.interface';
import { Palette } from './interfaces/palette.type';

/**
 * Get a random number between 50-215
 */
const getRandomColorValue = (): number => {
  return Math.floor(Math.random() * 165) + 50;
};

/**
 * Get a Color object
 */
const getColor = (red: number, green: number, blue: number): Color => {
  return { red, green, blue };
};

/**
 * Returns an array that is half false (transparent), half random colors.
 * Pixels will be randomly selected from this array, having the effect
 * of a 50% chance of showing a pixel and a color palette of 3 randomly
 * selected colors
 */
export const getRandomPixelPalette = (): Palette => {
  return [
    false,
    getColor(getRandomColorValue(), getRandomColorValue(), getRandomColorValue()),
    false,
    getColor(getRandomColorValue(), getRandomColorValue(), getRandomColorValue()),
    false,
    getColor(getRandomColorValue(), getRandomColorValue(), getRandomColorValue()),
  ];
};

const hexFromInt = (i: number): string => {
  const hex = Number(i).toString(16);

  return hex.length < 2 ? `0${hex}` : hex;
};

/**
 * Get hex string from RGB color object
 */
export const hexFromColor = (color: Color): string => {
  return `${hexFromInt(color.red)}${hexFromInt(color.green)}${hexFromInt(color.blue)}`;
};
