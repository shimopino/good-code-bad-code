import { describe, expect, it } from 'vitest';
import { AttackPowerV1 } from './AttackPowerV1';
import { AttackPowerV2 } from './AttackPowerV2';
import { AttackPowerV3 } from './AttackPowerV3';
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
    it('攻撃力を強化するメソッド経由でアクセスする', () => {
      const attackPower = new AttackPowerV2(20);

      // 内部の状態を変更する
      attackPower.reinForce(15);

      expect(attackPower).toEqual(new AttackPowerV2(35));
    });

    it('攻撃力を無効化する', () => {
      const attackPower = new AttackPowerV2(20);

      attackPower.disable();

      expect(attackPower).toEqual(new AttackPowerV2(0));
    });
  });

  describe('V3', () => {
    it('攻撃力を変更して元のインスタンスに影響を与えない', () => {
      const attackPower = new AttackPowerV3(20);

      const reinForce = attackPower.reinForce(10);

      expect(attackPower).toEqual(new AttackPowerV3(20));
      expect(reinForce).toEqual(new AttackPowerV3(30));
    });

    it.todo('攻撃力を無力化しても元のインスタンスに影響を与えない');
    it.todo('親となるWeapon側から攻撃力を変更できる');
  });
});
