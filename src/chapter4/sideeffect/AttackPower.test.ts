import { describe, expect, it } from 'vitest';
import { AttackPower } from './AttackPower';
import { Weapon } from './Weapon';

describe('AttackPower', () => {
  describe('V1', () => {
    it('AttackPowerインスタンスを使い回す', () => {
      const attackPower = new AttackPower(20);

      const weaponA = new Weapon(attackPower);
      const weaponB = new Weapon(attackPower);

      /**
       * 同じインスタンスを参照しているので、toEqualではなく
       * toBeで等価性の検証をしても合格する
       */
      expect(weaponA.attackPower).toBe(attackPower);
      expect(weaponB.attackPower).toBe(attackPower);
    });

    it('使いまわしている攻撃力を途中で変更すると...', () => {
      const attackPower = new AttackPower(20);

      const weaponA = new Weapon(attackPower);
      const weaponB = new Weapon(attackPower);

      expect(weaponA.attackPower).toBe(attackPower);
      expect(weaponB.attackPower).toBe(attackPower);

      // 途中で攻撃力を変更してみると...
      weaponA.attackPower.power = 25;

      expect(weaponA.attackPower.power).toBe(25);
      expect(weaponB.attackPower.power).toBe(25); // こちらも "25" になっている
    });

    it('個別にインスタンスを生成する', () => {
      const attackPowerA = new AttackPower(20);
      const attackPowerB = new AttackPower(20);

      const weaponA = new Weapon(attackPowerA);
      const weaponB = new Weapon(attackPowerB);

      expect(weaponA.attackPower.power).toBe(20);
      expect(weaponA.attackPower.power).toBe(20);

      weaponA.attackPower.power += 10;

      // それぞれのインスタンスは個別に生成しているので影響が反映しない
      expect(weaponA.attackPower.power).toBe(30);
      expect(weaponB.attackPower.power).toBe(20);
    });
  });
});
