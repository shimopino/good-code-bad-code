import { describe, expect, it } from 'vitest';
import { MemberV1 } from './MemberV1';
import { MemberV2 } from './MemberV2';

/**
 * 満たすべき使用は以下の2つ
 *
 * 1. ヒットポイントは0以上
 * 2. ヒットポイントが0になった場合、死亡状態にする
 */
describe('HitPoint', () => {
  describe('V1', () => {
    it('メンバーの体力が0を下回った場合', () => {
      const member = new MemberV1(100);

      member.damage(110);

      expect(member).toEqual(new MemberV1(-10));
    });
  });

  describe('V2', () => {
    it('メンバーの体力が0を下回った場合、体力が0になり死亡状態となる', () => {
      const member = new MemberV2(100);

      member.damage(110);

      // 直接 states を編集できないのでオブジェクトを直接作成する
      // できれば値オブジェクトを再構築するようのメソッドが必要？
      expect(member).toEqual({
        hitPoint: { amount: 0 },
        states: {
          stateSet: new Set().add('dead'),
        },
      });
    });
  });
});
