import { PurchaseHistory } from '../PurchaseHistory';
import { ExcellentCustomerPolicy } from './ExcellentCustomerPolicy';
import { GoldCustomerPurchaseAmountRule } from './GoldCustomerPurchaseAmountRule';
import { PurchaseFrequencyRule } from './PurchaseFrequencyRule';
import { ReturnRateRule } from './ReturnRateRule';

export class GoldCustomerPolicy {
  private policy: ExcellentCustomerPolicy;

  constructor() {
    this.policy = new ExcellentCustomerPolicy();

    this.policy.add(new GoldCustomerPurchaseAmountRule());
    this.policy.add(new PurchaseFrequencyRule());
    this.policy.add(new ReturnRateRule());
  }

  /**
   * @param history 購入履歴
   * @returns ルールを全て満たす場合 true
   */
  public complyWithAll(history: PurchaseHistory) {
    return this.policy.complyWithAll(history);
  }
}
