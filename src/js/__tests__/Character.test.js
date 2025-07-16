import Character from '../Character.js';

test('creates valid Character', () => {
  const character = new Character('Hero', 'Zombie');
  expect(character).toEqual({
    name: 'Hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
});

test('throws error for short name', () => {
  expect(() => new Character('A', 'Zombie')).toThrow('Name must be a string');
});

test('throws error for long name', () => {
  expect(() => new Character('VeryLongName', 'Zombie')).toThrow('Name must be a string');
});

test('throws error for invalid type', () => {
  expect(() => new Character('Hero', 'Unknown')).toThrow('Type must be one of:');
});
