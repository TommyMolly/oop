export default class Character {
  static allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name must be a string with length from 2 to 10 characters');
    }

    if (!Character.allowedTypes.includes(type)) {
      throw new Error(`Type must be one of: ${Character.allowedTypes.join(', ')}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Cannot level up a dead character');
    }

    this.level += 1;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) return;

    const effectiveDamage = points * (1 - this.defence / 100);
    this.health -= effectiveDamage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
