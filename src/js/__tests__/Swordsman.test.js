import Swordsman from '../class/Swordsman.js';

test('Swordsman instance has correct full state', () => {
  const unit = new Swordsman('Max');
  expect(unit).toEqual({
    name: 'Max',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
