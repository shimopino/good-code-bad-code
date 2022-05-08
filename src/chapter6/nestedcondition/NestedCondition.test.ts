import { describe, expect, it } from 'vitest';
import { PurchaseHistory } from './PurchaseHistory';
import { CustomerRankLogic } from './V1/CustinerRankLogic';

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
      expect(true).toBeFalsy();
    });
  });
});
