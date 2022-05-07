import { describe, expect, it } from 'vitest';
import { Member } from './Member';
import { ElseLogicV1 } from './ElseLogicV1';
import { ElseLogicV2 } from './ElseLogicV2';

describe('EarlyReturn', () => {
  describe('V1', () => {
    it('単一ネストのELSE IFを検証する', () => {
      const findHp = new ElseLogicV1(new Member(100, 100));
      expect(findHp.getCondition()).toBe('fine');

      const cautionHp = new ElseLogicV1(new Member(40, 100));
      expect(cautionHp.getCondition()).toBe('caution');

      const dangerHp = new ElseLogicV1(new Member(20, 100));
      expect(dangerHp.getCondition()).toBe('danger');

      const deadHp = new ElseLogicV1(new Member(0, 100));
      expect(deadHp.getCondition()).toBe('dead');
    });
  });

  describe('V2', () => {
    it('ELSE IFの中から return する', () => {
      const findHp = new ElseLogicV2(new Member(100, 100));
      expect(findHp.getCondition()).toBe('fine');

      const cautionHp = new ElseLogicV2(new Member(40, 100));
      expect(cautionHp.getCondition()).toBe('caution');

      const dangerHp = new ElseLogicV2(new Member(20, 100));
      expect(dangerHp.getCondition()).toBe('danger');

      const deadHp = new ElseLogicV2(new Member(0, 100));
      expect(deadHp.getCondition()).toBe('dead');
    });
  });
});
