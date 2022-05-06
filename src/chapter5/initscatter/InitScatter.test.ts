import { describe, expect, it } from 'vitest';
import { GiftPointV1 } from './GiftPointV1';
import { GiftPointV2 } from './GiftPointV2';

describe('InitScatter', () => {
  describe('V1', () => {
    it('会員種別ごとに新規入会時にポイントを付与する', () => {
      /**
       * コンストラクタ経由でインスタンスを作成する
       *
       * コンストラクタ自体は1つしかないため、複数の利用用途に合わせて
       * 同じコンストラクタが流用されてしまう
       *
       * そのため、会員種別ごとの新規会員ポイントの違いが分散する
       */
      const standardMemberShipPoint = new GiftPointV1(3000);

      const premiumMemberShipPoint = new GiftPointV1(10000);
    });
  });

  describe('V2', () => {
    /**
     * 生成ロジックが増えた場合にはコンストラクタを隠蔽して、専門の
     * ファクトリメソッドやクラスに分離することを考える
     */
    it('privateコンストラクタとファクトリメソッドで目的別の初期化を行う', () => {
      const standardMemberShipPoint = GiftPointV2.forStandardMemberShip();

      // @ts-expect-error テストなので private コンストラクタは無視
      expect(standardMemberShipPoint).toEqual(new GiftPointV2(3000));

      const premiumMemberShipPoint = GiftPointV2.forPremiumMemberShip();

      // @ts-expect-error テストなので private コンストラクタは無視
      expect(premiumMemberShipPoint).toEqual(new GiftPointV2(10000));
    });
  });
});
