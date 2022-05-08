import { describe, expect, it } from 'vitest';
import { Member } from './Member';
import { FlagLogicV1 } from './V1/FlagLogicV1';

describe('Flag', () => {
  describe('V1', () => {
    it('フラグ引数を使用したメソッド内の分岐', () => {
      const member = new Member(10, 100);
      const logic = new FlagLogicV1(member);

      logic.damage(true, 5);
      expect(member).toEqual({
        hitPoint: 10 - 5,
        magicPoint: 100,
        state: 'fine',
      });

      logic.damage(false, 30);
      expect(member).toEqual({
        hitPoint: 10 - 5,
        magicPoint: 100 - 30,
        state: 'fine',
      });
    });
  });
});
