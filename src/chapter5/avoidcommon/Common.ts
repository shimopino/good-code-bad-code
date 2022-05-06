export class Common {
  public static calcAmountIncludingTax(
    amountExcludingTax: number,
    taxRate: number
  ) {
    return amountExcludingTax * taxRate;
  }
}
