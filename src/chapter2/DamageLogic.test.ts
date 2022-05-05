import { describe, expect, it } from 'vitest';
import { DamageLogicV1 } from './DamageLogicV1';

/**
 * ダメージの計算ロジック
 *
 * 総攻撃量 = (プレイヤー本人の攻撃力 + プレイヤーの武器の攻撃力)
 * 総防御力 = (敵本体の防御力 + 敵の防具の防御力)
 * ダメージ量 = 総攻撃量 - 総防御力 / 2
 */
describe('DomageLogic', () => {
  it('ダメージ量を計算できる', () => {
    const damage = new DamageLogicV1(10, 20, 5, 10);

    expect(damage.getDamage()).toBe(10 + 20 - (5 + 10) / 2);
  });
});
