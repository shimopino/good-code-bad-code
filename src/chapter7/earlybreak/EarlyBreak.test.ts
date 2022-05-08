import { describe, expect, it } from 'vitest';
import { LogicV1 } from './LogicV1';
import { Member } from './Member';

/**
 * 実現したい機能
 *
 * - 順番にメンバーの連続攻撃の成否を評価する
 *   - 成功時
 *     - そのメンバーの攻撃力 x 1.1 を加算ダメージとする
 *   - 失敗時
 *     - 以降の後続メンバーの連携も評価しない
 * - 加算ダメージが 30 以上の場合
 *   - 加算ダメージ値を総ダメージ値に加算する
 * - 加算ダメージが 30 未満の場合
 *   - 連携失敗として、後続メンバーの連携も評価しない
 */

describe('EarlyBreak', () => {
  describe('V1', () => {
    it('早期 break を使用しないネスト構造を再現する', () => {
      const members = [
        new Member(),
        new Member(),
        new Member(),
        new Member(),
        new Member(),
      ];
      const logic = new LogicV1();

      const damage = logic.totalDamage(members);

      expect(damage).toBe(30 * 1.1 * 5);
    });
  });
});
