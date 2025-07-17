import Magician from '../class/Magician.js';

test('Magician instance has correct full state', () => {
  const unit = new Magician('Merlin');
  expect(unit).toEqual({
    name: 'Merlin',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
