export class AttackPowerV3 {
  private static MIN = 0;
  private power: number;

  constructor(power: number) {
    if (power < AttackPowerV3.MIN) {
      throw new Error('最低値よりも上の値をしてしてください');
    }

    this.power = power;
  }

  /**
   * 攻撃力を強化する
   * @param increment 攻撃力の増分
   */
  public reinForce(increment: AttackPowerV3) {
    return new AttackPowerV3(this.power + increment.power);
  }

  /**
   * 無力化する
   */
  public disable() {
    return new AttackPowerV3(AttackPowerV3.MIN);
  }
}
