import { AttackPowerV3 } from './AttackPowerV3';

export class WeaponV3 {
  public attackPower: AttackPowerV3;

  constructor(attackPower: AttackPowerV3) {
    this.attackPower = attackPower;
  }

  public reinForce(increment: AttackPowerV3) {
    const reinForced = this.attackPower.reinForce(increment);
    return new WeaponV3(reinForced);
  }
}
