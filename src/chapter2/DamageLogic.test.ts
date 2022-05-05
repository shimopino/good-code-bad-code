import { describe, expect, it } from 'vitest';
import { DamageLogicV1 } from './DamageLogicV1';
import { DamageLogicV2 } from './DamageLogicV2';
import { DamageLogicV3 } from './DamageLogicV3';
import { DamageLogicV4 } from './DamageLogicV4';

/**
 * ダメージの計算ロジック
 *
 * 総攻撃量 = (プレイヤー本人の攻撃力 + プレイヤーの武器の攻撃力)
 * 総防御力 = (敵本体の防御力 + 敵の防具の防御力)
 * ダメージ量 = 総攻撃量 - 総防御力 / 2
 */

/**
 * 第2章では、クラス自体のAPI設計には言及していない
 *
 * そのため、単体テストではそこまでコードは変化しない
 * きっと第3章以降にここら辺のオブジェクト同士のコミュニケーションに言及しているはず？
 */
describe('DomageLogic', () => {
  it('[V1] ダメージ量を計算できる', () => {
    const damage = new DamageLogicV1(10, 20, 5, 10);

    expect(damage.getDamage()).toBe(10 + 20 - (5 + 10) / 2);
  });

  it('[V2] ダメージ量を計算できる', () => {
    const damage = new DamageLogicV2(10, 20, 5, 10);

    expect(damage.getDamage()).toBe(10 + 20 - (5 + 10) / 2);
  });

  it('[V3] ダメージ量を計算できる', () => {
    const damage = new DamageLogicV3(10, 20, 5, 10);

    expect(damage.getDamage()).toBe(10 + 20 - (5 + 10) / 2);
  });

  /**
   * コピペミスで同じ変数で足し算してたけど、単体テストのおかげでミスに気づけた
   * やはりリファクタリングにはテストが必要
   */
  it('[V4] ダメージ量を計算できる', () => {
    const damage = new DamageLogicV4(10, 20, 5, 10);

    expect(damage.getDamage()).toBe(10 + 20 - (5 + 10) / 2);
  });
});
