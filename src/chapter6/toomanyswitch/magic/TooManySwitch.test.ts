import { describe, expect, it } from 'vitest';
import { MagicManagerV1 } from './MagicManagerV1';
import { MagicManagerV2 } from './MagicManagerV2';

describe('EarlyReturn', () => {
  describe('V1', () => {
    it('Switch文で魔法種別ごとに分岐処理を実施する', () => {
      const magicManager = new MagicManagerV1();

      expect(magicManager.getName('fire')).toBe('ファイア');
      expect(magicManager.getName('shiden')).toBe('紫電');
    });
  });

  describe('V2', () => {
    it('複数のメソッド内で同一の Switch 文を複製する', () => {
      const magicManager = new MagicManagerV2();

      expect(magicManager.getName('fire')).toBe('ファイア');
      expect(magicManager.getName('shiden')).toBe('紫電');
      expect(magicManager.getName('hellFire')).toBe('地獄の業火');

      expect(magicManager.costMagicPoint('fire')).toBe(5);
      expect(magicManager.costMagicPoint('shiden')).toBe(10);
      expect(magicManager.costMagicPoint('hellFire')).toBe(16);

      expect(magicManager.attackPower('fire')).toBe(5);
      expect(magicManager.attackPower('shiden')).toBe(10);
      // 対応忘れ
      // expect(magicManager.attackPower('hellFire')).toBe(16);

      // 追加漏れ
      expect(magicManager.attackPower('fire')).toBe(5);
      expect(magicManager.attackPower('shiden')).toBe(10);
    });
  });
});
