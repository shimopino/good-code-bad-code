import { describe, expect, it } from 'vitest';
import { Money } from './Money';
import { PremiumRates } from './V1/PremiumRates';
import { RegularRates } from './V1/RegularRates';
import { TypeCheckLogic } from './V1/TypeCheckLogic';

describe('NotTypeCheck', () => {
  describe('V1', () => {
    /**
     * 厳密には型チェックではない。
     *
     * TypeScriptは構造的型システムを採用しているため、
     * ブランド型などを採用していない場合は同じ型と識別される
     */
    it('インターフェースを使用して型チェックで分岐を表現する', () => {
      const logic = new TypeCheckLogic();

      const premiumRates = new PremiumRates();
      const premiumFee = logic.getFee(premiumRates);
      expect(premiumFee).toEqual(new Money(17000));

      const regularRates = new RegularRates();
      const regularFee = logic.getFee(regularRates);
      expect(regularFee).toEqual(new Money(10000));
    });
  });
});
