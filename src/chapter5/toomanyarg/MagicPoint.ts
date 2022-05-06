export class MagicPoint {
  private currentAmount: number;
  private originalMaxAmount: number;
  private maxIncrements: number[];

  constructor(amount: number) {
    this.currentAmount = amount;
    this.originalMaxAmount = 100;
    this.maxIncrements = [];
  }

  /**
   * @returns 現在の魔法力残量
   */
  public current() {
    return this.currentAmount;
  }

  /**
   * @returns 魔法力の最大量
   */
  public max() {
    let amount = this.originalMaxAmount;
    for (const each of this.maxIncrements) {
      amount += each;
    }
    return amount;
  }

  /**
   * 魔法力を回復する
   * @param recoveryAmount 回復量
   */
  public recover(recoveryAmount: number) {
    this.currentAmount = Math.min(
      this.currentAmount + recoveryAmount,
      this.max()
    );
  }

  /**
   * 魔法力を消費する
   * @param consumeAmount 消費量
   */
  public consume(consumeAmount: number) {
    // 省略
  }
}
