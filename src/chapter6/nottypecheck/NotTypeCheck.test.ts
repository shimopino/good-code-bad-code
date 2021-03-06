import { describe, expect, it } from 'vitest';
import { Money } from './Money';
import { PremiumRatesV1 } from './V1/PremiumRatesV1';
import { RegularRatesV1 } from './V1/RegularRatesV1';
import { TypeCheckLogic } from './V1/TypeCheckLogic';
import { PremiumRatesV2 } from './V2/PremiumRatesV2';
import { RegularRatesV2 } from './V2/RegularRatesV2';
import { CallBusySeaconFeeLogic } from './V2/CallBusySeaconFeeLogic';

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

      const premiumRates = new PremiumRatesV1();
      const premiumFee = logic.getBusySeaconFee(premiumRates);
      expect(premiumFee).toEqual(new Money(17000));

      const regularRates = new RegularRatesV1();
      const regularFee = logic.getBusySeaconFee(regularRates);
      expect(regularFee).toEqual(new Money(10000));
    });
  });

  describe('V2', () => {
    it('リスコフの置換原則を使用して基本型と継承型の置換を行う', () => {
      const logic = new CallBusySeaconFeeLogic();

      const premiumRates = new PremiumRatesV2();
      const premiumFee = logic.getBusySeaconFee(premiumRates);
      expect(premiumFee).toEqual(new Money(17000));

      const regularRates = new RegularRatesV2();
      const regularFee = logic.getBusySeaconFee(regularRates);
      expect(regularFee).toEqual(new Money(10000));
    });
  });
});
