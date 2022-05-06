import { describe, expect, it } from 'vitest';
import { MemberV1 } from './MemberV1';

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
});
