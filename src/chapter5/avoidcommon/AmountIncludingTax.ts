import { AmountExcludingTax } from './AmountExcludingTax';
import { TaxRate } from './TaxRate';

export class AmountIncludingTax {
  public value: number;

  constructor(amountExcludingTax: AmountExcludingTax, taxRate: TaxRate) {
    this.value = amountExcludingTax.value * taxRate.value;
  }
}
