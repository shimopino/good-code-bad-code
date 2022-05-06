import { describe, expect, it } from 'vitest';
import { MoneyData } from './MoneyData';
import { OrderManager } from './OrderManager';
import { PaymentManager } from './PaymentManager';

describe('StaticMiss', () => {
  describe('static弊害', () => {
    /**
     * staticメソッドはデータ(MoneyData)とロジック(OrderManager)が
     * 別々のクラスに分離してしまい、低凝集な構造になってしまうことがある
     *
     * staticメソッドはインスタンス変数を使用できない。
     */
    it('データクラスとstaticメソッドとのペア', () => {
      const moneyData1 = new MoneyData();
      const moneyData2 = new MoneyData();

      moneyData1.amount = 10;
      moneyData2.amount = 20;

      moneyData1.amount = OrderManager.add(
        moneyData1.amount,
        moneyData2.amount
      );

      expect(moneyData1.amount).toBe(30);
    });

    it('インスタンスメソッドのふりをしたstaticメソッド', () => {
      const paymentManager = new PaymentManager();

      /**
       * この add メソッドはインスタンス変数を使用していないため
       * 実質的に static メソッドと同じ扱いである
       */
      expect(paymentManager.add(10, 20)).toBe(30);
    });
  });
});
