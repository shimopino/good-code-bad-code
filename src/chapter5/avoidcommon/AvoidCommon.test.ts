import { describe, expect, it } from 'vitest';
import { Common } from './Common';
import { AmountExcludingTax } from './AmountExcludingTax';
import { AmountIncludingTax } from './AmountIncludingTax';
import { TaxRate } from './TaxRate';

describe('AvoidCommon', () => {
  describe('common', () => {
    it('共通化し過ぎている場合', () => {
      const amount = Common.calcAmountIncludingTax(1000, 1.1);

      expect(amount).toBe(1100);
    });
  });

  describe('専用のクラスに集める', () => {
    it('税金は専用のクラスを作成してその中で税率計算を行う', () => {
      /**
       * 本当はクラスのプロパティを使用する側から利用したくない
       * ただのデータクラスになってしまうので
       *
       * 逆に言えばロジックを持っていない場合はプリミティブな型で
       * 持たせても問題ないと思っている
       *
       * つまり、以下の AmountExcludingTax と TaxRate は正直
       * やり過ぎている感はある（TaxRate は定数で良いのでは）
       */
      const notIncludingTax = new AmountExcludingTax();
      notIncludingTax.value = 1000;

      const taxRate = new TaxRate();
      taxRate.value = 1.1;

      const includingTax = new AmountIncludingTax(notIncludingTax, taxRate);

      expect(includingTax).toEqual({
        value: 1100,
      });
    });
  });
});
