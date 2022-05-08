export class Money {
  constructor(private readonly amount: number) {}

  public add(other: Money) {
    return new Money(this.amount + other.amount);
  }
}
