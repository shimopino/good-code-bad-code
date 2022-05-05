import { ContractAccount } from './ContractAccount';

export class ContractManager {
  public contractAmount: ContractAccount;

  //   税込み金額を計算する
  public calculateAmountIncludingTax(
    amountExcludingTax: number,
    salesTaxRate: number
  ): number {
    const multiplier = 1.0 + salesTaxRate;
    const amountIncludingTax = amountExcludingTax * multiplier;
    return Math.trunc(amountIncludingTax);
  }

  //   契約締結する
  public conclude() {
    const amountExcludingTax = 1000;
    const salesTaxRate = 0.1;

    //   省略
    const amountIncludingTax = this.calculateAmountIncludingTax(
      amountExcludingTax,
      salesTaxRate
    );
    this.contractAmount = new ContractAccount();
    this.contractAmount.amountIncludingTax = amountIncludingTax;
    this.contractAmount.salesTaxRate = salesTaxRate;
  }
}
