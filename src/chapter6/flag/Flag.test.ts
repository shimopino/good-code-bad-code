import { describe, expect, it } from 'vitest';
import { Member } from './Member';
import { FlagLogicV1 } from './V1/FlagLogicV1';
import { DamageLogicV2 } from './V2/DamageLogic';
import { ApplyDamageLogic } from './V3/ApplyDamageLogic';

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

  describe('V2', () => {
    it('フラグで分岐させていた分だけメソッドを分離する', () => {
      const member = new Member(10, 100);
      const logic = new DamageLogicV2(member);

      logic.hitPointDamage(5);
      expect(member).toEqual({
        hitPoint: 10 - 5,
        magicPoint: 100,
        state: 'fine',
      });

      logic.magicPointDamage(30);
      expect(member).toEqual({
        hitPoint: 10 - 5,
        magicPoint: 100 - 30,
        state: 'fine',
      });
    });
  });

  describe('V3', () => {
    it('ストラテジーパターンを使用して条件分岐の削除', () => {
      const member = new Member(10, 100);
      const logic = new ApplyDamageLogic(member);

      logic.applyDamage('hitPoint', 5);
      expect(member).toEqual({
        hitPoint: 10 - 5,
        magicPoint: 100,
        state: 'fine',
      });

      logic.applyDamage('magicPoint', 30);
      expect(member).toEqual({
        hitPoint: 10 - 5,
        magicPoint: 100 - 30,
        state: 'fine',
      });
    });
  });
});
