export class AttackPowerV3 {
  private static MIN = 0;
  public power: number;

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
  public reinForce(increment: number) {
    return new AttackPowerV3(this.power + increment);
  }

  /**
   * 無力化する
   */
  public disable() {
    this.power = AttackPowerV3.MIN;
  }
}
