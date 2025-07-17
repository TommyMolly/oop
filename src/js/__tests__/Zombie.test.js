import Zombie from '../class/Zombie.js';

test('Zombie instance has correct full state', () => {
  const unit = new Zombie('Walker');
  expect(unit).toEqual({
    name: 'Walker',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
