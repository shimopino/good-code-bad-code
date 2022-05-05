/**
 * 意味のあるまとめりでメソッド化を行う
 */
export class DamageLogicV4 {
  constructor(
    private playerArmPower: number,
    private playerWeaponPower: number,
    private enemyBodyDefence: number,
    private enemyArmorDefence: number
  ) {}

  private sumUpPlayerAttackpower(
    playerArmPower: number,
    playerWeaponPower: number
  ) {
    return playerArmPower + playerWeaponPower;
  }

  private sumUpEnemyDefence(
    enemyBodyDefence: number,
    enemyArmorDefence: number
  ) {
    return enemyBodyDefence + enemyArmorDefence;
  }

  private estimateDamage(totalPlayerAttackPower: number, totalEnemyDefence) {
    const damageAmount = totalPlayerAttackPower - totalEnemyDefence / 2;

    if (damageAmount < 0) return 0;

    return damageAmount;
  }

  public getDamage() {
    // 事前に計算可能な総攻撃量や総防御量を計算する
    const totalPlayerAttackPower = this.sumUpPlayerAttackpower(
      this.playerArmPower,
      this.playerWeaponPower
    );

    const totalEnemyDefence = this.sumUpEnemyDefence(
      this.enemyBodyDefence,
      this.enemyArmorDefence
    );

    const damageAmount = this.estimateDamage(
      totalPlayerAttackPower,
      totalEnemyDefence
    );

    return damageAmount;
  }
}
