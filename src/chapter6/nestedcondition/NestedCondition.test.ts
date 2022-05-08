import { describe, expect, it } from 'vitest';
import { PurchaseHistory } from './PurchaseHistory';
import { CustomerRankLogic } from './V1/CustinerRankLogic';
import { ExcellentCustomerPolicy } from './V2/ExcellentCustomerPolicy';
import { GoldCustomerPurchaseAmountRule } from './V2/GoldCustomerPurchaseAmountRule';
import { ReturnRateRule } from './V2/ReturnRateRule';
import { PurchaseFrequencyRule } from './V2/PurchaseFrequencyRule';
import { GoldCustomerPolicy } from './V2/GoldCustomerPolicy';
import { SilverCustomerPolicy } from './V2/SilverCustomerPolicy';

/**
 * 実現したい条件は下記となる
 *
 * - ゴールド会員
 *   - これまでの購入金額が10万円以上であること
 *   - 1ヶ月あたりの購入頻度が10回以上であること
 *   - 返品率が0.1%以内であること
 *
 * - シルバー会員
 *   - 1ヶ月あたりの購入頻度が10回以上であること
 *   - 返品率が0.1%以内であること
 */

describe('NestedCondition', () => {
  describe('V1', () => {
    it('ネストした条件分岐を再現する', () => {
      const history = new PurchaseHistory(100000, 10, 0.001);
      const logic = new CustomerRankLogic();

      /**
       * いくつか同じ判定条件が存在しているが、個別のメソッドに
       * ハードコーディングされている
       */
      expect(logic.isGoldCustomer(history)).toBeTruthy();
      expect(logic.isSilverCustomer(history)).toBeTruthy();
    });
  });

  describe('V2', () => {
    it('ポリシーパターンを使用して条件を集約する', () => {
      const history = new PurchaseHistory(100000, 10, 0.001);

      /**
       * ポリシーパターンを使用してゴールド会員のルールを構築する
       */
      const goldCustomerPolicy = new ExcellentCustomerPolicy();
      goldCustomerPolicy.add(new GoldCustomerPurchaseAmountRule());
      goldCustomerPolicy.add(new PurchaseFrequencyRule());
      goldCustomerPolicy.add(new ReturnRateRule());

      expect(goldCustomerPolicy.complyWithAll(history)).toBeTruthy();
    });

    it('ゴールド会員専用のポリシーを作成する', () => {
      const history = new PurchaseHistory(100000, 10, 0.001);
      const goldPolicy = new GoldCustomerPolicy();

      expect(goldPolicy.complyWithAll(history)).toBeTruthy();
    });

    it('シルバー会員専用のポリシーを作成する', () => {
      const history = new PurchaseHistory(1000, 10, 0.001);
      const silverPolicy = new SilverCustomerPolicy();

      expect(silverPolicy.complyWithAll(history)).toBeTruthy();
    });
  });
});
