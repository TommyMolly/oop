import Character from '../class/Character.js';
import Bowman from '../class/Bowman.js';

describe('Character methods', () => {
  test('Character constructor validates name and type', () => {
    expect(() => new Character('A', 'Zombie')).toThrow('Name must be a string with length from 2 to 10 characters');
    expect(() => new Character('ValidName', 'UnknownType')).toThrow('Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    expect(() => new Character('HeroName', 'Magician')).not.toThrow();
  });

  test('levelUp increases level, attack, defence, and sets health to 100', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 50;
    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBeCloseTo(30); // 25 * 1.2
    expect(bowman.defence).toBeCloseTo(30); // 25 * 1.2
    expect(bowman.health).toBe(100);
  });

  test('levelUp throws error if health is 0', () => {
    const bowman = new Bowman('Dead');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow('Cannot level up a dead character');
  });

  test('damage reduces health correctly', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(40); // 40 * (1 - 0.25) = 30
    expect(bowman.health).toBe(70);
  });

  test('damage cannot reduce health below 0', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(1000);
    expect(bowman.health).toBe(0);
  });

  test('damage does nothing if character is already dead', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 0;
    bowman.damage(50);
    expect(bowman.health).toBe(0);
  });
});
