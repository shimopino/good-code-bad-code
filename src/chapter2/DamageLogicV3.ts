/**
 * 変数の再代入を禁止する
 */
export class DamageLogicV3 {
  constructor(
    public playerArmPower: number,
    public playerWeaponPower: number,
    public enemyBodyDefence: number,
    public enemyArmorDefence: number
  ) {}

  public getDamage() {
    // 事前に計算可能な総攻撃量や総防御量を計算する
    const totalPlayerAttackPower = this.playerArmPower + this.playerWeaponPower;
    const totalEnemyDefence = this.enemyBodyDefence + this.enemyArmorDefence;

    let damageAmount = totalPlayerAttackPower - totalEnemyDefence / 2;

    if (damageAmount < 0) damageAmount = 0;

    return damageAmount;
  }
}
