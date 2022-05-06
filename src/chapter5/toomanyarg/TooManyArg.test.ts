import { describe, expect, it } from 'vitest';
import { MagicPoint } from './MagicPoint';
import { RecoverMagicPointMethodV1 } from './RecoverMagicPointMethodV1';

/**
 * 実現したい魔法力の仕様は以下
 *
 * - 魔法を使うと、魔法力は一定量減少する
 * - 回復アイテムなどにより、魔法力は一定量回復する
 * - 魔法力には最大値がある
 * - 魔法力は最大値まで回復可能
 * - 一部の武備品は、魔法力の最大値を増加させる効果を持つ
 */

describe('TooManyArg', () => {
  describe('V1', () => {
    it('引数が多すぎる', () => {
      const logic = new RecoverMagicPointMethodV1();

      const recovered = logic.recoverMagicPoint(10, 2, [1, 2], 20);

      expect(recovered).toBe(30);
    });
  });

  describe('V2', () => {
    it('引数が多過ぎたので、個別のメソッドに分離する', () => {
      const mp = new MagicPoint(50);

      expect(mp).toEqual({
        currentAmount: 50,
        originalMaxAmount: 100,
        maxIncrements: [],
      });

      // 現在の魔法力の取得
      expect(mp.current()).toBe(50);

      // 魔法力を回復させる
      mp.recover(30);

      expect(mp.current()).toBe(80);
    });
  });
});
