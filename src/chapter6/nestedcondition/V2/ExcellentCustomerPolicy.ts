import { PurchaseHistory } from '../PurchaseHistory';
import { ExcellentCustomerRule } from './ExcellentCustomerRule';

export class ExcellentCustomerPolicy {
  private rules: Set<ExcellentCustomerRule>;

  constructor() {
    this.rules = new Set();
  }

  /**
   * ルールを追加する
   * @param rule ルール
   */
  public add(rule: ExcellentCustomerRule) {
    this.rules.add(rule);
  }

  /**
   * @param history 購入履歴
   * @returns ルールを全て満たす場合 true
   */
  public complyWithAll(history: PurchaseHistory) {
    for (const each of this.rules) {
      if (!each.ok(history)) return false;
    }

    return true;
  }
}
