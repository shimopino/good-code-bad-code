import { AttackPower } from './AttackPower';

export class Weapon {
  public attackPower: AttackPower;

  constructor(attackPower: AttackPower) {
    this.attackPower = attackPower;
  }
}
