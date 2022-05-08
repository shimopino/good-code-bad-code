import { describe, expect, it } from 'vitest';
import { FighterPhysicalAttackV1 } from './FighterPhysicalAttackV1';
import { PhysicalAttackV1 } from './PhysicalAttackV1';
import { FighterPhysicalAttackV2 } from './FighterPhysicalAttackV2';
import { PhysicalAttackV2 } from './PhysicalAttackV2';

describe('Inheritance', () => {
  describe('V1', () => {
    it('継承で親クラスのメソッドを呼び出す', () => {
      const baseAttack = new PhysicalAttackV1();
      const fighterAttack = new FighterPhysicalAttackV1();

      expect(baseAttack.singleAttackDamage()).toBe(30);
      expect(baseAttack.doubleAttackDamage()).toBe(60);

      /**
       * 継承の場合、親クラス PhysicalAttackV1 の各メソッドの
       * 仕様変更の影響を受けてしまう。親クラスの基本攻撃力が変化
       * してしまうと、格闘家の攻撃力も自動的に変更されてしまう
       */
      expect(fighterAttack.singleAttackDamage()).toBe(50);
      expect(fighterAttack.doubleAttackDamage()).toBe(70);
    });
  });

  describe('V2', () => {
    it('コンポジッション構造にして蜜結合を避ける', () => {
      const baseAttack = new PhysicalAttackV2();
      const fighterAttack = new FighterPhysicalAttackV2(baseAttack);

      expect(baseAttack.singleAttackDamage()).toBe(30);
      expect(baseAttack.doubleAttackDamage()).toBe(60);

      expect(fighterAttack.singleAttackDamage()).toBe(50);
      expect(fighterAttack.doubleAttackDamage()).toBe(70);
    });
  });
});
