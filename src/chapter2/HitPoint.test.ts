import { describe, expect, it } from 'vitest';
import { HitPointV1 } from './HitPoint';

/**
 * 第2章 データとロジックを近い場所に配置する
 *
 * 書籍を上から読むだけだと目的がよくわからないからTDDしづらい...
 */
describe('HitPoint', () => {
  it('HPを計算する', () => {
    const hp = new HitPointV1(100, 50, 20);

    hp.recover();

    expect(hp.hitPoint).toBe(100 + 20);

    hp.damage();

    expect(hp.hitPoint).toBe(100 + 20 - 50);
  });
});
