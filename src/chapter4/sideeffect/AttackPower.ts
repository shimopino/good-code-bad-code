export class AttackPower {
  private static MIN = 0;
  public power: number;

  constructor(power: number) {
    if (power < AttackPower.MIN) {
      throw new Error('最低値よりも上の値をしてしてください');
    }

    this.power = power;
  }
}
