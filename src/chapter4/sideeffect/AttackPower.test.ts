import { describe, expect, it } from 'vitest';
import { AttackPowerV1 } from './AttackPowerV1';
import { WeaponV1 } from './WeaponV1';

describe('AttackPower', () => {
  describe('V1', () => {
    it('AttackPowerインスタンスを使い回す', () => {
      const attackPower = new AttackPowerV1(20);

      const weaponA = new WeaponV1(attackPower);
      const weaponB = new WeaponV1(attackPower);

      /**
       * 同じインスタンスを参照しているので、toEqualではなく
       * toBeで等価性の検証をしても合格する
       */
      expect(weaponA.attackPower).toBe(attackPower);
      expect(weaponB.attackPower).toBe(attackPower);
    });

    it('使いまわしている攻撃力を途中で変更すると...', () => {
      const attackPower = new AttackPowerV1(20);

      const weaponA = new WeaponV1(attackPower);
      const weaponB = new WeaponV1(attackPower);

      expect(weaponA.attackPower).toBe(attackPower);
      expect(weaponB.attackPower).toBe(attackPower);

      // 途中で攻撃力を変更してみると...
      weaponA.attackPower.power = 25;

      expect(weaponA.attackPower.power).toBe(25);
      expect(weaponB.attackPower.power).toBe(25); // こちらも "25" になっている
    });

    it('個別にインスタンスを生成する', () => {
      const attackPowerA = new AttackPowerV1(20);
      const attackPowerB = new AttackPowerV1(20);

      const weaponA = new WeaponV1(attackPowerA);
      const weaponB = new WeaponV1(attackPowerB);

      expect(weaponA.attackPower.power).toBe(20);
      expect(weaponA.attackPower.power).toBe(20);

      weaponA.attackPower.power += 10;

      // それぞれのインスタンスは個別に生成しているので影響が反映しない
      expect(weaponA.attackPower.power).toBe(30);
      expect(weaponB.attackPower.power).toBe(20);
    });
  });

  describe('V2', () => {
    it.todo('攻撃力を強化するメソッド経由でアクセスする');

    it.todo('攻撃力を無効化する');
  });
});
