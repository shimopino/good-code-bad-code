import { describe, expect, it } from 'vitest';
import { HitPointV1 } from './HitPointV1';

/**
 * 第2章 データとロジックを近い場所に配置する
 *
 * 書籍を上から読むだけだと目的がよくわからないからTDDしづらい...
 */
describe('HitPoint', () => {
  describe('V1', () => {
    it('HPを計算する', () => {
      const hp = new HitPointV1(100, 50, 20);

      hp.recover();

      expect(hp.hitPoint).toBe(100 + 20);

      hp.damage();

      expect(hp.hitPoint).toBe(100 + 20 - 50);
    });

    it('HPの回復が上限を超える', () => {
      const hp = new HitPointV1(900, 0, 100);

      hp.recover();

      expect(hp.hitPoint).toBe(999);
    });

    it('HPの減少が下限を下回る', () => {
      const hp = new HitPointV1(100, 110, 0);

      hp.damage();

      expect(hp.hitPoint).toBe(0);
    });
  });
});
