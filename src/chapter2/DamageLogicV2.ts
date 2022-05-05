/**
 * わかりやすい変数名
 */
export class DamageLogicV2 {
  constructor(
    public playerArmPower: number,
    public playerWeaponPower: number,
    public enemyBodyDefence: number,
    public enemyArmorDefence: number
  ) {}

  public getDamage() {
    let damageAmount = 0;
    damageAmount = this.playerArmPower + this.playerWeaponPower;
    damageAmount =
      damageAmount - (this.enemyBodyDefence + this.enemyArmorDefence) / 2;

    if (damageAmount < 0) damageAmount = 0;

    return damageAmount;
  }
}
