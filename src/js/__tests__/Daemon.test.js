import Daemon from '../class/Daemon.js';

test('Daemon instance has correct full state', () => {
  const unit = new Daemon('Inferno');
  expect(unit).toEqual({
    name: 'Inferno',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
