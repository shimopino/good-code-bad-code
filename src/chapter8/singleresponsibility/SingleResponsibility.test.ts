import { describe, expect, it } from 'vitest';
import { DiscountManagerV1 } from './V1/DiscountManager';
import { ProductV1 } from './V1/Product';
import { ProductDiscountV1 } from './V1/ProductDiscount';
import { SummerDiscountManagerV1 } from './V1/SummerDiscountManager';

/**
 * ECサイトに機能追加する
 *
 * - 割引サービス (通常割引) を追加する
 *   - 商品1点につき300円を割り引く
 *   - 上限20000円まで商品を追加可能
 */

describe('SingleResponsibility', () => {
  describe('V1', () => {
    /**
     * 粒度が異なっているとテストも面倒になる
     *
     * というかテストの目的を設定しずらい
     */
    describe('メソッドの置き場所がバラバラになっている', () => {
      it('割引商品かつ総額20000円を超える場合は、合計金額のみ加算', () => {
        const product = new ProductV1(1, 'サンプル', 30000);
        const productDiscount = new ProductDiscountV1(1, true);
        const discount = new DiscountManagerV1();

        discount.add(product, productDiscount);

        expect(discount).toEqual({
          discountProducts: [],
          totalPrice: 29700,
        });
      });

      it('割引商品かつ総額20000円以下の場合は、合計金額のみ加算とカートに追加する', () => {
        const product = new ProductV1(1, 'サンプル', 10000);
        const productDiscount = new ProductDiscountV1(1, true);
        const discount = new DiscountManagerV1();

        discount.add(product, productDiscount);

        expect(discount).toEqual({
          discountProducts: [product],
          totalPrice: 9700,
        });
      });

      it('夏季割引では300円割引と、上限を30000円にする', () => {
        const product = new ProductV1(1, 'サンプル', 25000, true);
        const discount = new SummerDiscountManagerV1();

        discount.add(product);

        expect(discount).toEqual({
          discountManager: {
            discountProducts: [product],
            totalPrice: 24700,
          },
        });
      });
    });
  });

  describe('V2', () => {
    it('', () => {});
  });
});
