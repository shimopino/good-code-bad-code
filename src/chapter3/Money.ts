export class Money {
  private amount: number;
  private currency: string;

  constructor(amount: number, currency: string) {
    if (amount < 0) throw new Error('金額は０以上を指定して下さい');
    if (!currency) throw new Error('通貨を指定してください');

    this.amount = amount;
    this.currency = currency;
  }

  public add(other: Money) {
    if (this.currency !== other.currency) throw new Error('通貨単位が違います');

    const added = this.amount + other.amount;
    return new Money(added, this.currency);
  }
}
