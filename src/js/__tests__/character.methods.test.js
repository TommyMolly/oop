import Character from '../Character.js';
import { Bowman } from '../characters.js';

describe('Character methods', () => {
  test('levelUp increases level, attack, defence, and sets health to 100', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 50;
    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBeCloseTo(30);
    expect(bowman.defence).toBeCloseTo(30);
    expect(bowman.health).toBe(100);
  });

  test('levelUp throws error if health is 0', () => {
    const bowman = new Bowman('Dead');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow('Cannot level up a dead character');
  });

  test('damage reduces health correctly', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(40);
    expect(bowman.health).toBe(70); // 40 * (1 - 0.25) = 30 damage
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
