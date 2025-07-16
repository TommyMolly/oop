import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../characters.js';

test('Bowman has correct stats', () => {
  const unit = new Bowman('Robin');
  expect(unit.attack).toBe(25);
  expect(unit.defence).toBe(25);
});

test('Swordsman has correct stats', () => {
  const unit = new Swordsman('Aragorn');
  expect(unit.attack).toBe(40);
  expect(unit.defence).toBe(10);
});

test('Magician has correct stats', () => {
  const unit = new Magician('Merlin');
  expect(unit.attack).toBe(10);
  expect(unit.defence).toBe(40);
});

test('Daemon has correct stats', () => {
  const unit = new Daemon('Hellboy');
  expect(unit.attack).toBe(10);
  expect(unit.defence).toBe(40);
});

test('Undead has correct stats', () => {
  const unit = new Undead('Ghoul');
  expect(unit.attack).toBe(25);
  expect(unit.defence).toBe(25);
});

test('Zombie has correct stats', () => {
  const unit = new Zombie('Walker');
  expect(unit.attack).toBe(40);
  expect(unit.defence).toBe(10);
});
