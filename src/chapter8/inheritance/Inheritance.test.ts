import { describe, expect, it } from 'vitest';
import { FighterPhysicalAttackV1 } from './FighterPhysicalAttackV1';
import { PhysicalAttackV1 } from './PhysicalAttackV1';

describe('Inheritance', () => {
  describe('V1', () => {
    it('継承で親クラスのメソッドを呼び出す', () => {
      const baseAttack = new PhysicalAttackV1();
      const fighterAttack = new FighterPhysicalAttackV1();

      expect(baseAttack.singleAttackDamage()).toBe(30);
      expect(baseAttack.doubleAttackDamage()).toBe(60);

      expect(fighterAttack.singleAttackDamage()).toBe(50);
      expect(fighterAttack.doubleAttackDamage()).toBe(70);
    });
  });
});
