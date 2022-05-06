import { describe, it } from 'vitest';
import { GiftPointV1 } from './GiftPointV1';

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
});
