export class RegularPrice {
  private static MIN_AMOUNT = 0;
  public readonly amount: number;

  constructor(amount: number) {
    if (amount < RegularPrice.MIN_AMOUNT) {
      throw new Error('通常価格が最低料金を下回っています');
    }

    this.amount = amount;
  }
}
