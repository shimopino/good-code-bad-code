export class AttackPowerV2 {
  private static MIN = 0;
  public power: number;

  constructor(power: number) {
    if (power < AttackPowerV2.MIN) {
      throw new Error('最低値よりも上の値をしてしてください');
    }

    this.power = power;
  }

  /**
   * 攻撃力を強化する
   * @param increment 攻撃力の増分
   */
  public reinForce(increment: number) {
    this.power += increment;
  }
}
