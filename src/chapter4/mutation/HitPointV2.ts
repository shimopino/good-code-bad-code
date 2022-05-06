export class HitPointV2 {
  private static MIN = 0;
  public amount: number;

  constructor(amount: number) {
    if (amount < HitPointV2.MIN) throw new Error('0より下はダメ');

    this.amount = amount;
  }

  public damage(damageAmount: number) {
    const nextAmount = this.amount - damageAmount;
    this.amount = Math.max(HitPointV2.MIN, nextAmount);
  }

  public isZero() {
    return this.amount === HitPointV2.MIN;
  }
}
