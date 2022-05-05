import { describe, expect, it } from 'vitest';
import { DamageLogicV1 } from './DamageLogicV1';
import { DamageLogicV2 } from './DamageLogicV2';
import { Enemy } from './Enemy';
import { Member } from './Member';

describe('DamageLogic', () => {
  describe('V1', () => {
    it('安全な状態で初期化できる', () => {
      const member = new Member();
      const enemy = new Enemy();
      const logic = new DamageLogicV1(member, enemy);

      expect(logic).toBeDefined();
    });

    it('ダメージを計算できる', () => {
      const member = new Member();
      const enemy = new Enemy();
      const logic = new DamageLogicV1(member, enemy);

      expect(logic.damage()).toBe(0);
    });
  });

  describe('V2', () => {
    it('安全な状態で初期化できる', () => {
      const member = new Member();
      const enemy = new Enemy();
      const logic = new DamageLogicV2(member, enemy);

      expect(logic).toBeDefined();
    });

    it('ダメージを計算できる', () => {
      const member = new Member();
      const enemy = new Enemy();
      const logic = new DamageLogicV2(member, enemy);

      expect(logic.damage()).toBe(0);
    });
  });
});
