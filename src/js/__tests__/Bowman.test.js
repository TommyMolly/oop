import Bowman from '../class/Bowman.js';

test('Bowman instance has correct full state', () => {
  const unit = new Bowman('Robin');
  expect(unit).toEqual({
    name: 'Robin',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
