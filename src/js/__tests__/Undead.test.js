import Undead from '../class/Undead.js';

test('Undead instance has correct full state', () => {
  const unit = new Undead('Ghoul');
  expect(unit).toEqual({
    name: 'Ghoul',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
